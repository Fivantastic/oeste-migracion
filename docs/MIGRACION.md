# Migración de Oeste Vaquero - WordPress a Next.js

## 📋 Resumen del Proyecto

Este proyecto migra el sitio web **Oeste Vaquero** de WordPress a Next.js, manteniendo toda la funcionalidad de afiliación de Amazon y mejorando el rendimiento y la experiencia de usuario.

## ✅ Estado Actual

### Completado

- ✅ **Estructura Next.js 15** con App Router
- ✅ **280 productos Amazon** extraídos y catalogados
- ✅ **Conversión de shortcodes AAWP** a componentes React
- ✅ **Sistema de productos** con categorización automática
- ✅ **Componentes visuales** con diseño western/cowboy
- ✅ **Header y Footer** con navegación completa
- ✅ **SEO optimizado** con metadata dinámica
- ✅ **26 páginas de contenido** migradas a MDX
- ✅ **Enlaces de afiliado** con tag `oestevaquero-21`

### Estructura de Archivos

```
oestevaquero-migracion/
├── web/                          # Aplicación Next.js
│   ├── app/
│   │   ├── layout.tsx           # Layout principal con Header/Footer
│   │   ├── page.tsx             # Página de inicio
│   │   └── [...slug]/page.tsx   # Páginas dinámicas
│   ├── components/
│   │   ├── SiteHeader.tsx       # Navegación principal
│   │   ├── SiteFooter.tsx       # Footer con enlaces
│   │   ├── MDX.tsx              # Renderizador de contenido
│   │   └── amazon/
│   │       ├── AmazonBox.tsx    # Producto individual
│   │       ├── AAWPBox.tsx      # Conversión de shortcodes
│   │       └── ProductGrid.tsx  # Grid de productos
│   └── lib/
│       ├── amazon.ts            # Generación de URLs de Amazon
│       ├── content.ts           # Sistema de contenido MDX
│       ├── products.ts          # Gestión de productos
│       └── mdxSanitize.ts       # Limpieza y conversión HTML→MDX
├── content/
│   ├── pages/                   # 26 páginas de contenido
│   └── posts/                   # 9 posts de blog
├── data/
│   └── products.json            # Base de datos de 280 productos
└── scripts/
    └── extract-asins.js         # Extractor de ASINs
```

## 🚀 Cómo Usar

### 1. Instalar Dependencias

```bash
cd web
npm install
```

### 2. Ejecutar en Desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

### 3. Construir para Producción

```bash
npm run build
npm start
```

## 📦 Productos Amazon

### Sistema de Productos

Los productos se gestionan automáticamente:

1. **Extracción**: El script `extract-asins.js` extrae todos los ASINs del contenido MDX
2. **Categorización**: Los productos se categorizan según la página donde aparecen
3. **Base de datos**: Se almacenan en `data/products.json`

### Actualizar Productos

```bash
node scripts/extract-asins.js
```

Esto regenerará `data/products.json` con todos los productos encontrados.

### Componentes de Productos

#### AAWPBox (Conversión de Shortcodes)

Los shortcodes de WordPress se convierten automáticamente:

**WordPress:**
```
[aawp box="B08SVPPR2L,B084Z25L6S,B0CH9TCTFT" grid="3"]
```

**Next.js (automático):**
```jsx
<AAWPBox box="B08SVPPR2L,B084Z25L6S,B0CH9TCTFT" grid="3" />
```

#### Uso Manual

```jsx
import AmazonBox from "@/components/amazon/AmazonBox";
import ProductGrid from "@/components/amazon/ProductGrid";

// Producto individual
<AmazonBox 
  asin="B08SVPPR2L" 
  title="Botas Vaqueras Mujer"
  img="/images/producto.jpg"
/>

// Grid de productos
<ProductGrid 
  asins={["B08SVPPR2L", "B084Z25L6S", "B0CH9TCTFT"]}
  columns={3}
  title="Productos Destacados"
/>
```

## 🎨 Diseño Western

El sitio mantiene el estilo western/cowboy con:

- **Colores**: Amber/naranja (#d97706) sobre fondo oscuro
- **Tipografías**: Alfa Slab One y Trade Winds
- **Efectos**: Hover con sombras amber, transiciones suaves
- **Iconos**: Estrellas western, texturas de cuero

## 📄 Contenido MDX

### Páginas Principales

- `/` - Página de inicio
- `/botas-vaqueras-de-mujer` - 24 productos
- `/botas-vaqueras-hombres` - 71 productos
- `/sombreros-western` - 75 productos
- `/cinturones-western` - Cinturones y hebillas
- `/camisas-western-hombre` - 14 productos
- `/camisetas-western` - 19 productos
- `/disfraces-vaqueros` - 23 productos
- `/bolsos-vaqueros` - 40 productos

### Páginas Legales

- `/politica-de-privacidad`
- `/politica-de-cookies`
- `/faqs`

## 🔧 Configuración

### Tag de Afiliado Amazon

El tag está configurado en `web/lib/amazon.ts`:

```typescript
export const AMAZON_TAG = "oestevaquero-21";
```

### SEO

Metadata configurada en:
- `web/app/layout.tsx` - Metadata global
- `web/app/[...slug]/page.tsx` - Metadata dinámica por página

## 📊 Estadísticas

- **280 productos únicos** de Amazon
- **8 categorías** de productos
- **26 páginas** de contenido
- **9 posts** de blog
- **100% responsive** - Mobile, tablet, desktop

### Productos por Categoría

- Sombreros: 75 productos
- Botas Hombre: 71 productos
- Bolsos: 40 productos
- Botas Mujer: 24 productos
- Disfraces: 23 productos
- Camisetas: 19 productos
- Camisas Hombre: 14 productos
- Pantalones Hombre: 14 productos

## 🚢 Despliegue

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
cd web
vercel
```

### Otros Proveedores

El sitio es compatible con cualquier proveedor que soporte Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Railway

## 🔄 Próximos Pasos

### Mejoras Sugeridas

1. **Imágenes de productos**: Agregar imágenes reales usando Amazon Product Advertising API
2. **Precios dinámicos**: Integrar API de Amazon para mostrar precios actualizados
3. **Búsqueda**: Implementar búsqueda de productos
4. **Filtros**: Añadir filtros por categoría, precio, etc.
5. **Analytics**: Integrar Google Analytics o similar
6. **Sitemap**: Generar sitemap automático con `next-sitemap`

### API de Amazon

Para obtener imágenes y precios reales:

1. Registrarse en [Amazon Associates](https://afiliados.amazon.es/)
2. Solicitar acceso a [Product Advertising API](https://webservices.amazon.es/paapi5/documentation/)
3. Implementar cliente API en `web/lib/amazon-api.ts`

## 📝 Notas

- Los enlaces de afiliado incluyen `rel="nofollow sponsored noopener"` para SEO
- El contenido MDX se sanitiza automáticamente para evitar errores de compilación
- Los shortcodes de Divi/WordPress se eliminan durante la conversión
- El sitio es completamente estático (SSG) para máximo rendimiento

## 🆘 Soporte

Para problemas o preguntas:
1. Revisar logs de compilación: `npm run build`
2. Verificar contenido MDX en `content/pages/`
3. Comprobar productos en `data/products.json`
4. Revisar sanitización en `web/lib/mdxSanitize.ts`

---

**Migración completada exitosamente** ✨
