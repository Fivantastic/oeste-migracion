"use client";
import React from "react";
import { buildAmazonUrl } from "@/lib/amazon";

type ProductGridProps = {
  asins: string[];
  columns?: 2 | 3 | 4;
  title?: string;
};

export default function ProductGrid({ asins, columns = 3, title }: ProductGridProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className="my-8 w-full">
      {title && (
        <h3 className="text-2xl font-bold mb-6 text-center text-orange-600 uppercase tracking-wide" style={{ fontFamily: 'var(--font-alfa-slab)' }}>
          {title}
        </h3>
      )}
      <div className={`grid ${gridCols[columns]} gap-4 md:gap-6`}>
        {asins.map((asin) => (
          <ProductCard key={asin} asin={asin} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ asin }: { asin: string }) {
  const href = buildAmazonUrl({ type: "dp", asin });
  
  return (
    <div className="group border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
      {/* Imagen placeholder */}
      <div className="aspect-square bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
      
      {/* Contenido */}
      <div className="p-4 space-y-3">
        <div className="text-xs text-gray-500 font-mono">
          {asin}
        </div>
        
        <a
          href={href}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2.5 px-4 rounded transition-colors uppercase tracking-wide text-sm"
        >
          Ver en Amazon
        </a>
        
        <div className="flex items-center justify-center gap-1 text-xs text-gray-400">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <span>Enlace de afiliado</span>
        </div>
      </div>
    </div>
  );
}
