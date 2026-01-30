# 🎨 Recursos Visuales - Oeste Vaquero

## 📁 Ubicación de Archivos

Todos los recursos visuales están en: `/web/public/uploads/uploads/`

---

## 🖼️ Logo y Branding

### Logo Principal
- **Archivo**: `logotop-1.png`
- **Ubicación**: `/uploads/uploads/logotop-1.png`
- **Descripción**: Logo oficial con bigote negro en cuadro naranja + texto "OESTE VAQUERO - OESTE 2.0"
- **Uso**: Header del sitio
- **Estado**: ✅ Implementado en `SiteHeader.tsx`

### Favicon
- **Archivo**: `favicon-1.png`
- **Ubicación**: `/uploads/uploads/favicon-1.png`
- **Descripción**: Bigote negro sobre fondo beige/tan
- **Uso**: Icono de la pestaña del navegador
- **Estado**: ✅ Implementado en `layout.tsx`

---

## 📝 Recursos del Blog

### Cabecera del Blog
- **Archivo**: `cabecera-blog.jpg`
- **Ubicación**: `/uploads/uploads/2020/05/cabecera-blog.jpg`
- **Descripción**: Banner estilo western vintage con texto decorativo
- **Uso**: Header de la página `/blog`
- **Estado**: ⏳ Pendiente de implementar

### Logo del Blog (Saloon)
- **Archivo**: `saloon-blog.jpg`
- **Ubicación**: `/uploads/uploads/2020/04/saloon-blog.jpg`
- **Descripción**: Imagen decorativa del saloon para blog
- **Uso**: Decoración en posts del blog
- **Estado**: ⏳ Disponible para usar

---

## 🎨 Colores Corporativos

Extraídos del logo oficial:

| Color | Hex | Uso |
|-------|-----|-----|
| **Naranja Principal** | `#f39548` | Logo, CTAs, acentos principales |
| **Naranja Oscuro** | `#e67e22` | Hover, estados activos |
| **Naranja Claro** | `#f7c091` | Backgrounds suaves, submenu |
| **Marrón Western** | `#8b4513` | Elementos decorativos, cuero |
| **Marrón Oscuro** | `#5a2e14` | Texto sobre naranja |
| **Marrón Claro** | `#b45a1a` | Bordes, separadores |
| **Beige/Tan** | `#d2b48c` | Fondos alternativos |
| **Negro Western** | `#1a1a1a` | Texto principal oscuro |
| **Marrón Texto** | `#2b1a0e` | Texto en menú naranja |

### Archivos de Configuración
- **TypeScript**: `/web/lib/colors.ts`
- **CSS Variables**: `/web/app/globals.css`

---

## 🖼️ Imágenes de Productos

### Categorías de Productos
Ubicación: `/uploads/uploads/2020/04/`

#### Botas
- `botas-mujer-mas.jpg` - Imagen destacada botas mujer
- `botas-hombre-mas.jpg` - Imagen destacada botas hombre
- `bota1.png` - Bota individual con transparencia
- `botasmujer.jpg` - Grid botas mujer
- `botashombre.jpg` - Grid botas hombre

#### Sombreros
- `sombreros-mas.jpg` - Imagen destacada sombreros
- `sombreros.jpg` - Grid sombreros

#### Ropa
- `camisas-mas.jpg` - Camisas western
- `camisetas-mas.jpg` - Camisetas temáticas
- `vaqueros-hombre-mas.jpg` - Pantalones vaqueros hombre
- `vaqueros-mujer-mas.jpg` - Pantalones vaqueros mujer

#### Accesorios
- `cinturones-mas.jpg` - Cinturones western
- `hebillas-mas.jpg` - Hebillas auténticas
- `bolsos-mas.jpg` - Bolsos vaqueros
- `corbata-bolo-mas.png` - Corbatas de bolo
- `disfraces-mas.jpg` - Disfraces vaqueros

#### Otros
- `jinete-mas.jpg` - Equipamiento jinete
- `accesorios-mas.jpg` - Accesorios varios

---

## 🎪 Elementos Decorativos

### Iconos Western
- `bigote.png` - Bigote decorativo
- `pistola1.png`, `pistola2.png` - Pistolas western
- `balas.png` - Balas decorativas
- `trabuco.png` - Trabuco
- `cowboy.png` - Silueta cowboy
- `indio.png` - Silueta indio
- `saloon.png`, `saloon2.png` - Iconos saloon

### Fondos y Texturas
- `fondo.png` - Fondo western
- `menufondo.png` - Textura del menú naranja
- `banner1.png`, `banner2.png` - Banners decorativos

### Carruseles
- `carrusel1.jpg` a `carrusel19.jpg` - Imágenes del carrusel principal
- Ubicación: `/uploads/uploads/2020/04/`

---

## 📱 Banners de Páginas

Cada categoría tiene su banner:
- `botas-pagina.jpg` - Banner página botas
- `sombreros-pagina.jpg` - Banner página sombreros
- `cinturones-pagina.jpg` - Banner página cinturones
- `camisetas-pagina-1.jpg` - Banner página camisetas
- `bolsos-pagina.jpg` - Banner página bolsos
- `disfraces-pagina.jpg` - Banner página disfraces
- `corbatas-pagina.jpg` - Banner página corbatas
- `hebillas-pagina.jpg` - Banner página hebillas
- `jinete-pagina.jpg` - Banner página jinete
- `pantalones-pagina.jpg` - Banner página pantalones
- `zarzaparrilla-pagina.jpg` - Banner página zarzaparrilla

---

## 🎯 Próximos Pasos

### Implementar
- [ ] Cabecera del blog en página `/blog`
- [ ] Optimizar imágenes con Next.js Image
- [ ] Crear componente de carrusel con las imágenes
- [ ] Usar banners de categorías en páginas correspondientes
- [ ] Implementar lazy loading para mejor rendimiento

### Optimización
- [ ] Convertir imágenes grandes a WebP
- [ ] Generar múltiples tamaños responsive
- [ ] Implementar CDN para imágenes
- [ ] Comprimir imágenes sin pérdida de calidad

---

**Última actualización**: 2025-10-07  
**Total de imágenes**: ~1000 archivos
