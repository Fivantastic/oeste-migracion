import Link from "next/link";
import HeroMain from "@/components/HeroMain";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroMain />

      {/* Botas Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Botas Mujer */}
            <Link href="/botas-vaqueras-de-mujer" className="group">
              <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <h3 className="text-3xl font-bold text-orange-600 mb-4" style={{ fontFamily: 'var(--font-alfa-slab)' }}>
                      BOTAS MUJER
                    </h3>
                    <p className="text-gray-600 mb-6">Tus próximas botas favoritas</p>
                    <span className="inline-block bg-orange-600 text-white px-8 py-3 rounded font-semibold uppercase tracking-wide group-hover:bg-orange-700 transition-colors">
                      Comprar Mujer
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Botas Hombre */}
            <Link href="/botas-vaqueras-hombres" className="group">
              <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'var(--font-alfa-slab)' }}>
                      BOTAS HOMBRE
                    </h3>
                    <p className="text-gray-600 mb-6">El sitio de los auténticos cowboys</p>
                    <span className="inline-block bg-gray-800 text-white px-8 py-3 rounded font-semibold uppercase tracking-wide group-hover:bg-gray-900 transition-colors">
                      Comprar Hombre
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Categorías Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-orange-600" style={{ fontFamily: 'var(--font-alfa-slab)' }}>
            OESTE VAQUERO
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Toda la ropa vaquera, a un click. Incluso la que no sabías que existía
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {[
              { name: "Vaqueros Mujer", href: "/vaqueros-mujer" },
              { name: "Vaqueros Hombre", href: "/vaqueros-hombre" },
              { name: "Camisas Western Mujer", href: "/camisas-western-mujer" },
              { name: "Camisas Western Hombre", href: "/camisas-western-hombre" },
              { name: "Ropa Cowgirl", href: "/ropa-cowgirl" },
              { name: "Ropa Cowboy", href: "/ropa-cowboy" },
            ].map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-orange-600"
              >
                <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
                  {cat.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Productos Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-orange-600" style={{ fontFamily: 'var(--font-alfa-slab)' }}>
            COGE LAS RIENDAS DE TU ESTILO
          </h2>
          <p className="text-center text-gray-600 mb-12">Elige tu propio camino</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Cinturones Vaqueros", href: "/cinturones-western" },
              { name: "Camisetas Temáticas", href: "/camisetas-western" },
              { name: "Sombreros Western", href: "/sombreros-western" },
              { name: "Hebillas Auténticas", href: "/hebillas-western" },
              { name: "Disfraces Realistas", href: "/disfraces-vaqueros" },
              { name: "Bolsos", href: "/bolsos-vaqueros" },
              { name: "Corbatas de Bolo", href: "/corbata-de-bolo-y-complementos" },
              { name: "Todo para Jinetes", href: "/jinete-vaquero" },
              { name: "Todo Western", href: "/todo-western" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-orange-600 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                  <svg className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 text-sm">
                  {item.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
