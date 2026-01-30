import { readFileSync } from "fs";
import { join } from "path";

export type Product = {
  asin: string;
  title: string;
  category: string;
  image?: string;
  price?: string;
  rating?: number;
};

type ProductsData = {
  products: Record<string, {
    title: string;
    category: string;
    image?: string;
  }>;
};

let cachedData: ProductsData | null = null;

function getProductsData(): ProductsData {
  if (cachedData) return cachedData;
  
  try {
    const filePath = join(process.cwd(), "..", "data", "products.json");
    const fileContent = readFileSync(filePath, "utf-8");
    cachedData = JSON.parse(fileContent) as ProductsData;
    return cachedData;
  } catch (error) {
    console.warn("Could not load products.json, returning empty data");
    return { products: {} };
  }
}

export function getProduct(asin: string): Product | null {
  const productsData = getProductsData();
  const data = productsData.products[asin];
  if (!data) return null;
  return {
    asin,
    ...data,
  };
}

export function getProducts(asins: string[]): Product[] {
  return asins.map(getProduct).filter((p): p is Product => p !== null);
}

export function getProductsByCategory(category: string): Product[] {
  const productsData = getProductsData();
  return Object.entries(productsData.products)
    .filter(([_, data]) => data.category === category)
    .map(([asin, data]) => ({ asin, ...data }));
}
