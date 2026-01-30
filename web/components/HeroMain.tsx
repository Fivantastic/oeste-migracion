"use client";
import Link from "next/link";

export default function HeroMain() {
  return (
    <section className="relative m-2.5 overflow-hidden rounded-2xl bg-[#2c3e50] text-white" style={{ height: 'calc(100vh - 140px)', minHeight: '600px' }}>
      {/* Círculo superior (mitad visible) - Mobile */}
      <div
        className="md:hidden absolute left-1/2 -translate-x-1/2 rounded-full overflow-hidden z-10"
        style={{ width: '130vw', height: '130vw', top: '-66vw' }}
      >
        <img
          src="/uploads/uploads/2020/04/botashombre-400x382.jpg"
          alt="Decorativo superior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Círculo principal - Mobile */}
      <div
        className="md:hidden absolute left-1/2 -translate-x-1/2 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl z-20"
        style={{ width: '90vw', height: '90vw', top: '68vw' }}
      >
        <img
          src="/uploads/uploads/2020/04/botasmujer-400x382.jpg"
          alt="Botas Vaqueras"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Círculo superior (mitad visible) - Desktop */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-40 w-[860px] h-[860px] rounded-full overflow-hidden z-10">
        <img
          src="/uploads/uploads/2020/04/botasmujer-400x382.jpg"
          alt="Decorativo superior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Círculo principal - Desktop */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-[46%] w-[600px] h-[600px] rounded-full overflow-hidden border-4 border-white/20 shadow-2xl z-20">
        <img
          src="/uploads/uploads/2020/04/botashombre-400x382.jpg"
          alt="Botas Western"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Textos (justo encima de los CTAs) */}
      <div className="absolute inset-x-0 md:bottom-28 z-30 px-8 md:px-16 pointer-events-none" style={{ bottom: '18vw' }}>
        <div className="max-w-7xl mx-auto text-center md:text-right">
          <p className="hero-tagline mb-3 font-mono text-[11px] md:text-sm font-bold tracking-[0.18em] uppercase">
            Auténtico Estilo Western
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">100% Estilo Vaquero</h1>
        </div>
      </div>

      {/* CTAs fijados al borde inferior: izquierda/derecha */}
      <div className="absolute inset-x-0 z-40 px-6 md:px-16" style={{ bottom: 'max(14px, env(safe-area-inset-bottom) + 12px)' }}>
        <div className="hero-ctas max-w-7xl mx-auto flex justify-center gap-6 pointer-events-auto">
          <Link href="/botas-vaqueras-hombres" className="btn btn-primary inline-flex min-w-[140px] justify-center">Comprar Cowboys</Link>
          <Link href="/botas-vaqueras-de-mujer" className="btn btn-primary inline-flex min-w-[140px] justify-center">Comprar Cowgirls</Link>
        </div>
      </div>

      {/* Estilos CSS exactos de Allbirds */}
      <style jsx global>{`
        /* Variables CSS */
        :root {
          --spacing: 4px;
          --font-sans: 'Helvetica Neue', Arial, sans-serif;
          --text-xs: 0.75rem;
          --leading-tight: 1.25;
          --font-weight-medium: 500;
          --tracking-wide: 0.025em;
          --tracking-widest: 0.1em;
          --color-black: #000000;
          --color-white: #ffffff;
          --ease-sine-in-out: cubic-bezier(0.37, 0, 0.63, 1);
          --ease-sine-out: cubic-bezier(0.61, 1, 0.88, 1);
          --z-content: 10;
        }

        /* Swiper */
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

        /* Utility Classes */
        .size-full {
          width: 100%;
          height: 100%;
        }

        .z-content {
          z-index: var(--z-content);
        }

        /* Botones - Código exacto de Allbirds */
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
          text-decoration: none;
          transition: background-color 0.2s var(--ease-sine-in-out),
                      color 0.2s var(--ease-sine-in-out),
                      border-color 0.2s var(--ease-sine-in-out),
                      opacity 0.2s var(--ease-sine-out);
          border-radius: 9999px;
          justify-content: center;
          align-items: center;
          display: flex;
        }

        /* Force tagline contrast */
        .hero-tagline {
          color: #ffffff !important;
        }

        /* Ensure CTA layout centered with spacing */
        .hero-ctas {
          justify-content: center !important;
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
      `}</style>
    </section>
  );
}
