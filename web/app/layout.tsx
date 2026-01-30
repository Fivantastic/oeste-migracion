import type { Metadata } from "next";
import { Geist, Geist_Mono, Alfa_Slab_One, Trade_Winds } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const alfaSlab = Alfa_Slab_One({
  variable: "--font-alfa-slab",
  weight: "400",
  subsets: ["latin"],
});

const tradeWinds = Trade_Winds({
  variable: "--font-trade-winds",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oeste Vaquero - Tienda Vaquera Online | Botas, Sombreros y Ropa Western",
  description: "La mayor tienda vaquera online de la red. Botas vaqueras, sombreros, cinturones western y todo el equipamiento del oeste americano. Productos seleccionados de Amazon con envío rápido.",
  keywords: ["botas vaqueras", "sombreros western", "ropa cowboy", "cinturones western", "tienda vaquera", "moda western"],
  icons: {
    icon: '/uploads/uploads/favicon-1.png',
    shortcut: '/uploads/uploads/favicon-1.png',
    apple: '/uploads/uploads/favicon-1.png',
  },
  openGraph: {
    title: "Oeste Vaquero - Tu Tienda Western Online",
    description: "Descubre la mejor selección de productos western: botas vaqueras, sombreros, cinturones y más.",
    type: "website",
    locale: "es_ES",
    images: ['/uploads/uploads/logotop-1.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${alfaSlab.variable} ${tradeWinds.variable} antialiased bg-white text-gray-900`}
        suppressHydrationWarning
      >
        <SiteHeader />
        <main className="min-h-screen">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
