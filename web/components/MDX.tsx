import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import AmazonBox from "@/components/amazon/AmazonBox";
import AAWPBox from "@/components/amazon/AAWPBox";
import AmazonProductGrid from "@/components/AmazonProductGrid";
import { sanitizeMDXSource } from "@/lib/mdxSanitize";

// Basic components mapping
const components: Record<string, any> = {
  img: (props: any) => (
    // Use next/image for local uploads
    <Image
      src={props.src}
      alt={props.alt || ""}
      width={props.width ? Number(props.width) : 1200}
      height={props.height ? Number(props.height) : 800}
      sizes="100vw"
      style={{ height: "auto", width: "100%" }}
    />
  ),
  AmazonBox,
  AAWPBox,
  AmazonProductGrid,
};

export default function MDX({ source, debugId }: { source: string; debugId?: string }) {
  const sanitized = sanitizeMDXSource(source);
  
  // Debug: Log the exact content being passed to MDX compiler
  if (debugId && sanitized.includes('ds-arrow')) {
    console.log('[MDX DEBUG] Raw source contains ds-arrow:', source.includes('ds-arrow'));
    console.log('[MDX DEBUG] Sanitized content contains ds-arrow:', sanitized.includes('ds-arrow'));
    
    // Find and log the specific input pattern
    const inputMatch = sanitized.match(/input[^>]*ds-arrow[^>]*>[^<]*<input/i);
    if (inputMatch) {
      console.log('[MDX DEBUG] Found problematic input pattern in sanitized:', inputMatch[0]);
    }
    
    // Log a larger context around ds-arrow
    const dsIndex = sanitized.indexOf('ds-arrow');
    if (dsIndex !== -1) {
      const start = Math.max(0, dsIndex - 200);
      const end = Math.min(sanitized.length, dsIndex + 300);
      console.log('[MDX DEBUG] Context around ds-arrow:', sanitized.slice(start, end));
    }
  }
  
  // Pre-detect suspicious patterns that might cause compilation errors
  const suspicious = sanitized.match(/<([a-zA-Z][\w:-]*)([^<>]*?)<(?=[\w\/_!])/);
  if (suspicious) {
    const idx = suspicious.index ?? 0;
    const head = Math.max(0, idx - 120);
    const tail = Math.min(sanitized.length, idx + 200);
    console.warn('[MDX pre-detect] possible unclosed tag before < in', debugId || 'unknown', '\n...', sanitized.slice(head, tail), '...');
  }
  try {
    return (
      <MDXRemote
        source={sanitized}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            // Configure rehype-raw to pass through MDX node types injected by the pipeline
            rehypePlugins: [
              [
                rehypeRaw,
                {
                  passThrough: [
                    'mdxJsxTextElement',
                    'mdxJsxFlowElement',
                    'mdxJsxAttribute',
                    'mdxJsxExpressionAttribute',
                  ],
                },
              ],
            ],
          },
        }}
      />
    );
  } catch (err: any) {
    // Log a small window around the failure to help debug malformed HTML/MDX
    console.error('[MDX compile error]', debugId ? `(${debugId})` : '', err?.message || err);
    console.error('[MDX sanitized head]', sanitized.slice(0, 800));
    return (
      <div>
        <p>Contenido no disponible por un error de compilación MDX.</p>
      </div>
    );
  }
}
