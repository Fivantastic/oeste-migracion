"use client";
import React from "react";
import ProductGrid from "./ProductGrid";

type AAWPBoxProps = {
  box: string;
  grid?: string;
  title?: string;
};

/**
 * Componente que replica el shortcode [aawp box="..." grid="..."] de WordPress
 * Parsea los ASINs separados por comas y los muestra en un grid
 */
export default function AAWPBox({ box, grid = "3", title }: AAWPBoxProps) {
  // Parse ASINs from comma-separated string
  const asins = box
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const columns = parseInt(grid) as 2 | 3 | 4;
  const validColumns = [2, 3, 4].includes(columns) ? columns : 3;

  return <ProductGrid asins={asins} columns={validColumns} title={title} />;
}
