import MDX from "@/components/MDX";
import { getAllRoutes, getPageBySlug } from "@/lib/content";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const routes = await getAllRoutes();
  return routes.map((segments) => ({ slug: segments }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const doc = await getPageBySlug(slug);
  
  if (!doc) {
    return {
      title: "Página no encontrada - Oeste Vaquero",
    };
  }

  const title = doc.meta.title || slug.join(" ");
  const description = doc.meta.excerpt || doc.meta.description || `Descubre ${title} en Oeste Vaquero, tu tienda western online.`;

  return {
    title: `${title} | Oeste Vaquero`,
    description,
    openGraph: {
      title: `${title} | Oeste Vaquero`,
      description,
      type: "article",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const doc = await getPageBySlug(slug);
  if (!doc) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-3xl font-bold text-amber-600 mb-4">Página no encontrada</h1>
        <p className="text-neutral-400">Lo sentimos, no pudimos encontrar la página que buscas.</p>
      </div>
    );
  }
  return (
    <article className="container mx-auto max-w-4xl px-4 py-10 prose prose-lg prose-gray prose-headings:text-orange-600 prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-img:rounded-lg max-w-none">
      <MDX source={doc.content} debugId={doc.filePath} />
    </article>
  );
}
