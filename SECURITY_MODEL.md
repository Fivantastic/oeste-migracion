# Modelo de amenazas – Fivantastic/oeste-migracion (Oeste Vaquero)

## 1. Visión general y fronteras de confianza
Migración del sitio WordPress `oestevaquero.com` a un sitio Next.js 15 (`web/`). Las páginas (`content/pages/*.mdx`) y entradas (`content/posts/*.mdx`) se generaron desde el export WXR de WordPress (`scripts/wp2mdx.py`) y se renderizan en el servidor con `next-mdx-remote/rsc` + `rehype-raw` (`web/components/MDX.tsx`), tras un saneado basado en regex (`web/lib/mdxSanitize.ts`). Monetización mediante enlaces de afiliado de Amazon (`web/lib/amazon.ts`, tag `oestevaquero-21`). No hay login, base de datos ni API propia.

Despliegue: **IONOS, como servidor Node con `next start`** (dato del usuario; `docs/MIGRACION.md` menciona Vercel, pero el destino real es IONOS). Por tanto el renderizado y el optimizador de imágenes se ejecutan en servidor en tiempo de petición. No existe repositorio de infraestructura como código; la configuración del hosting (cabeceras, qué directorios se sirven, modo `next start` vs export estático) no está en el repositorio.

Fronteras:
- Visitante anónimo de Internet → sitio Next.js (URL y parámetros de ruta).
- Contenido MDX/HTML importado de WordPress → compilador MDX/React (el contenido **no ha sido revisado a fondo por el usuario**, por lo que es solo parcialmente de confianza).
- Repositorio (**privado y seguirá siéndolo**, dato del usuario) → solo lo que el sitio sirve llega a Internet.
- Directorio `web/public/` → todo lo que contiene se publica tal cual (el usuario no tenía previsto limpiar los restos de WordPress, así que hoy se publicarían).
- Sitio → terceros embebidos (Amazon imágenes/enlaces, iframes de Spotify, Google Fonts).

## 2. Componentes
| Componente | Código |
|---|---|
| **Renderizado MDX** | `web/components/MDX.tsx`, `web/lib/mdxSanitize.ts`, `web/app/[...slug]/page.tsx` |
| **Rutas y carga de contenido** | `web/lib/content.ts`, `web/app/page.tsx`, `web/app/not-found.tsx`, `web/next-sitemap.config.js` |
| **Afiliados Amazon** | `web/lib/amazon.ts`, `web/lib/products.ts`, `web/components/amazon/*`, `web/components/AmazonProductGrid.tsx`, `data/products.json` |
| **UI del sitio** | `web/app/layout.tsx`, `web/app/buscar/page.tsx`, `web/components/Site*.tsx`, `web/components/Hero*.tsx` |
| **Activos públicos** | `web/public/**` (incluye `web/public/uploads/uploads/**` heredado de WordPress) |
| **Datos de migración** | `content/**` (MDX y `url_map.csv`), `data/wp_export/**` |
| **Scripts de migración** | `scripts/*.py`, `scripts/*.js` |
| **Configuración y dependencias** | `web/package.json`, `web/package-lock.json`, `web/next.config.ts`, `.gitignore` |

## 3. Puntos de entrada
- `/[...slug]` – cualquier visitante; el slug llega a `getPageBySlug` (validado desde el PR #2 con `^[a-z0-9-]+$` y comprobación de directorio).
- `/` y `/buscar` – búsqueda solo en cliente sobre una lista fija.
- Ficheros estáticos de `web/public/` – cualquier visitante, por URL directa.
- Optimizador de imágenes de Next (`/_next/image`) con `remotePatterns` de dominios de Amazon (`web/next.config.ts`).
- Contenido MDX: cualquiera que pueda escribir en `content/` (hoy, el usuario y lo importado de WordPress).
- Scripts de migración: solo el usuario en local, sobre el export de WordPress.

## 4. Activos y sensibilidad
- **Integridad del sitio y de sus visitantes** (sin XSS, sin redirecciones o contenido inyectado).
- **Ingresos de afiliado**: el tag `oestevaquero-21` y que los enlaces apunten a Amazon.
- **Datos personales del export de WordPress** (`data/wp_export/*.xml`: email de autor, IPs y datos de comentaristas) – relevante para RGPD; solo están en el repositorio privado, no en `web/public/`.
- **Información interna del antiguo hosting** en `web/public/uploads/uploads/` (logs de BackWPup, `wc-logs` con rutas `/hosting/www/...`, `.htaccess`, `index.php`, `wpo/*.json`).
- **Disponibilidad** del sitio.

El usuario indicó que **le preocupan todos estos aspectos por igual** y que **no descarta ningún atacante ni superficie**.

## 5. Atacantes relevantes
- Visitante anónimo de Internet (principal).
- Contenido malicioso o roto heredado del WordPress original (p. ej. HTML/JS inyectado en su día en entradas o comentarios) que se publica sin revisión.
- Terceros cuyos contenidos se embeben (iframes, imágenes remotas).
- Cadena de suministro npm (dependencias de `web/`).
- Quien lea el repositorio: **no es un atacante relevante**, el repositorio es privado y seguirá siéndolo (dato del usuario). Lo que solo existe en el repositorio y no se sirve (p. ej. `data/wp_export/*.xml`, `scripts/`) no es accesible para visitantes.

## 6. Controles existentes
- Validación de slug y confinamiento de rutas en `web/lib/content.ts` (PR #2).
- `sanitizeMDXSource` elimina `<script>`, `<style>`, comentarios y atributos `style`; no es una lista blanca de HTML (atributos `on*`, `href="javascript:"`, `<iframe>` y similares no se filtran explícitamente).
- Enlaces de Amazon con `encodeURIComponent` y `rel="nofollow sponsored noopener"`.
- `remotePatterns` limita los hosts del optimizador de imágenes.
- `.gitignore` excluye `data/wp_export/uploads.zip` (pero **no** el XML del export).

## 7. Fuera de alcance / riesgo aceptado (según el usuario)
- **Nada.** El usuario no excluye ninguna superficie ni componente (incluidos `scripts/` y los restos de WordPress). No hay riesgos aceptados declarados.

## 8. Respuestas del usuario
- Contenido MDX: importado de WordPress y **no revisado a fondo**.
- Prioridades: todo por igual; nada fuera de alcance.
- Repositorio privado y seguirá siéndolo.
- Despliegue en IONOS con `next start` (Node); sin repositorio de infraestructura.
- Restos de WordPress en `web/public/uploads`: no había planeado retirarlos, se publicarían tal cual.

## 9. Preguntas abiertas
- ¿Qué cabeceras de seguridad (CSP, etc.) y qué proxy/servidor delante de `next start` se configurarán en IONOS?
