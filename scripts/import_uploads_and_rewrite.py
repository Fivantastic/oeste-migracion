#!/usr/bin/env python3
import sys
import zipfile
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / 'data' / 'wp_export'
CONTENT = ROOT / 'content'
PUBLIC_UPLOADS = ROOT / 'web' / 'public' / 'uploads'

# Patterns to rewrite absolute WP URLs to local /uploads/
WP_UPLOADS_HOST_PATTERNS = [
    r'https?://www\.oestevaquero\.com/wp-content/uploads/',
    r'https?://oestevaquero\.com/wp-content/uploads/',
]


def unzip_uploads(zip_path: Path):
    PUBLIC_UPLOADS.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(zip_path, 'r') as z:
        z.extractall(PUBLIC_UPLOADS)
    print(f'Extracted uploads to {PUBLIC_UPLOADS}')


def rewrite_in_file(p: Path):
    text = p.read_text(encoding='utf-8')
    new = text
    for pat in WP_UPLOADS_HOST_PATTERNS:
        new = re.sub(pat, '/uploads/', new)
    if new != text:
        p.write_text(new, encoding='utf-8')
        return True
    return False


def rewrite_content_urls():
    changed = 0
    for p in CONTENT.rglob('*.mdx'):
        if rewrite_in_file(p):
            changed += 1
    print(f'Rewritten image URLs in {changed} MDX files')


def main():
    zip_path = DATA / 'uploads.zip'
    if not zip_path.exists():
        print(f'ERROR: {zip_path} not found. Place your uploads.zip there.')
        sys.exit(1)
    unzip_uploads(zip_path)
    rewrite_content_urls()
    print('Done.')

if __name__ == '__main__':
    main()
