# Allbirds.com - Análisis Completo de Diseño

**URL:** https://www.allbirds.com  
**Fecha:** Octubre 2025  
**Objetivo:** Replicar elementos de diseño para Oeste Vaquero

---

## 🎯 Estructura General

### **1. Hero Section - Waterproof Collection**

**Diseño:**
- ✅ **Círculo gigante** con imagen de persona usando zapatos
- ✅ **Fondo azul oscuro** (#2C3E50 - #34495e)
- ✅ **Texto superior pequeño:** "OUR FIRST-EVER WATERPROOF COLLECTION"
- ✅ **Título grande:** "100% Chance of Comfort"
- ✅ **2 botones blancos:** "SHOP MEN" / "SHOP WOMEN"
- ✅ Espaciado generoso, tipografía sans-serif limpia

**Elementos clave:**
```
- Banner superior: "Free Shipping On Orders Over $75. Easy Returns."
- Navegación: MEN | WOMEN | BESTSELLERS | NEW ARRIVALS
- Logo centrado: "allbirds"
- Iconos: Búsqueda + Carrito
```

---

## 🖼️ Secciones de Contenido

### **2. Inspiration Carousel - "Comfort by Nature"**

**Productos destacados:**
- **Wool Cruiser** - "New sophisticated sneaker with the comfort of merino wool"
- **Tree Dasher 2** - "Breathable comfort for everyday performance"

**Diseño:**
- Carrusel horizontal con scroll
- Imágenes grandes de producto
- Texto overlay con título + descripción
- Fondo beige/crema alternado

---

### **3. Waterproof Collection Grid**

**Layout:**
- ✅ **Grid asimétrico** con imágenes de diferentes tamaños
- ✅ Mix de formatos: 1x1, 16x9, 9x16
- ✅ Texto overlay: "Unstoppable Protection"
- ✅ Videos embebidos en algunas celdas
- ✅ Hover effects en productos

**Productos destacados:**
- Men's Wool Cruiser Waterproof - Stony Cream/Rugged Beige
- Women's Wool Runner NZ Waterproof - Dark Grey

**Texto central:**
- "Fully waterproof"
- "Dry By Nature"
- "Made from wool, built for rain."

---

### **4. Product Grid - Bestsellers**

**Productos mostrados (10 items):**
1. Men's Tree Dasher 2 - Thunder Green
2. Women's Tree Runner - Navy Night
3. Men's Tree Runner Go - Blizzard
4. Women's Tree Glider - Natural White/Beige
5. Men's Tree Lounger - Mist
6. Men's Tree Glider - Thunder Green
7. Women's Tree Dasher Relay - Stony Cream
8. Women's Lounger Lift - Taupe Blush
9. Men's Tree Runner Go Utility
10. Men's Trail Runner - Natural Black

**Diseño:**
- Grid horizontal con scroll
- Imágenes de producto sobre fondo blanco
- Hover muestra nombre + precio
- Badges: "NEW", "WATERPROOF", "WATER-REPELLENT", "Lightweight"

---

### **5. Three Column Promo Section**

**Columnas:**

**A) The New Explore Collection**
- "All-day comfort. All-terrain grip. Wherever adventure leads you."
- Imagen vertical (9x16)

**B) Earthy Essentials**
- "Staple colors in the comfiest styles"
- Imagen vertical (9x16)

**C) The New Waterproof Collection**
- "Introducing a new era of unstoppable protection."
- Imagen vertical (2x3)

---

### **6. Featured Products Carousel**

**Productos con badges:**
- WATERPROOF: Wool Runner NZ Waterproof, Wool Cruiser Waterproof
- NEW: Cruiser Slip On Corduroy, Runner NZ Corduroy, Cruiser Remix
- Lightweight: SuperLight Tree Runner
- WATER-REPELLENT: Runner Protect

**Diseño:**
- Scroll horizontal
- Imágenes grandes de producto
- Badges en esquina superior izquierda
- Hover muestra detalles

---

### **7. Value Propositions (3 columnas)**

**A) Wear All Day Comfort**
"Lightweight, bouncy, and wildly comfortable, Allbirds shoes make any outing feel effortless. Slip in, lace up, or slide them on and enjoy the comfy support."

**B) Sustainability In Every Step**
"From materials to transport, we're working to reduce our carbon footprint to near zero. Holding ourselves accountable and striving for climate goals isn't a 30-year goal—it's now."

**C) Materials From The Earth**
"We replace petroleum-based synthetics with natural alternatives wherever we can. Like using wool, tree fiber, and sugarcane. They're soft, breathable, and better for the planet—win, win, win."

---

## 🎨 Paleta de Colores Identificada

