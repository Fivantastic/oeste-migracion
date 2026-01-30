"use client";
import Image from "next/image";
import Link from "next/link";

export default function HeroCircles() {
  return (
    <section className="relative bg-gradient-to-b from-[#2c3e50] to-[#34495e] overflow-hidden">
      {/* Mobile Layout */}
      <div className="md:hidden px-4 pt-12 pb-16">
        {/* Circle Images */}
        <div className="relative h-[420px] mb-10">
          {/* Top Circle - Smaller */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl bg-gray-200">
            <img
              src="/uploads/uploads/2020/04/botashombre-400x382.jpg"
              alt="Botas Western"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Circle - Larger */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl bg-gray-200">
            <img
              src="/uploads/uploads/2020/04/botasmujer-400x382.jpg"
              alt="Botas Vaqueras"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center text-white space-y-5 px-2">
          <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-300">
            Auténtico Estilo Western
          </p>
          
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            100% Estilo<br />Vaquero
          </h1>

          <p className="text-sm text-gray-300 max-w-xs mx-auto leading-relaxed">
            Botas vaqueras que nunca pasan de moda. Calidad artesanal para cowboys y cowgirls modernos.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-3 pt-6 max-w-xs mx-auto">
            <Link
              href="/botas-vaqueras-hombres"
              className="w-full py-3.5 px-6 bg-white text-gray-900 font-bold uppercase tracking-wide rounded-full hover:bg-gray-100 transition-all text-xs shadow-lg"
            >
              Shop Men
            </Link>
            <Link
              href="/botas-vaqueras-de-mujer"
              className="w-full py-3.5 px-6 border-2 border-white text-white font-bold uppercase tracking-wide rounded-full hover:bg-white hover:text-gray-900 transition-all text-xs"
            >
              Shop Women
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block relative min-h-[600px] lg:min-h-[700px]">
        <div className="max-w-7xl mx-auto px-8 py-16 lg:py-24">
          <div className="grid grid-cols-2 gap-12 items-center">
            {/* Left Side - Circles */}
            <div className="relative h-[500px] lg:h-[600px]">
              {/* Large Circle - Left */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-white/30 shadow-2xl bg-gray-200">
                <img
                  src="/uploads/uploads/2020/04/botashombre-400x382.jpg"
                  alt="Botas Western Hombre"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Medium Circle - Right Overlap */}
              <div className="absolute top-1/2 right-0 -translate-y-1/4 w-64 h-64 lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden border-4 border-white/30 shadow-2xl bg-gray-200">
                <img
                  src="/uploads/uploads/2020/04/botasmujer-400x382.jpg"
                  alt="Botas Western Mujer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="text-white space-y-6 pl-8">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-300">
                Auténtico Estilo Western
              </p>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                100% Estilo<br />Vaquero
              </h1>

              <p className="text-base lg:text-lg text-gray-300 max-w-lg leading-relaxed">
                Botas vaqueras que nunca pasan de moda. Calidad artesanal para cowboys y cowgirls modernos.
              </p>

              {/* CTAs */}
              <div className="flex gap-4 pt-6">
                <Link
                  href="/botas-vaqueras-hombres"
                  className="py-4 px-10 bg-white text-gray-900 font-bold uppercase tracking-wide rounded-full hover:bg-gray-100 transition-all text-sm shadow-lg"
                >
                  Shop Men
                </Link>
                <Link
                  href="/botas-vaqueras-de-mujer"
                  className="py-4 px-10 border-2 border-white text-white font-bold uppercase tracking-wide rounded-full hover:bg-white hover:text-gray-900 transition-all text-sm"
                >
                  Shop Women
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
