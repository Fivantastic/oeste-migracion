#!/usr/bin/env node
/**
 * Script para extraer todos los ASINs de Amazon del contenido MDX
 * y generar un archivo JSON con la estructura de productos
 */

const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '..', 'content', 'pages');
const OUTPUT_FILE = path.join(__dirname, '..', 'data', 'products.json');

// Regex para encontrar shortcodes AAWP (varios formatos)
const AAWP_PATTERNS = [
  /\[aawp\s+box\s*=\s*["']([^"']+)["']/gi,
  /\[aawp\s+box\s*=\s*<strong>([^<]+)<\/strong>/gi,
  /\[aawp\s+box\s*=\s*"([^"]+)"/gi,
  /\[aawp\s+box\s*=\s*'([^']+)'/gi,
];

function extractASINsFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const asins = new Set();
  
  // Probar todos los patrones
  AAWP_PATTERNS.forEach(pattern => {
    let match;
    const regex = new RegExp(pattern.source, pattern.flags);
    while ((match = regex.exec(content)) !== null) {
      const asinList = match[1];
      // Split por comas y limpiar espacios, HTML tags, etc
      asinList.split(',').forEach(asin => {
        const cleaned = asin.trim().replace(/<[^>]*>/g, '');
        if (cleaned && /^B[0-9A-Z]{9}$/.test(cleaned)) {
          asins.add(cleaned);
        }
      });
    }
  });
  
  return Array.from(asins);
}

function getCategoryFromFilename(filename) {
  const name = filename.replace('.mdx', '');
  
  // Mapeo de archivos a categorías
  const categoryMap = {
    'botas-vaqueras-de-mujer': 'botas-mujer',
    'botas-vaqueras-hombres': 'botas-hombre',
    'camisas-western-hombre': 'camisas-hombre',
    'camisas-western-mujer': 'camisas-mujer',
    'sombreros-western': 'sombreros',
    'cinturones-western': 'cinturones',
    'hebillas-western': 'hebillas',
    'bolsos-vaqueros': 'bolsos',
    'camisetas-western': 'camisetas',
    'corbata-de-bolo-y-complementos': 'complementos',
    'disfraces-vaqueros': 'disfraces',
    'vaqueros-hombre': 'pantalones-hombre',
    'vaqueros-mujer': 'pantalones-mujer',
  };
  
  return categoryMap[name] || 'general';
}

function main() {
  console.log('🔍 Extrayendo ASINs del contenido MDX...\n');
  
  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.mdx'));
  const allProducts = {};
  const stats = { total: 0, byCategory: {} };
  
  files.forEach(file => {
    const filePath = path.join(CONTENT_DIR, file);
    const asins = extractASINsFromFile(filePath);
    const category = getCategoryFromFilename(file);
    
    if (asins.length > 0) {
      console.log(`📄 ${file}: ${asins.length} productos (${category})`);
      
      asins.forEach(asin => {
        if (!allProducts[asin]) {
          allProducts[asin] = {
            title: `Producto ${asin}`,
            category: category,
            image: `/images/products/${category}/${asin}.jpg`
          };
          stats.total++;
          stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;
        }
      });
    }
  });
  
  // Crear estructura final
  const output = {
    products: allProducts,
    stats: {
      totalProducts: stats.total,
      totalCategories: Object.keys(stats.byCategory).length,
      byCategory: stats.byCategory
    },
    generatedAt: new Date().toISOString()
  };
  
  // Guardar archivo
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
  
  console.log('\n✅ Extracción completada!');
  console.log(`📊 Total de productos únicos: ${stats.total}`);
  console.log(`📁 Categorías encontradas: ${Object.keys(stats.byCategory).length}`);
  console.log(`💾 Guardado en: ${OUTPUT_FILE}\n`);
  
  // Mostrar resumen por categoría
  console.log('📋 Productos por categoría:');
  Object.entries(stats.byCategory)
    .sort((a, b) => b[1] - a[1])
    .forEach(([cat, count]) => {
      console.log(`   ${cat}: ${count} productos`);
    });
}

main();
