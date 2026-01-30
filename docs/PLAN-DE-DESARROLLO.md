# 📋 Plan de Desarrollo - Oeste Vaquero

**Proyecto**: Migración WordPress → Next.js  
**Última actualización**: 2025-10-07

---

## 🎯 Leyenda de Prioridades

- 🔴 **CRÍTICO** - Bloquea funcionalidad esencial
- 🟠 **ALTA** - Importante para lanzamiento
- 🟡 **MEDIA** - Mejora significativa
- 🟢 **BAJA** - Optimización o nice-to-have

---

## 📊 Estado General del Proyecto

**Fase actual**: Migración base y desarrollo inicial  
**Progreso global**: ███░░░░░░░ 30%

### Resumen de Tareas
- ✅ Completadas: 10
- 🚧 En progreso: 5
- ⏳ Pendientes: 35
- **Total**: 50 tareas

---

## 📄 Inventario de Páginas del Sitio

### 🏠 Página Principal
- [x] `/` - Home (básica, necesita mejora mobile-first)

### 🛍️ Páginas de Productos (26 páginas)
#### Calzado
- [x] `/botas-vaqueras-de-mujer` - 24 productos
- [x] `/botas-vaqueras-hombres` - 71 productos

#### Ropa
- [x] `/camisas-western-hombre` - 14 productos
- [x] `/camisas-western-mujer`
- [x] `/camisetas-western` - 19 productos
- [x] `/vaqueros-hombre`
- [x] `/vaqueros-mujer`
- [x] `/ropa-cowboy`
- [x] `/ropa-cowgirl`
- [x] `/disfraces-vaqueros` - 23 productos

#### Accesorios
- [x] `/sombreros-western` - 75 productos
- [x] `/cinturones-western`
- [x] `/hebillas-western`
- [x] `/corbata-de-bolo-y-complementos`
- [x] `/bolsos-vaqueros` - 40 productos

#### Páginas Especiales
- [x] `/todo-western` - Catálogo completo
- [x] `/jinete-vaquero`
- [x] `/oeste-equipo`
- [x] `/zarzaparrilla-saloon`

### 📝 Blog (9 posts + índice)
- [ ] `/blog` - Página índice del blog
- [x] `/blog/historia-hebillas` (2019-02-25)
- [x] `/blog/frases-de-vaqueros` (2019-03-07)
- [x] `/blog/bandas-sonoras-western-westworld` (2019-03-24)
- [x] `/blog/bandas-sonoras-western-godless` (2019-04-07)
- [x] `/blog/articulos-vaqueros-sorprendentes` (2019-09-19)
- [x] `/blog/articulos-vaqueros-sorprendentes-2` (2020-05-10)
- [x] `/blog/frases-peliculas-oeste` (2020-05-21)
- [x] `/blog/tatuajes-brazo-western` (2020-05-28)
- [x] `/blog/disfraces-de-carnaval-2024-indias-vaqueros` (2021-01-15)

### ⚖️ Páginas Legales
- [x] `/politica-de-privacidad`
- [x] `/politica-de-cookies`
- [x] `/faqs`

### 🔍 Páginas Auxiliares
- [ ] `/buscar` - Búsqueda de productos
- [ ] `/404` - Página de error personalizada
- [ ] `/sitemap.xml` - Sitemap (generado automáticamente)
- [ ] `/robots.txt` - Robots.txt

### 📊 Resumen del Inventario
- **Total páginas**: ~40 páginas
- **Migradas**: 1 home + 26 páginas de productos + 9 posts = **36 páginas**
- **Pendientes**: Índice blog, búsqueda, 404 = **4 páginas**
- **Necesitan mejora mobile-first**: Todas (40 páginas)

---

## 🔴 PRIORIDAD CRÍTICA

### ✅ Migración Base
- [x] Configurar estructura Next.js 15 con App Router
- [x] Migrar 26 páginas de contenido a MDX
- [x] Extraer y catalogar 280 productos Amazon
- [x] Implementar sistema de enlaces de afiliado (tag: oestevaquero-21)
- [x] Convertir shortcodes AAWP a componentes React

### 🚧 Componentes de Productos Amazon (Reemplazar AAWP)
- [ ] **🎯 Diseñar componentes profesionales de productos - CRÍTICO**
  - [x] Componentes básicos creados (AmazonBox, ProductGrid)
  - [x] Enlaces de afiliado verificados (tag: oestevaquero-21) ✅
  - [ ] Integrar Amazon Product Advertising API para imágenes reales
  - [ ] Diseño mobile-first de tarjetas de producto
  - [ ] Mostrar precio, título y rating (desde API)
  - [ ] Optimizar grid responsive (1 col mobile, 2-3 tablet, 3-4 desktop)
  - [ ] Añadir estados de loading y error
  - [ ] Implementar lazy loading de imágenes
  - [ ] Testear conversión de afiliados