```css
/* Fondos */
--hero-bg: #2c3e50; /* Azul oscuro */
--hero-bg-dark: #34495e; /* Azul oscuro degradado */
--section-bg: #f5f5dc; /* Beige/crema */
--white: #ffffff;

/* Texto */
--text-primary: #1a1a1a;
--text-secondary: #666666;
--text-light: #999999;

/* Botones */
--btn-primary: #ffffff; /* Blanco */
--btn-border: #ffffff;
--btn-text: #1a1a1a;

/* Badges */
--badge-waterproof: #3498db;
--badge-new: #e74c3c;
--badge-lightweight: #95a5a6;
```

---

## 📐 Tipografía

```css
/* Headings */
--font-hero: 'Helvetica Neue', sans-serif;
--font-size-hero: 48px - 64px;
--font-weight-hero: 700;

/* Body */
--font-body: 'Helvetica Neue', sans-serif;
--font-size-body: 14px - 16px;
--font-weight-body: 400;

/* Buttons */
--font-button: 'Helvetica Neue', sans-serif;
--font-size-button: 12px - 14px;
--font-weight-button: 700;
--letter-spacing-button: 0.1em;
```

---

## 🔧 Componentes a Replicar para Oeste Vaquero

### **Prioridad Alta:**

1. ✅ **Hero con círculo gigante**
   - Imagen de persona usando botas
   - Fondo marrón oscuro (#8b4513 → #5a2e14)
   - Texto: "100% Estilo Vaquero"
   - Botones: "SHOP MEN" / "SHOP WOMEN"

2. **Grid asimétrico de productos**
   - Mix de tamaños de imagen
   - Hover effects
   - Badges: "NUEVO", "BESTSELLER", "OFERTA"

3. **Carrusel de productos**
   - Scroll horizontal
   - Imágenes limpias sobre fondo blanco
   - Tabs: "BESTSELLERS" | "NOVEDADES"

4. **Three column promo**
   - Botas Hombre | Botas Mujer | Accesorios
   - Imágenes verticales
   - Texto overlay

### **Prioridad Media:**

5. **Value propositions**
   - 3 columnas con iconos
   - "Calidad Artesanal" | "Envío Gratis" | "Devoluciones Fáciles"

6. **Product cards con hover**
   - Imagen + nombre + precio
   - Hover muestra detalles
   - Quick view button

### **Prioridad Baja:**

7. **Footer completo**
8. **Newsletter signup**
9. **Social proof / testimonios**

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
@media (max-width: 767px) {
  - 1 columna
  - Círculo hero: 320px
  - Stack vertical
}

@media (min-width: 768px) and (max-width: 1023px) {
  - 2 columnas
  - Círculo hero: 400px
}

@media (min-width: 1024px) {
  - 3-4 columnas
  - Círculo hero: 500px
  - Grid asimétrico completo
}
```

---

## ✅ Checklist de Implementación

### **Fase 1: Hero Section**
- [x] Fondo degradado marrón
- [x] Círculo gigante con imagen
- [x] Texto overlay
- [x] Botones blancos
- [ ] Animaciones de entrada

### **Fase 2: Product Grid**
- [ ] Grid asimétrico responsive
- [ ] Hover effects
- [ ] Badges de producto
- [ ] Quick view modal

### **Fase 3: Carruseles**
- [ ] Carrusel horizontal con scroll
- [ ] Tabs para filtrar
- [ ] Navegación con flechas
- [ ] Lazy loading de imágenes

### **Fase 4: Promo Sections**
- [ ] Three column layout
- [ ] Imágenes verticales
- [ ] Texto overlay
- [ ] CTAs

### **Fase 5: Value Props**
- [ ] 3 columnas con iconos
- [ ] Texto descriptivo
- [ ] Iconos custom

---

## 🚀 Próximos Pasos

1. ✅ Implementar hero con círculos (COMPLETADO)
2. Crear grid asimétrico de productos
3. Implementar carrusel con tabs
4. Añadir three column promo
5. Crear value propositions section
6. Optimizar responsive mobile
7. Añadir animaciones y transiciones
8. Testing cross-browser

---

## 📸 URLs de Imágenes de Referencia

**Hero:**
- `//www.allbirds.com/cdn/shop/files/preview_images/28058e8855924ca69e1b77688582944f.thumbnail.0000000000.jpg`

**Productos:**
- Tree Dasher 2: `//www.allbirds.com/cdn/shop/files/A11891_25Q3_Tree_Dasher_2_Thunder_Green_Stony_Cream_Sole_PDP_LEFT-2000x2000.png`
- Wool Cruiser: `//www.allbirds.com/cdn/shop/files/A11724_25Q3_Wool-Cruiser-Natural-Grey-Natural-White-Sole_PDP_LEFT__1.png`

**Grid:**
- `//www.allbirds.com/cdn/shop/files/25Q4_Waterproof_Site_Homepage_ColorGrid-*.jpg`
