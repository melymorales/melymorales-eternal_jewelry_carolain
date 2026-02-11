"use client";

import { Menu, X, Instagram, ShoppingBag } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="Eternal Jewelry Logo"
              width={56}
              height={56}
            />
            <div className="ml-3">
              <h1 className="text-xl tracking-wide text-[#72838B]">
                ETERNAL JEWELRY
              </h1>
              <p className="text-xs text-[#CAC9CF]">
                Joyería en acero inoxidable
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/anillos" className="text-[#72838B] hover:opacity-70">
              Anillos
            </Link>
            <Link href="/aretes" className="text-[#72838B] hover:opacity-70">
              Aretes
            </Link>
            <Link href="/collares" className="text-[#72838B] hover:opacity-70">
              Collares
            </Link>
            <Link href="/pulseras" className="text-[#72838B] hover:opacity-70">
              Pulseras
            </Link>
            <Link
              href="/promociones"
              className="px-4 py-2 rounded-full bg-[#CAC9CF] text-[#72838B] hover:opacity-80 transition"
            >
              Promociones
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#72838B]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[#CAC9CF]">
            <div className="flex flex-col space-y-4">
              {[
                { name: "Anillos", href: "/anillos" },
                { name: "Aretes", href: "/aretes" },
                { name: "Collares", href: "/collares" },
                { name: "Pulseras", href: "/pulseras" },
                { name: "Promociones", href: "/promociones" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#72838B] hover:opacity-70"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
