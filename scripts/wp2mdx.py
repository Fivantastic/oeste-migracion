#!/usr/bin/env python3
import sys
import os
import re
import csv
import html
from pathlib import Path
from datetime import datetime
import xml.etree.ElementTree as ET

# Namespaces commonly present in WXR files
NS = {
    'content': 'http://purl.org/rss/1.0/modules/content/',
    'dc': 'http://purl.org/dc/elements/1.1/',
    'wp': 'http://wordpress.org/export/1.2/'
}

AWWW_SHORTCODE_PATTERNS = [
    # [aawp box="ASIN"]
    (re.compile(r"\[aawp[^\]]*?box=\"?([A-Za-z0-9]{8,})\"?[^\]]*\]", re.IGNORECASE),
     lambda m: f"<AmazonBox asin=\"{m.group(1)}\" />"),
    # [aawp asin="ASIN" ...]
    (re.compile(r"\[aawp[^\]]*?asin=\"?([A-Za-z0-9]{8,})\"?[^\]]*\]", re.IGNORECASE),
     lambda m: f"<AmazonBox asin=\"{m.group(1)}\" />"),
]


def slugify(text: str) -> str:
    text = text.strip().lower()
    # basic slugify
    text = re.sub(r"[^a-z0-9\-\s]", "", text)
    text = re.sub(r"\s+", "-", text)
    text = re.sub(r"-+", "-", text)
    return text.strip('-') or 'sin-titulo'


def replace_aawp_shortcodes(html_content: str) -> str:
    if not html_content:
        return ''
    out = html_content
    for pat, repl in AWWW_SHORTCODE_PATTERNS:
        out = pat.sub(repl, out)
    return out


def front_matter(meta: dict) -> str:
    # Minimal YAML front matter
    lines = ["---"]
    for k, v in meta.items():
        if isinstance(v, list):
            lines.append(f"{k}:")
            for item in v:
                lines.append(f"  - {item}")
        else:
            # escape quotes in simple way
            if isinstance(v, str) and (":" in v or "\"" in v):
                lines.append(f"{k}: \"{v.replace('"', '\\"')}\"")
            else:
                lines.append(f"{k}: {v}")
    lines.append("---\n")
    return "\n".join(lines)


def ensure_dir(p: Path):
    p.mkdir(parents=True, exist_ok=True)


def parse_items(tree: ET.ElementTree):
    channel = tree.getroot().find('channel')
    for item in channel.findall('item'):
        yield item


def get_text(el, path, ns=None):
    if ns is None:
        ns = NS
    node = el.find(path, ns)
    return node.text if node is not None else None


def main():
    if len(sys.argv) < 3:
        print("Usage: wp2mdx.py <wxr-xml> <output_content_dir>")
        sys.exit(1)

    wxr_path = Path(sys.argv[1])
    out_root = Path(sys.argv[2])

    posts_dir = out_root / 'posts'
    pages_dir = out_root / 'pages'
    ensure_dir(posts_dir)
    ensure_dir(pages_dir)

    urlmap_path = out_root / 'url_map.csv'

    tree = ET.parse(str(wxr_path))
    count = 0
    with urlmap_path.open('w', newline='', encoding='utf-8') as fcsv:
        writer = csv.writer(fcsv)
        writer.writerow(['old_url', 'new_path'])

        for item in parse_items(tree):
            post_type = get_text(item, 'wp:post_type')
            if post_type not in ('post', 'page'):
                continue

            status = get_text(item, 'wp:status') or 'publish'
            title = (get_text(item, 'title') or '').strip()
            slug = (get_text(item, 'wp:post_name') or slugify(title))
            link = get_text(item, 'link') or ''
            date_str = get_text(item, 'wp:post_date') or ''
            try:
                # use date for filename if valid
                dt = datetime.strptime(date_str[:19], '%Y-%m-%d %H:%M:%S') if len(date_str) >= 19 else None
            except Exception:
                dt = None

            categories = []
            tags = []
            for cat in item.findall('category'):
                domain = cat.get('domain')
                term = (cat.text or '').strip()
                if not term:
                    continue
                if domain == 'category':
                    categories.append(slugify(term))
                elif domain == 'post_tag':
                    tags.append(slugify(term))

            excerpt = get_text(item, 'excerpt:encoded', {'excerpt': 'http://wordpress.org/export/1.2/excerpt/'})
            content_html = get_text(item, 'content:encoded') or ''
            content_html = html.unescape(content_html)
            content_html = replace_aawp_shortcodes(content_html)

            meta = {
                'title': title or 'Sin título',
                'slug': slug,
                'status': status,
                'date': date_str or '',
            }
            if categories:
                meta['categories'] = categories
            if tags:
                meta['tags'] = tags
            if excerpt and excerpt.strip():
                meta['excerpt'] = excerpt.strip().replace('\n', ' ')

            fm = front_matter(meta)
            body = fm + content_html + "\n"

            if post_type == 'post':
                # filename include date if available
                if dt:
                    fname = f"{dt.strftime('%Y-%m-%d')}-{slug or 'post'}.mdx"
                else:
                    fname = f"{slug or 'post'}.mdx"
                out_path = posts_dir / fname
            else:
                fname = f"{slug or 'page'}.mdx"
                out_path = pages_dir / fname

            with out_path.open('w', encoding='utf-8') as f:
                f.write(body)

            writer.writerow([link, str(out_path.relative_to(out_root))])
            count += 1

    print(f"Converted {count} items -> {out_root}")


if __name__ == '__main__':
    main()
