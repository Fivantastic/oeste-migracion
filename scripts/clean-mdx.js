const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '../content/pages');

// Archivos ya limpios que NO tocar
const skipFiles = [
  'botas-vaqueras-hombres.mdx',
  'camisas-western-hombre.mdx',
  'camisas-western-mujer.mdx'
];

// Leer todos los archivos MDX
const files = fs.readdirSync(pagesDir)
  .filter(f => f.endsWith('.mdx') && !skipFiles.includes(f));

console.log(`Encontrados ${files.length} archivos MDX para limpiar...`);

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Extraer frontmatter
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) {
    console.log(`⚠️  ${file}: No se encontró frontmatter, saltando...`);
    return;
  }
  
  const frontmatter = frontmatterMatch[0];
  let body = content.substring(frontmatter.length).trim();
  
  // LIMPIEZA AGRESIVA - Eliminar TODO el HTML y shortcodes
  body = body.replace(/<!--[\s\S]*?-->/g, ''); // Comentarios HTML
  body = body.replace(/\[[\s\S]*?\]/g, ''); // TODOS los shortcodes
  body = body.replace(/<script[\s\S]*?<\/script>/gi, ''); // Scripts
  body = body.replace(/<style[\s\S]*?<\/style>/gi, ''); // Styles
  body = body.replace(/<br\s*\/?>/gi, '\n'); // BR a saltos de línea
  body = body.replace(/<hr\s*\/?>/gi, '\n---\n'); // HR a separador markdown
  body = body.replace(/<img[^>]*>/gi, ''); // Eliminar todas las imágenes
  body = body.replace(/<\/?[^>]+(>|$)/g, ''); // Eliminar TODAS las etiquetas HTML
  body = body.replace(/\/>/g, ''); // Eliminar /> huérfanos
  
  // Limpiar atributos huérfanos
  body = body.replace(/\s+(class|className|id|style|data-\w+)="[^"]*"/g, '');
  body = body.replace(/\s+(width|height|sizes|srcset|alt)="[^"]*"/g, '');
  
  // Limpiar espacios y saltos de línea excesivos
  body = body.replace(/\n{3,}/g, '\n\n');
  body = body.replace(/^\s+|\s+$/gm, ''); // Espacios al inicio/final de líneas
  body = body.trim();
  
  // Si el body está vacío o muy corto, poner un mensaje por defecto
  if (body.length < 50) {
    const title = frontmatterMatch[1].match(/title:\s*(.+)/)?.[1] || 'Producto';
    body = `# ${title}\n\nContenido en proceso de migración. Próximamente disponible.`;
  }
  
  // Reconstruir el archivo
  const cleanContent = `${frontmatter}\n\n${body}\n`;
  
  // Guardar
  fs.writeFileSync(filePath, cleanContent, 'utf8');
  console.log(`✅ ${file}: Limpiado`);
});

console.log(`\n✨ Limpieza completada: ${files.length} archivos procesados`);
