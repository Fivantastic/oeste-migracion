# Modelo de amenazas – Fivantastic/oeste-migracion

_"(propietario)" = confirmado por Iván; "(inferido)" = lectura del código, no mueve prioridades._

## Resumen del sistema
Migración de la tienda/blog de afiliación **oestevaquero.com** (WordPress + WooCommerce/AAWP) a un sitio **Next.js 15** (`web/`) que renderiza páginas y posts MDX de `content/` con `next-mdx-remote/rsc` + `rehype-raw`. No hay backend propio, login, base de datos ni formularios que envíen datos (inferido). La monetización son enlaces de afiliado de Amazon con el tag `oestevaquero-21` (`web/lib/amazon.ts`).

- Despliegue previsto en **Vercel sin infraestructura como código**; no hay repositorio de infraestructura (propietario).
- **Todavía no está en producción**: sigue en migración (propietario). Lo que hoy esté en el repo se publicará cuando se despliegue.
- El repositorio es **público** en GitHub (verificado).

## Componentes
- **Web Next.js**: `web/app/**` (`[...slug]/page.tsx`, `buscar/page.tsx`, `layout.tsx`, `page.tsx`), `web/components/` salvo Amazon (`MDX.tsx`, `SiteHeader`, `SiteFooter`, `Hero*`), `web/lib/content.ts`, `web/lib/mdxSanitize.ts`, `web/next.config.ts`.
- **Afiliación Amazon**: `web/lib/amazon.ts`, `web/components/amazon/*`, `web/components/AmazonProductGrid.tsx`, `web/lib/products.ts`, `data/products.json`.
- **Contenido migrado**: `content/pages/*.mdx`, `content/posts/*.mdx`, `content/url_map.csv`, `web/public/uploads/**` (incluye restos de WordPress: `.htaccess`, `index.php`, carpetas `backwpup-*`, `woocommerce_uploads`, `GeoLite2-Country.mmdb`, `wpo/*.json`).
- **Export WordPress**: `data/wp_export/oestevaquero.WordPress.2025-08-15.xml`.
- **Scripts de migración**: `scripts/wp2mdx.py`, `scripts/import_uploads_and_rewrite.py`, `scripts/clean-mdx.js`, `scripts/extract-asins.js` (se ejecutan en local, inferido).
- **Dependencias y build**: `web/package.json`, `web/package-lock.json`, `web/next-sitemap.config.js`, configuración de ESLint/PostCSS/TS.

## Fronteras de confianza y puntos de entrada
- Visitante anónimo ↔ sitio Next.js: rutas `/[...slug]` (slug de la URL usado para buscar el fichero en `web/lib/content.ts` → `getPageBySlug`), `/buscar` (filtro en cliente), imágenes vía `next/image` con `remotePatterns` de dominios de Amazon (`web/next.config.ts`).
- Contenido MDX/HTML ↔ renderizador: el MDX procedente de WordPress pasa por `sanitizeMDXSource` (regex; quita `<script>`/`<style>`, no es un sanitizador HTML completo) y se compila como MDX con `rehype-raw`; el MDX puede incluir expresiones JSX. Hoy solo el propietario edita `content/` (inferido); cualquier cambio en el repo (PR mergeado, cuenta comprometida) llega al sitio.
- Cualquiera en Internet ↔ repositorio público y su historial (incluido el export XML y `web/public/uploads`).
- Sitio ↔ Amazon: enlaces de afiliado y widget de imágenes `ws-eu.amazon-adsystem.com`.

## Activos
- **Ingresos de afiliado de Amazon**: integridad del tag `oestevaquero-21` y de los enlaces/ASIN (propietario: activo prioritario).
- **Datos personales en el export de WordPress**: correos e IPs de 21 comentaristas y correos de 2 autores en `data/wp_export/*.xml`, público en GitHub (propietario: importa igual que el resto).
- **Integridad del sitio publicado**: que nadie inyecte contenido o scripts (propietario: importa igual que el resto).
- Disponibilidad del sitio y del build (inferido).
- Credenciales: no deben aparecer en el repo ni en su historial (inferido).

## Atacantes relevantes
El propietario no descarta ninguno ("todo importa", propietario):
- Visitante anónimo del sitio.
- Cualquiera que lea el repositorio público y su historial.
- Quien consiga introducir contenido o código en el repo (colaborador, cuenta o dependencia comprometida).
- Terceros que intenten desviar los ingresos de afiliación.

## Controles existentes (inferido)
- Sitio sin backend propio ni autenticación: superficie de servidor reducida a renderizado de Next.js.
- `sanitizeMDXSource` elimina `<script>`, `<style>` y comentarios del HTML migrado.
- `buildAmazonUrl` usa `encodeURIComponent` para ASIN/búsqueda; enlaces externos con `rel="nofollow sponsored noopener"`.
- `.env*` ignorado en `web/.gitignore`.

## Fuera de alcance / riesgo aceptado
- **Nada** (propietario): no hay atacantes, activos ni superficies descartados.

## Preguntas abiertas
- Configuración de cabeceras de seguridad (CSP, etc.) en Vercel cuando se despliegue.
- ¿Se mantendrá el export XML con datos de comentaristas en el repo público tras la migración?
