import path from "node:path";
import fs from "node:fs/promises";
import matter from "gray-matter";

export type MDXDoc = {
  slug: string[];
  meta: Record<string, any>;
  content: string;
  filePath: string;
};

const ROOT = process.cwd();
export const CONTENT_ROOT = path.resolve(ROOT, "..", "content");

const PAGES_DIR = path.join(CONTENT_ROOT, "pages");
const POSTS_DIR = path.join(CONTENT_ROOT, "posts");

export async function fileExists(p: string) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function readMDXFile(filePath: string, slugParts: string[]): Promise<MDXDoc> {
  const raw = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(raw);
  return { slug: slugParts, meta: data as any, content, filePath };
}

export async function getPageBySlug(slug: string[]): Promise<MDXDoc | null> {
  // Try pages first
  const pageTry = path.join(PAGES_DIR, `${slug[slug.length - 1]}.mdx`);
  if (await fileExists(pageTry)) {
    return readMDXFile(pageTry, slug);
  }
  // Try nested path under pages (dir/index.mdx style not used in conversion)
  const pageTryIndex = path.join(PAGES_DIR, ...slug, "index.mdx");
  if (await fileExists(pageTryIndex)) return readMDXFile(pageTryIndex, slug);

  // Try posts by slug (without date prefix)
  const files = await fs.readdir(POSTS_DIR).catch(() => [] as string[]);
  const base = slug[slug.length - 1];
  const postName = files.find((f) => f.endsWith(`${base}.mdx`));
  if (postName) return readMDXFile(path.join(POSTS_DIR, postName), slug);

  return null;
}

export async function getHomePage(): Promise<MDXDoc | null> {
  // Use simplified version that works without MDX compilation errors
  const candidates = [
    "oeste-vaquero-simple",
    "test",
    "index",
    "home",
    "inicio",
  ];
  for (const name of candidates) {
    const p = path.join(PAGES_DIR, `${name}.mdx`);
    if (await fileExists(p)) return readMDXFile(p, [name]);
  }
  // Fallback: first page that's not the problematic oeste-vaquero
  const list = await fs.readdir(PAGES_DIR).catch(() => [] as string[]);
  const filtered = list.filter(f => f.endsWith('.mdx') && !f.includes('oeste-vaquero.mdx'));
  if (filtered.length) return readMDXFile(path.join(PAGES_DIR, filtered[0]), [filtered[0].replace(/\.mdx$/, "")]);
  return null;
}

export async function getAllRoutes(): Promise<string[][]> {
  const routes: string[][] = [];
  const pages = await fs.readdir(PAGES_DIR).catch(() => [] as string[]);
  for (const f of pages) if (f.endsWith(".mdx")) routes.push([f.replace(/\.mdx$/, "")]);
  const posts = await fs.readdir(POSTS_DIR).catch(() => [] as string[]);
  for (const f of posts) if (f.endsWith(".mdx")) routes.push([f.replace(/^(\d{4}-\d{2}-\d{2}-)/, "").replace(/\.mdx$/, "")]);
  return routes;
}
