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

const SLUG_SEGMENT = /^[a-z0-9-]+$/;
const DATE_PREFIX = /^\d{4}-\d{2}-\d{2}-/;

function isInsideDir(dir: string, filePath: string) {
  return path.resolve(filePath).startsWith(path.resolve(dir) + path.sep);
}

export async function getPageBySlug(slug: string[]): Promise<MDXDoc | null> {
  if (!Array.isArray(slug) || slug.length !== 1 || !SLUG_SEGMENT.test(slug[0])) return null;
  const base = slug[0];

  const pageTry = path.join(PAGES_DIR, `${base}.mdx`);
  if (isInsideDir(PAGES_DIR, pageTry) && (await fileExists(pageTry))) {
    return readMDXFile(pageTry, slug);
  }

  // Posts are stored as YYYY-MM-DD-<slug>.mdx (or <slug>.mdx)
  const files = await fs.readdir(POSTS_DIR).catch(() => [] as string[]);
  const postName = files.find((f) => f.replace(DATE_PREFIX, "") === `${base}.mdx`);
  if (postName) {
    const postPath = path.join(POSTS_DIR, postName);
    if (isInsideDir(POSTS_DIR, postPath)) return readMDXFile(postPath, slug);
  }

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
