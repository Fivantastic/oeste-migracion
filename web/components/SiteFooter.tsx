import React from "react";
import Link from "next/link";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-alfa-slab)' }}>
                <span className="text-orange-600">OESTE</span>
                <span className="text-gray-800"> VAQUERO</span>
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Tu tienda online especializada en moda western, cowboy y cowgirl. 
              Los mejores productos con estilo del viejo oeste.
            </p>
          </div>

          {/* Calzado */}
          <div>
            <h4 className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wide">
              Calzado
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/botas-vaqueras-de-mujer" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                  Botas Mujer
                </Link>
              </li>
              <li>
                <Link href="/botas-vaqueras-hombres" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                  Botas Hombre
                </Link>
              </li>
            </ul>
          </div>

          {/* Ropa */}
          <div>
            <h4 className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wide">
              Ropa
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/camisas-western-mujer" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                  Camisas Mujer
                </Link>
              </li>
              <li>
                <Link href="/camisas-western-hombre" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                  Camisas Hombre
                </Link>
              </li>
              <li>
                <Link href="/camisetas-western" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                  Camisetas
                </Link>
              </li>
              <li>
                <Link href="/vaqueros-mujer" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                  Vaqueros Mujer
                </Link>
              </li>
              <li>
                <Link href="/vaqueros-hombre" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                  Vaqueros Hombre
                </Link>
              </li>
              <li>
                <Link href="/disfraces-vaqueros" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                  Disfraces
                </Link>
              </li>
            </ul>
          </div>

          {/* Accesorios */}
          <div>
            <h4 className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wide">
              Accesorios
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/sombreros-western" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                  Sombreros
                </Link>
              </li>
              <li>
                <Link href="/cinturones-western" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                  Cinturones
                </Link>
              </li>
              <li>
                <Link href="/hebillas-western" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                  Hebillas
                </Link>
              </li>
              <li>
                <Link href="/bolsos-vaqueros" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                  Bolsos
                </Link>
              </li>
              <li>
                <Link href="/corbata-de-bolo-y-complementos" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                  Corbatas de Bolo
                </Link>
              </li>
            </ul>
          </div>

          {/* Especial + Legal */}
          <div>
            <h4 className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wide">
              Especial
            </h4>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/todo-western" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                  Todo Western
                </Link>
              </li>
              <li>
                <Link href="/jinete-vaquero" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                  Para Jinetes
                </Link>
              </li>
              <li>
                <Link href="/zarzaparrilla-saloon" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                  Zarzaparrilla Saloon
                </Link>
              </li>
            </ul>

            <h4 className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wide">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/politica-de-privacidad" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/politica-de-cookies" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © {currentYear} Oeste Vaquero. Todos los derechos reservados.
            </p>
            <p className="text-xs text-gray-500">
              Sitio web de afiliación de Amazon. Ganamos comisiones por compras cualificadas.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
