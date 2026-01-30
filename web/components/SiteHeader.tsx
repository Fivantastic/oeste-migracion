"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Search, ShoppingCart } from "lucide-react";

const menuItems = [
  {
    label: "Botas",
    items: [
      { label: "Botas Mujer", href: "/botas-vaqueras-de-mujer" },
      { label: "Botas Hombre", href: "/botas-vaqueras-hombres" },
    ],
  },
  {
    label: "Ropa",
    items: [
      { label: "Camisas Mujer", href: "/camisas-western-mujer" },
      { label: "Camisas Hombre", href: "/camisas-western-hombre" },
      { label: "Camisetas Western", href: "/camisetas-western" },
      { label: "Vaqueros Mujer", href: "/vaqueros-mujer" },
      { label: "Vaqueros Hombre", href: "/vaqueros-hombre" },
      { label: "Ropa Cowgirl", href: "/ropa-cowgirl" },
      { label: "Ropa Cowboy", href: "/ropa-cowboy" },
      { label: "Disfraces", href: "/disfraces-vaqueros" },
    ],
  },
  {
    label: "Accesorios",
    items: [
      { label: "Sombreros", href: "/sombreros-western" },
      { label: "Cinturones", href: "/cinturones-western" },
      { label: "Hebillas", href: "/hebillas-western" },
      { label: "Bolsos", href: "/bolsos-vaqueros" },
      { label: "Corbatas de Bolo", href: "/corbata-de-bolo-y-complementos" },
    ],
  },
  {
    label: "Especial",
    items: [
      { label: "Todo Western", href: "/todo-western" },
      { label: "Para Jinetes", href: "/jinete-vaquero" },
      { label: "Oeste Equipo", href: "/oeste-equipo" },
      { label: "Zarzaparrilla Saloon", href: "/zarzaparrilla-saloon" },
    ],
  },
];

const quickLinks = [
  { label: "MUJER", href: "/botas-vaqueras-de-mujer" },
  { label: "HOMBRE", href: "/botas-vaqueras-hombres" },
  { label: "BESTSELLERS", href: "/todo-western" },
  { label: "NOVEDADES", href: "/oeste-vaquero" },
];

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#f39548] text-white text-center py-2 px-4 text-xs md:text-sm font-medium">
        Envío gratis en pedidos superiores a 75€. Devoluciones fáciles.
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Mobile Header */}
          <div className="flex items-center justify-between h-16 md:hidden">
            {/* Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-[#f39548] transition-colors"
              aria-label="Menú"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/uploads/uploads/2020/04/logotop-300x119.png"
                alt="Oeste Vaquero"
                width={140}
                height={40}
                className="h-8 w-auto"
              />
            </Link>

            {/* Icons */}
            <div className="flex items-center gap-3">
              <Link href="/buscar" className="text-gray-700 hover:text-[#f39548] transition-colors">
                <Search size={20} />
              </Link>
              <Link href="/carrito" className="text-gray-700 hover:text-[#f39548] transition-colors">
                <ShoppingCart size={20} />
              </Link>
            </div>
          </div>

          {/* Desktop Header */}
          <div className="hidden md:flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/uploads/uploads/2020/04/logotop-300x119.png"
                alt="Oeste Vaquero"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="flex items-center gap-8">
              {menuItems.map((menu) => (
                <div
                  key={menu.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(menu.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="text-sm font-semibold text-gray-700 hover:text-[#f39548] uppercase tracking-wide transition-colors">
                    {menu.label}
                  </button>

                  {/* Dropdown */}
                  {openDropdown === menu.label && (
                    <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[200px]">
                      {menu.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f7c091]/20 hover:text-[#f39548] transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link href="/faqs" className="text-sm font-semibold text-gray-700 hover:text-[#f39548] uppercase tracking-wide transition-colors">
                FAQs
              </Link>
            </nav>

            {/* Desktop Icons */}
            <div className="flex items-center gap-4">
              <Link href="/buscar" className="text-gray-700 hover:text-[#f39548] transition-colors">
                <Search size={22} />
              </Link>
              <Link href="/carrito" className="text-gray-700 hover:text-[#f39548] transition-colors">
                <ShoppingCart size={22} />
              </Link>
            </div>
          </div>

          {/* Quick Links Bar (Mobile) */}
          <div className="md:hidden border-t border-gray-200 overflow-x-auto">
            <div className="inline-flex items-center space-x-5 px-4 py-3 whitespace-nowrap">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} legacyBehavior>
                  <a className="inline-block text-xs font-semibold text-gray-700 hover:text-[#f39548] uppercase tracking-wide transition-colors no-underline">
                    {link.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-16 bg-white z-40 overflow-y-auto md:hidden">
            <div className="px-4 py-6">
              {menuItems.map((menu) => (
                <div key={menu.label} className="mb-6">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === menu.label ? null : menu.label)}
                    className="w-full text-left text-lg font-bold text-gray-800 uppercase tracking-wide mb-3 flex items-center justify-between"
                  >
                    {menu.label}
                    <span className="text-[#f39548]">{openDropdown === menu.label ? "−" : "+"}</span>
                  </button>

                  {openDropdown === menu.label && (
                    <div className="pl-4 space-y-2">
                      {menu.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-2 text-gray-700 hover:text-[#f39548] transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="/faqs"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-bold text-gray-800 uppercase tracking-wide mb-3"
              >
                FAQs
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