### ✅ Imágenes y Branding
- [x] **Logo e Identidad Visual**
  - [x] Logo oficial implementado (logotop-1.png) ✅
  - [x] Logo con bigote naranja y texto "OESTE VAQUERO - OESTE 2.0"
  - [x] Favicon personalizado (favicon-1.png - bigote sobre beige) ✅
  - [x] Cabecera del blog encontrada (cabecera-blog.jpg)
  - [ ] Implementar cabecera en página `/blog`
- [x] **Colores Corporativos Definidos** ✅
  - [x] Archivo `/lib/colors.ts` con paleta completa
  - [x] Variables CSS en `globals.css`
  - [x] Naranja principal: #f39548 (del logo)
  - [x] Marrón western: #8b4513
  - [x] Gradientes y utilidades
- [x] **Imágenes de WordPress migradas**
  - [x] ~1000 imágenes en `/public/uploads/uploads/2020/04/`
  - [x] Imágenes de blog (tatuajes, disfraces, etc.)
  - [x] Iconos y elementos decorativos (balas, pistolas, etc.)
  - [x] Logo oficial en formato imagen ✅

### ✅ Páginas Esenciales Completadas
- [x] **Página índice del Blog (/blog)** ✅
  - [x] Lista de 9 posts con imágenes
  - [x] Cabecera del blog implementada
  - [x] Tarjetas de preview responsive
  - [x] Diseño mobile-first
- [x] **Página de búsqueda (/buscar)** ✅
  - [x] Barra de búsqueda funcional
  - [x] Filtrado en tiempo real
  - [x] Búsquedas populares
  - [x] Grid de categorías
- [x] **Página 404 personalizada** ✅
  - [x] Diseño western temático
  - [x] Enlaces a páginas populares
  - [x] Búsqueda rápida

### 🚧 Optimizaciones Pendientes
- [ ] **Mejorar Página Home (/) - Mobile-first**
  - [ ] Rediseñar hero section para mobile
  - [ ] Optimizar grid de categorías
  - [ ] Añadir sección de blog reciente
  - [ ] Mejorar CTAs y navegación
- [ ] **Redirecciones desde URLs antiguas de WordPress**

---

## 🟠 PRIORIDAD ALTA

### 🚧 SEO y Rendimiento
- [x] Metadata dinámica por página
- [x] Sitemap XML automático
- [ ] **Optimización de imágenes (Next.js Image)**
- [ ] **Implementar robots.txt**
- [ ] **Structured data (JSON-LD) para productos**
- [ ] **Open Graph tags completos**

### Diseño y UX
- [ ] **🎯 MOBILE-FIRST: Rediseñar todas las páginas desde mobile → desktop**
  - [ ] Diseñar layouts mobile primero
  - [ ] Adaptar a tablet (md breakpoint)
  - [ ] Expandir a desktop (lg/xl breakpoints)
  - [ ] Testear en dispositivos reales
- [x] Diseño responsive básico (mobile/tablet/desktop)
- [x] Estilo western/cowboy coherente
- [ ] **Menú móvil mejorado**
- [ ] **Breadcrumbs de navegación**
- [ ] **Loading states y skeletons**

### Contenido
- [x] Páginas legales (privacidad, cookies, FAQs)
- [ ] **Revisar y corregir enlaces internos rotos**
- [ ] **Optimizar textos para SEO**

---

## 🟡 PRIORIDAD MEDIA

### Funcionalidades Avanzadas
- [ ] **Sistema de búsqueda de productos**
  - [ ] Implementar barra de búsqueda
  - [ ] Indexar productos para búsqueda
  - [ ] Página de resultados
- [ ] **Filtros de productos**
  - [ ] Por categoría
  - [ ] Por rango de precio (si API disponible)
  - [ ] Por valoración
- [ ] **Página de categorías mejorada**
  - [ ] Vista de grid/lista
  - [ ] Ordenamiento (relevancia, precio, nombre)

### Integración Amazon API
- [ ] **Registrar acceso a Product Advertising API**
- [ ] **Implementar cliente API**
- [ ] **Obtener imágenes reales de productos**
- [ ] **Mostrar precios actualizados**
- [ ] **Sincronización automática de disponibilidad**

### Analytics y Tracking
- [ ] **Google Analytics 4**
- [ ] **Google Tag Manager**
- [ ] **Tracking de clicks en enlaces de afiliado**
- [ ] **Heatmaps (Hotjar o similar)**

---

## 🟢 PRIORIDAD BAJA

### Optimizaciones
- [ ] **Caché de productos (Redis o similar)**
- [ ] **Lazy loading avanzado**
- [ ] **Prefetch de páginas relacionadas**
- [ ] **Service Worker para PWA**
- [ ] **Modo oscuro/claro**

