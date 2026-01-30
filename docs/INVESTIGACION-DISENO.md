# 🎨 Investigación de Diseño - Tiendas Modernas 2025

**Objetivo**: Crear un diseño profesional, moderno y western para Oeste Vaquero  
**Fecha**: 2025-10-07

---

## 🎯 Objetivo del Diseño

Crear una tienda online que combine:
- ✅ **Modernidad 2025**: Limpio, espacioso, rápido
- ✅ **Identidad Western**: Toques cowboy sin ser anticuado
- ✅ **Conversión**: Optimizado para ventas de afiliados
- ✅ **Mobile-First**: Diseñado primero para móvil

---

## 🔍 Sitios de Referencia a Investigar

### **1. Tiendas Western Modernas**

#### **Tecovas** (tecovas.com)
**Por qué investigar:**
- Marca premium de botas western
- Diseño minimalista y moderno
- Excelente fotografía de producto
- UX optimizada para conversión

**Elementos a analizar:**
- [ ] Hero section con video/imagen de impacto
- [ ] Grid de productos limpio
- [ ] Tipografía moderna pero con carácter
- [ ] Espaciado generoso
- [ ] CTAs claros y directos

#### **Boot Barn** (bootbarn.com)
**Por qué investigar:**
- Líder en retail western USA
- E-commerce maduro y probado
- Navegación por categorías efectiva
- Sistema de filtros robusto

**Elementos a analizar:**
- [ ] Mega menú de navegación
- [ ] Filtros de productos
- [ ] Tarjetas de producto
- [ ] Promociones destacadas
- [ ] Footer completo

#### **Lucchese** (lucchese.com)
**Por qué investigar:**
- Marca de lujo western
- Diseño elegante y sofisticado
- Storytelling de marca
- Fotografía de alta calidad

**Elementos a analizar:**
- [ ] Presentación de productos premium
- [ ] Uso de espacio en blanco
- [ ] Animaciones sutiles
- [ ] Tipografía serif elegante
- [ ] Paleta de colores refinada

---

### **2. E-commerce Modernos con Identidad**

#### **Allbirds** (allbirds.com)
**Por qué investigar:**
- Minimalismo extremo
- Enfoque en producto
- Navegación simple
- Conversión optimizada

**Elementos a analizar:**
- [ ] Hero simple con CTA claro
- [ ] Scroll suave y fluido
- [ ] Micro-interacciones
- [ ] Iconografía simple
- [ ] Colores neutros con acentos

#### **Huckberry** (huckberry.com)
**Por qué investigar:**
- Outdoor/heritage moderno
- Curación de productos
- Editorial + E-commerce
- Comunidad y lifestyle

**Elementos a analizar:**
- [ ] Mix de contenido y productos
- [ ] Storytelling visual
- [ ] Categorización inteligente
- [ ] Inspiración de estilo
- [ ] Newsletter integration

#### **Taylor Stitch** (taylorstitch.com)
**Por qué investigar:**
- Heritage moderno
- Diseño limpio con personalidad
- Fotografía lifestyle
- Transparencia de marca

**Elementos a analizar:**
- [ ] Presentación de colecciones
- [ ] Hover effects en productos
- [ ] Sticky navigation
- [ ] Quick view de productos
- [ ] Social proof

---

## 🎨 Tendencias de Diseño 2025

### **Tendencias Visuales**

#### **1. Espaciado Generoso**
- Mucho espacio en blanco
- Respiración entre elementos
- Menos es más
- Foco en lo importante

#### **2. Tipografía Grande y Clara**
- Títulos impactantes (48px+)
- Jerarquía clara
- Legibilidad móvil
- Mix serif/sans-serif

#### **3. Imágenes de Alta Calidad**
- Fotografía profesional
- Formato 16:9 o cuadrado
- Lazy loading
- WebP optimizado

#### **4. Colores Estratégicos**
- Paleta limitada (2-3 colores)
- Alto contraste
- Acentos de color
- Modo oscuro opcional

#### **5. Micro-interacciones**
- Hover effects sutiles
- Transiciones suaves (300ms)
- Loading states
- Feedback visual

#### **6. Animaciones Sutiles**
- Scroll reveal
- Parallax ligero
- Fade in/out
- Slide transitions

---

## 🎯 Aplicación a Oeste Vaquero

### **Paleta de Colores Propuesta**

```css
/* Colores Principales */
--primary: #f39548;        /* Naranja western (del logo) */
--primary-dark: #e67e22;   /* Hover/Active */
--primary-light: #f7c091;  /* Backgrounds */

/* Colores Secundarios */
--secondary: #8b4513;      /* Marrón cuero */
--secondary-dark: #5a2e14; /* Texto oscuro */

/* Neutrales */
--white: #ffffff;
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-900: #111827;

/* Acentos */
--accent: #2b1a0e;         /* Marrón muy oscuro para contraste */
```

### **Tipografía Propuesta**

```css
/* Títulos - Impacto Western */
--font-display: 'Alfa Slab One', serif;  /* Ya tenemos */
font-size: 48px - 72px (desktop)
font-size: 32px - 48px (mobile)

/* Subtítulos - Carácter */
--font-accent: 'Trade Winds', cursive;   /* Ya tenemos */
font-size: 24px - 36px

/* Cuerpo - Legibilidad */
--font-body: 'Geist Sans', sans-serif;   /* Ya tenemos */
font-size: 16px - 18px
line-height: 1.6
```

