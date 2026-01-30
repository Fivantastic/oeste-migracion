"use client";
import { useState } from "react";
import Link from "next/link";

const categories = [
  { name: "Botas Mujer", href: "/botas-vaqueras-de-mujer", count: 24 },
  { name: "Botas Hombre", href: "/botas-vaqueras-hombres", count: 71 },
  { name: "Sombreros", href: "/sombreros-western", count: 75 },
  { name: "Cinturones", href: "/cinturones-western", count: 15 },
  { name: "Camisas Mujer", href: "/camisas-western-mujer", count: 12 },
  { name: "Camisas Hombre", href: "/camisas-western-hombre", count: 14 },
  { name: "Camisetas", href: "/camisetas-western", count: 19 },
  { name: "Bolsos", href: "/bolsos-vaqueros", count: 40 },
  { name: "Disfraces", href: "/disfraces-vaqueros", count: 23 },
  { name: "Hebillas", href: "/hebillas-western", count: 10 },
  { name: "Corbatas de Bolo", href: "/corbata-de-bolo-y-complementos", count: 8 },
];

const popularSearches = [
  "botas vaqueras mujer",
  "sombrero cowboy",
  "cinturón western",
  "camisa vaquera",
  "disfraces cowboy",
  "bolsos western",
  "hebillas auténticas",
  "corbata bolo",
];

export default function BuscarPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(categories);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredCategories(categories);
    } else {
      const filtered = categories.filter((cat) =>
        cat.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCategories(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className="text-4xl md:text-5xl font-bold text-orange-600 mb-4"
            style={{ fontFamily: 'var(--font-alfa-slab)' }}
          >
            BUSCAR PRODUCTOS
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encuentra botas, sombreros, ropa western y todos los accesorios del viejo oeste
          </p>
        </div>

        {/* Barra de Búsqueda */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Buscar productos western..."
              className="w-full px-6 py-4 pr-12 text-lg border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none transition-colors"
            />
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Búsquedas Populares */}
        {searchQuery === "" && (
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Búsquedas Populares
            </h2>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((search) => (
                <button
                  key={search}
                  onClick={() => handleSearch(search)}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:border-orange-600 hover:text-orange-600 transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Resultados */}
        <div className="max-w-6xl mx-auto">
          {searchQuery && (
            <div className="mb-6">
              <p className="text-gray-600">
                {filteredCategories.length > 0
                  ? `${filteredCategories.length} categorías encontradas para "${searchQuery}"`
                  : `No se encontraron resultados para "${searchQuery}"`}
              </p>
            </div>
          )}

          {/* Grid de Categorías */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-orange-600 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {category.count} productos
                    </p>
                  </div>
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Mensaje si no hay resultados */}
          {filteredCategories.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <svg
                className="w-16 h-16 text-gray-300 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                No encontramos resultados
              </h3>
              <p className="text-gray-600 mb-6">
                Intenta con otros términos de búsqueda
              </p>
              <button
                onClick={() => handleSearch("")}
                className="text-orange-600 font-semibold hover:underline"
              >
                Ver todas las categorías
              </button>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-16 bg-orange-50 rounded-lg p-8 text-center">
          <h3 
            className="text-2xl font-bold text-orange-600 mb-3"
            style={{ fontFamily: 'var(--font-alfa-slab)' }}
          >
            ¿NO ENCUENTRAS LO QUE BUSCAS?
          </h3>
          <p className="text-gray-700 mb-6">
            Explora nuestro catálogo completo de productos western
          </p>
          <Link
            href="/todo-western"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded uppercase tracking-wide transition-colors"
          >
            Ver Todo Western
          </Link>
        </div>
      </div>
    </div>
  );
}
