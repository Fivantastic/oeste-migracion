# Allbirds - Código Fuente Extraído

**Fecha:** Octubre 2025  
**Método:** Puppeteer scraping

---

## 🎯 Hero Section - HTML Structure

```html
<section id="shopify-section-template--15730272731216__full-bleed-hero" class="shopify-section">
  <div class="hero-height-dynamic relative m-2.5 overflow-hidden rounded text-white opacity-0" 
       data-section-id="template--15730272731216__full-bleed-hero" 
       data-section-type="full-bleed-hero" 
       data-autoplay-delay="4000" 
       style="--hero-height-mobile: calc(100vh - var(--hero-header-offset-mobile-lg)); 
              --hero-height-desktop: calc(100vh - var(--hero-header-offset-desktop-lg)); 
              opacity: 1;">
    
    <div class="swiper relative size-full">
      <ul class="swiper-wrapper relative size-full [&>li.swiper-slide-active]:z-1">
        <li class="swiper-slide text-white">
          
          <!-- Video Desktop -->
          <span class="group/video-player relative">
            <video autoplay playsinline loop 
                   class="hidden md:block w-full h-full object-cover" 
                   poster="//www.allbirds.com/cdn/shop/files/preview_images/28058e8855924ca69e1b77688582944f.thumbnail.0000000000.jpg">
              <source src="//www.allbirds.com/cdn/shop/videos/c/vp/28058e8855924ca69e1b77688582944f/28058e8855924ca69e1b77688582944f.HD-1080p-2.5Mbps-58286267.mp4" type="video/mp4">
            </video>
          </span>
          
          <!-- Video Mobile -->
          <span class="group/video-player relative">
            <video autoplay playsinline loop 
                   class="block md:hidden w-full h-full object-cover" 
                   poster="//www.allbirds.com/cdn/shop/files/preview_images/2322ee6470664cc59e6fded287861153.thumbnail.0000000000.jpg">
              <source src="//www.allbirds.com/cdn/shop/videos/c/vp/2322ee6470664cc59e6fded287861153/2322ee6470664cc59e6fded287861153.HD-1080p-2.5Mbps-58286438.mp4" type="video/mp4">
            </video>
          </span>
          
          <!-- Content Overlay -->
          <div data-hero-content 
               class="pointer-events-none absolute inset-0 flex size-full flex-col p-8 !pt-20 opacity-0 md:p-16 justify-end md:justify-end items-start text-left md:items-end md:text-right md:self-stretch" 
               style="opacity: 1;">
            
            <!-- Small Text -->
            <p class="z-content relative mb-4 font-mono text-xs/5 font-medium tracking-widest uppercase">
              Our first-ever Waterproof Collection
            </p>
            
            <!-- Main Title -->
            <h1 class="z-content relative mb-6 text-2xl/8 tracking-wide">
              100% Chance of Comfort
            </h1>
            
            <!-- CTAs -->
            <div class="z-content pointer-events-auto relative flex gap-2">
              <a href="/collections/mens-mizzles" class="btn btn-primary">
                Shop Men
              </a>
              <a href="/collections/womens-mizzles" class="btn btn-primary">
                Shop Women
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>
```

---

## 🎨 CSS - Botones (btn)

```css
@layer components {
  .btn {
    cursor: pointer;
    padding-inline: calc(var(--spacing) * 4);
    padding-block: calc(var(--spacing) * 2);
    text-align: center;
    font-family: var(--font-sans);
    font-size: var(--text-xs);
    line-height: var(--leading-tight);
    font-weight: var(--font-weight-medium);
    letter-spacing: var(--tracking-wide);
    white-space: nowrap;
    color: var(--color-black);
    text-transform: uppercase;
    transition: background-color 0.2s var(--ease-sine-in-out),
                color 0.2s var(--ease-sine-in-out),
                border-color 0.2s var(--ease-sine-in-out),
                opacity 0.2s var(--ease-sine-out);
    border-radius: 9999px; /* Fully rounded */
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .btn.btn-primary {
    border-style: solid;
    border-width: 1px;
    border-color: var(--color-white);
    background-color: var(--color-white);
  }

  @media (hover: hover) {
    .btn.btn-primary:hover {
      border-color: var(--color-black);
      background-color: var(--color-black);
      color: var(--color-white);
    }
  }

  .btn.btn-outline-white {
    border-style: solid;
    border-width: 1px;
    border-color: var(--color-white);
    color: var(--color-white);
    background-color: transparent;
  }

  @media (hover: hover) {
    .btn.btn-outline-white:hover {
      border-color: var(--color-white);
      background-color: var(--color-white);
      color: var(--color-black);
    }
  }
}
```

---

## 🎨 CSS - Hero Section

```css
.hero-height-dynamic {
  --hero-height-mobile: calc(100vh - var(--hero-header-offset-mobile-lg));
  --hero-height-desktop: calc(100vh - var(--hero-header-offset-desktop-lg));
}

/* Content positioning */
[data-hero-content] {
  pointer-events: none;
  position: absolute;
  inset: 0;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 2rem;
  padding-top: 5rem !important;
  opacity: 0;
  justify-content: flex-end;
  align-items: flex-start;
  text-align: left;
}

@media (min-width: 768px) {
  [data-hero-content] {
    padding: 4rem;
    justify-content: flex-end;
    align-items: flex-end;
    text-align: right;
  }
}

/* Typography */
[data-hero-content] p {
  z-index: var(--z-content);
  position: relative;
  margin-bottom: 1rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  line-height: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

[data-hero-content] h1 {
  z-index: var(--z-content);
  position: relative;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: 0.025em;
}

/* CTAs Container */
[data-hero-content] .flex.gap-2 {
  z-index: var(--z-content);
  pointer-events: auto;
  position: relative;
  display: flex;
  gap: 0.5rem;
}
```

