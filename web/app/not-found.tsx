import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  const popularLinks = [
    { name: "Botas Vaqueras Mujer", href: "/botas-vaqueras-de-mujer" },
    { name: "Botas Vaqueras Hombre", href: "/botas-vaqueras-hombres" },
    { name: "Sombreros Western", href: "/sombreros-western" },
    { name: "Cinturones Western", href: "/cinturones-western" },
    { name: "Todo Western", href: "/todo-western" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center">
        {/* Icono Western 404 */}
        <div className="mb-8">
          <div className="relative inline-block">
            <h1 
              className="text-9xl md:text-[12rem] font-bold text-orange-600 opacity-20"
              style={{ fontFamily: 'var(--font-alfa-slab)' }}
            >
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg 
                className="w-32 h-32 md:w-40 md:h-40 text-orange-600"
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" opacity="0.3"/>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Mensaje */}
        <h2 
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          style={{ fontFamily: 'var(--font-alfa-slab)' }}
        >
          ¡ESTA PÁGINA SE PERDIÓ EN EL DESIERTO!
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Parece que esta página se ha ido al oeste... pero no te preocupes, 
          tenemos muchas otras rutas que explorar.
        </p>

        {/* Búsqueda rápida */}
        <div className="mb-12">
          <Link
            href="/buscar"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg uppercase tracking-wide transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Buscar Productos
          </Link>
        </div>

        {/* Enlaces populares */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            O explora estas categorías populares:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {popularLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-orange-600 hover:shadow-md transition-all duration-300"
              >
                <span className="text-sm font-semibold text-gray-700 group-hover:text-orange-600 transition-colors">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Botón volver al inicio */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:underline"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al inicio
          </Link>
        </div>

        {/* Decoración Western */}
        <div className="mt-12 opacity-30">
          <p 
            className="text-6xl"
            style={{ fontFamily: 'var(--font-trade-winds)' }}
          >
            🤠
          </p>
        </div>
      </div>
    </div>
  );
}
