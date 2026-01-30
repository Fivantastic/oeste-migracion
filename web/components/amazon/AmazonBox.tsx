"use client";
import React from "react";
import Image from "next/image";
import { buildAmazonUrl } from "@/lib/amazon";

type Props = {
  asin: string;
  title?: string;
  img?: string;
  cta?: string;
};

export default function AmazonBox({ asin, title, img, cta = "Ver en Amazon" }: Props) {
  const href = buildAmazonUrl({ type: "dp", asin });
  
  return (
    <div className="not-prose border border-gray-200 rounded-lg p-4 md:p-6 flex flex-col md:flex-row gap-4 items-center bg-white hover:shadow-lg transition-all duration-300 my-6">
      {/* Imagen del producto */}
      <div className="flex-shrink-0 w-full md:w-40 h-40 bg-gray-100 rounded-lg overflow-hidden relative">
        {img ? (
          <Image 
            src={img} 
            alt={title || asin} 
            width={160} 
            height={160} 
            className="object-cover w-full h-full"
            style={{ height: "auto", width: "auto" }} 
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>
      
      {/* Contenido */}
      <div className="flex-1 flex flex-col gap-3 w-full">
        <div>
          <h4 className="font-bold text-lg text-gray-900 mb-1">
            {title || `Producto Amazon`}
          </h4>
          <div className="text-xs text-gray-500 font-mono">
            {asin}
          </div>
        </div>
        
        <a
          href={href}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="inline-flex items-center justify-center rounded bg-orange-600 hover:bg-orange-700 px-6 py-3 text-sm font-semibold text-white uppercase tracking-wide transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          {cta}
        </a>
        
        <div className="flex items-center gap-1 text-xs text-gray-400">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <span>Enlace de afiliado de Amazon</span>
        </div>
      </div>
    </div>
  );
}
