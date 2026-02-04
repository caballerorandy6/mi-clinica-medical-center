"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { List, X, Phone } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { NAVIGATION_LINKS, CONTACT_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      )}
    >
      {/* Top bar with phone */}
      <div className="bg-secondary text-white py-2">
        <div className="container mx-auto px-4 flex justify-center md:justify-end">
          <a
            href={`tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`}
            className="flex items-center gap-2 text-sm hover:text-white/80 transition-colors"
            aria-label="Llamar a la clínica hispana Mi Clínica Medical Center"
          >
            <Phone className="size-4" />
            <span>{CONTACT_INFO.phone}</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Mi Clínica Medical Center - Clínica Hispana en Houston"
          >
            <Image
              src="/images/logo.png"
              alt="Logo de Mi Clínica Medical Center - Clínica hispana de confianza en Houston TX"
              width={50}
              height={50}
              className="w-12 h-12 md:w-14 md:h-14"
              priority
            />
            <div className="hidden sm:block">
              <p className="text-lg font-bold text-secondary">Mi Clínica</p>
              <p className="text-xs text-muted-foreground">Medical Center</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button asChild size="lg">
              <a href="#contacto">Agendar Cita</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="size-6" /> : <List className="size-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col gap-3 pb-4">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-foreground hover:text-primary font-medium py-2 border-b border-border transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <a href="#contacto" onClick={closeMenu}>
                Agendar Cita en la Clínica Hispana
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