---

## 🎨 CSS - Swiper (Carousel)

```css
.swiper {
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  list-style: none;
  display: block;
  position: relative;
  overflow: hidden;
}

.swiper-wrapper {
  z-index: 1;
  width: 100%;
  height: 100%;
  transition-property: transform;
  box-sizing: content-box;
  display: flex;
  position: relative;
}

.swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  transition-property: transform;
  display: block;
  position: relative;
}

.swiper-backface-hidden .swiper-slide {
  backface-visibility: hidden;
  transform: translateZ(0);
}
```

---

## 🎯 Variables CSS (Custom Properties)

```css
:root {
  /* Spacing */
  --spacing: 4px;
  
  /* Colors */
  --color-white: #ffffff;
  --color-black: #000000;
  --color-light-charcoal: #333333;
  
  /* Typography */
  --font-sans: 'Helvetica Neue', Arial, sans-serif;
  --font-mono: 'Courier New', monospace;
  
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  
  /* Font Weights */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  
  /* Letter Spacing */
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
  --tracking-widest: 0.1em;
  
  /* Line Heights */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  
  /* Z-index */
  --z-background: -10;
  --z-base: 0;
  --z-content: 10;
  --z-header: 100;
  
  /* Transitions */
  --ease-sine-in-out: cubic-bezier(0.37, 0, 0.63, 1);
  --ease-sine-out: cubic-bezier(0.61, 1, 0.88, 1);
}
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
@media (min-width: 48rem) { /* 768px - md */
  /* Tablet styles */
}

@media (min-width: 64rem) { /* 1024px - lg */
  /* Desktop styles */
}

@media (min-width: 80rem) { /* 1280px - xl */
  /* Large desktop styles */
}

@media (min-width: 96rem) { /* 1536px - 2xl */
  /* Extra large desktop styles */
}
```

---

## 🎯 Clases Utility de Tailwind Usadas

### **Layout:**
```css
.relative { position: relative; }
.absolute { position: absolute; }
.inset-0 { inset: 0; }
.size-full { width: 100%; height: 100%; }
.overflow-hidden { overflow: hidden; }
```

### **Flexbox:**
```css
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-start { align-items: flex-start; }
.items-end { align-items: flex-end; }
.justify-end { justify-content: flex-end; }
.gap-2 { gap: 0.5rem; }
```

### **Spacing:**
```css
.m-2.5 { margin: 0.625rem; }
.p-8 { padding: 2rem; }
.mb-4 { margin-bottom: 1rem; }
.mb-6 { margin-bottom: 1.5rem; }
```

### **Typography:**
```css
.text-white { color: white; }
.text-xs { font-size: 0.75rem; }
.text-2xl { font-size: 1.5rem; }
.font-medium { font-weight: 500; }
.tracking-wide { letter-spacing: 0.025em; }
.tracking-widest { letter-spacing: 0.1em; }
.uppercase { text-transform: uppercase; }
.text-left { text-align: left; }
.text-right { text-align: right; }
```

### **Effects:**
```css
.rounded { border-radius: 0.25rem; }
.opacity-0 { opacity: 0; }
.pointer-events-none { pointer-events: none; }
.pointer-events-auto { pointer-events: auto; }
```

---

## 🚀 Implementación para Oeste Vaquero

### **Adaptaciones necesarias:**

1. **Colores:**
```css
--color-primary: #f39548; /* Naranja Oeste Vaquero */
--color-primary-dark: #e67e22;
--color-brown: #8b4513;
--color-brown-dark: #5a2e14;
```

2. **Botones adaptados:**
```css
.btn.btn-primary {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
}

.btn.btn-primary:hover {
  background-color: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
}
```

3. **Hero con fondo marrón:**
```css
.hero-western {
  background: linear-gradient(to bottom, #8b4513, #5a2e14);
}
```

---

## ✅ Checklist de Elementos a Replicar

- [x] Hero fullscreen con video/imagen
- [x] Content overlay con texto centrado
- [x] Botones redondeados con hover effect
- [x] Tipografía uppercase con tracking
- [x] Swiper para carruseles
- [x] Responsive mobile-first
- [ ] Animaciones de entrada (opacity fade-in)
- [ ] Video autoplay con fallback a imagen
- [ ] Lazy loading de videos

---

## 📝 Notas de Implementación

1. **Video vs Imagen:** Allbirds usa videos, nosotros podemos usar imágenes estáticas con círculos
2. **Swiper:** Podemos usar Swiper.js o crear un carrusel simple con CSS
3. **Variables CSS:** Usar custom properties para fácil personalización
4. **Tailwind:** Aprovechar las utility classes para desarrollo rápido
5. **Z-index:** Mantener jerarquía clara con variables

---

## 🔗 Assets Identificados

**Videos:**
- Desktop: `28058e8855924ca69e1b77688582944f.HD-1080p-2.5Mbps-58286267.mp4`
- Mobile: `2322ee6470664cc59e6fded287861153.HD-1080p-2.5Mbps-58286438.mp4`

**Posters:**
- Desktop: `preview_images/28058e8855924ca69e1b77688582944f.thumbnail.0000000000.jpg`
- Mobile: `preview_images/2322ee6470664cc59e6fded287861153.thumbnail.0000000000.jpg`