### **Espaciado Sistema**

```css
/* Mobile First */
--space-xs: 0.5rem;   /* 8px */
--space-sm: 1rem;     /* 16px */
--space-md: 1.5rem;   /* 24px */
--space-lg: 2rem;     /* 32px */
--space-xl: 3rem;     /* 48px */
--space-2xl: 4rem;    /* 64px */
--space-3xl: 6rem;    /* 96px */

/* Desktop: Multiplicar x1.5 */
```

---

## 📱 Componentes Clave a Diseñar

### **1. Hero Section**
**Objetivo**: Impacto inmediato, CTA claro

**Elementos:**
- [ ] Imagen/video de fondo western
- [ ] Título grande "Icónicas. Eternas."
- [ ] Subtítulo descriptivo
- [ ] CTA principal destacado
- [ ] Scroll indicator

**Inspiración:**
- Tecovas: Hero con video
- Allbirds: Simplicidad extrema
- Lucchese: Elegancia

### **2. Grid de Productos**
**Objetivo**: Mostrar productos de forma atractiva

**Elementos:**
- [ ] Tarjetas con imagen grande
- [ ] Hover effect (zoom ligero)
- [ ] Precio visible
- [ ] CTA "Ver en Amazon"
- [ ] Badge de afiliado

**Layout Mobile:**
- 1 columna (100% width)
- Imagen 1:1 ratio
- Padding generoso

**Layout Desktop:**
- 3-4 columnas
- Gap de 24px
- Hover elevación

### **3. Navegación**
**Objetivo**: Acceso fácil a todas las categorías

**Desktop:**
- [ ] Sticky header
- [ ] Mega menú con imágenes
- [ ] Búsqueda prominente
- [ ] Carrito (si aplica)

**Mobile:**
- [ ] Hamburger menu
- [ ] Full screen overlay
- [ ] Categorías colapsables
- [ ] Búsqueda en header

### **4. Tarjetas de Categoría**
**Objetivo**: Navegación visual atractiva

**Elementos:**
- [ ] Imagen de categoría
- [ ] Título claro
- [ ] Contador de productos
- [ ] Hover effect
- [ ] Link completo

### **5. Footer**
**Objetivo**: Información completa, SEO

**Estructura:**
- [ ] 4-5 columnas (desktop)
- [ ] Acordeones (mobile)
- [ ] Newsletter signup
- [ ] Redes sociales
- [ ] Legal + Afiliado

---

## 🎨 Patrones de Diseño a Implementar

### **1. Cards con Elevación**
```css
.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}
```

### **2. Botones con Personalidad**
```css
.btn-primary {
  background: linear-gradient(135deg, #f39548, #e67e22);
  color: white;
  padding: 16px 32px;
  border-radius: 8px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(243, 149, 72, 0.4);
}
```

### **3. Imágenes con Overlay**
```css
.image-overlay {
  position: relative;
  overflow: hidden;
}

.image-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(0,0,0,0.6) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-overlay:hover::after {
  opacity: 1;
}
```

### **4. Scroll Reveal**
```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 📊 Checklist de Diseño Mobile-First

### **Mobile (320px - 768px)**
- [ ] Navegación hamburguesa
- [ ] 1 columna para contenido
- [ ] Imágenes full-width
- [ ] CTAs sticky bottom
- [ ] Tipografía escalada
- [ ] Touch targets 44px+
- [ ] Espaciado reducido

### **Tablet (768px - 1024px)**
- [ ] 2 columnas para productos
- [ ] Menú expandido
- [ ] Sidebar opcional
- [ ] Espaciado medio

### **Desktop (1024px+)**
- [ ] 3-4 columnas
- [ ] Mega menú
- [ ] Hover effects
- [ ] Espaciado generoso
- [ ] Contenido centrado (max-width)

---

## 🚀 Plan de Implementación

### **Fase 1: Investigación (AHORA)**
- [ ] Capturar screenshots de referencias
- [ ] Anotar patrones que funcionan
- [ ] Identificar anti-patrones
- [ ] Crear moodboard

### **Fase 2: Diseño de Componentes**
- [ ] Hero section
- [ ] Tarjetas de producto
- [ ] Navegación
- [ ] Footer
- [ ] Formularios

### **Fase 3: Implementación Mobile-First**
- [ ] Mobile (320px)
- [ ] Tablet (768px)
- [ ] Desktop (1024px)
- [ ] Testing cross-browser

### **Fase 4: Optimización**
- [ ] Performance
- [ ] Accesibilidad
- [ ] SEO
- [ ] Analytics

---

## 📝 Notas de Diseño

### **Principios Clave:**
1. **Menos es más** - Eliminar ruido visual
2. **Jerarquía clara** - Guiar la mirada
3. **Consistencia** - Patrones repetibles
4. **Accesibilidad** - Contraste, tamaños
5. **Performance** - Optimizar todo

### **Western sin ser Anticuado:**
- ✅ Usar tipografía serif con moderación
- ✅ Colores tierra pero limpios
- ✅ Iconografía simple (no clichés)
- ✅ Fotografía moderna de productos
- ✅ Espacios en blanco generosos

### **Conversión Optimizada:**
- ✅ CTAs visibles y claros
- ✅ Proceso de compra simple
- ✅ Trust signals (afiliado Amazon)
- ✅ Social proof (si disponible)
- ✅ Mobile-first siempre

---

**Siguiente paso**: Investigar sitios de referencia y crear moodboard visual