### Contenido Adicional
- [ ] **Blog activo con nuevos posts**
- [ ] **Newsletter subscription**
- [ ] **Sección de ofertas destacadas**
- [ ] **Comparador de productos**

### Testing
- [ ] **Tests unitarios (Jest)**
- [ ] **Tests E2E (Playwright)**
- [ ] **Tests de accesibilidad (a11y)**
- [ ] **Performance testing (Lighthouse CI)**

---

## 🚀 Hitos del Proyecto

### ✅ Hito 1: Migración Base (COMPLETADO)
**Fecha**: 2025-10-04  
- Estructura Next.js funcional
- Contenido migrado a MDX
- Sistema de productos Amazon
- Diseño western implementado

### 🚧 Hito 2: Optimización Pre-Lanzamiento (EN PROGRESO)
**Fecha objetivo**: 2025-10-15  
- SEO completo
- Imágenes optimizadas
- Errores y redirecciones
- Testing básico

### ⏳ Hito 3: Lanzamiento MVP
**Fecha objetivo**: 2025-10-20  
- Deploy en producción
- Dominio configurado
- Analytics activo
- Monitoreo de errores

### ⏳ Hito 4: Funcionalidades Avanzadas
**Fecha objetivo**: 2025-11-01  
- Búsqueda de productos
- Filtros avanzados
- Amazon API integrada
- Precios dinámicos

---

## 📝 Notas de Desarrollo

### Decisiones Técnicas
- **Framework**: Next.js 15 con App Router (SSG para máximo rendimiento)
- **Contenido**: MDX para flexibilidad y componentes React
- **Estilos**: Tailwind CSS con tema western personalizado
- **Productos**: JSON estático → migrar a API cuando sea necesario
- **Diseño**: Mobile-first approach (diseñar primero para móvil, luego escalar a desktop)

### Problemas Conocidos
1. ⚠️ **MDX compilation errors** con ciertos patrones HTML (ver MEMORY)
   - Solución: Sanitizador mejorado en `mdxSanitize.ts`
2. ⚠️ **Imágenes placeholder** - necesita Amazon API para imágenes reales
3. ⚠️ **Precios no actualizados** - requiere integración API
4. ⚠️ **Componentes de productos básicos** - no tienen el nivel profesional de AAWP
   - Necesitan: imágenes reales, precios, ratings, mejor diseño mobile-first

### Dependencias Externas
- [ ] Acceso a Amazon Product Advertising API
- [ ] Configuración de dominio en producción
- [ ] Certificado SSL
- [ ] CDN para imágenes (Cloudinary/Cloudflare)

---

## 🔄 Changelog

### 2025-10-07
- ✅ Creado plan de desarrollo estructurado
- ✅ Ajustado progreso realista a 30%
- 📱 Añadida tarea crítica: Rediseño mobile-first
- 📄 Inventario completo de páginas: 36 migradas, 4 pendientes
- ✅ Verificados enlaces de afiliado: tag oestevaquero-21 funcionando correctamente
- 🎯 Identificada necesidad: Mejorar componentes de productos (reemplazar AAWP)
- 🖼️ Verificadas imágenes: ~1000 imágenes migradas
- ✅ Logo oficial implementado en header (logotop-1.png con bigote naranja)
- ✅ Favicon implementado (favicon-1.png - bigote sobre beige)
- 🎨 Colores corporativos definidos en `/lib/colors.ts` y `globals.css`
- 📝 Creado `RECURSOS-VISUALES.md` con inventario completo de imágenes
- ✅ **FASE 1 COMPLETADA**: Navegación y estructura
  - Header con dropdowns (25 enlaces)
  - Footer expandido (20 enlaces)
  - Página /blog creada (9 posts)
  - Página /buscar creada (búsqueda funcional)
  - Página 404 personalizada
  - Mapa de navegación completo
- 📚 Creado `INVESTIGACION-DISENO.md` con guía de diseño moderno 2025

### 2025-10-04
- ✅ Migración base completada
- ✅ 280 productos catalogados
- ✅ 26 páginas migradas a MDX
- ✅ Sistema de afiliados funcionando

---

## 📞 Contacto y Recursos

### Enlaces Útiles
- [Next.js Docs](https://nextjs.org/docs)
- [Amazon Associates](https://afiliados.amazon.es/)
- [Amazon PA-API Docs](https://webservices.amazon.es/paapi5/documentation/)
- [MDX Documentation](https://mdxjs.com/)

### Comandos Rápidos
```bash
# Desarrollo
cd web && npm run dev

# Build
npm run build

# Extraer productos
node scripts/extract-asins.js

# Deploy
vercel --prod
```

---

**Última revisión**: 2025-10-07 10:05  
**Responsable**: Equipo de desarrollo
