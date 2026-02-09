"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Clock, InstagramLogo, FacebookLogo } from "@phosphor-icons/react";
import { CONTACT_INFO, NAVIGATION_LINKS, SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-teal-dark text-white" id="contacto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="group flex items-center gap-3">
              <Image
                src="/images/logo.webp"
                alt="Logo Clínica Hispana Nueva Salud Gessner - Clínica hispana en Houston TX"
                width={60}
                height={60}
                className="w-14 h-14 bg-white rounded-lg p-1 transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <p className="text-lg font-bold group-hover:text-primary transition-colors duration-300">Nueva Salud</p>
                <p className="text-sm text-white/90">Gessner</p>
              </div>
            </Link>
            <p className="text-white/90 text-sm">
              Clínica Hispana Nueva Salud Gessner es tu clínica hispana de confianza en
              Houston, TX. Ofrecemos atención médica profesional 100% en español
              para toda la comunidad hispana.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`}
                  className="group flex items-start gap-3 text-white/90 hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  <Phone className="size-5 mt-0.5 shrink-0 group-hover:text-primary transition-colors duration-300" weight="fill" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-white/90 hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  <MapPin className="size-5 mt-0.5 shrink-0 group-hover:text-primary transition-colors duration-300" weight="fill" />
                  <span>{CONTACT_INFO.address}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/90">
                <Clock className="size-5 mt-0.5 shrink-0" weight="fill" />
                <span>{CONTACT_INFO.hours}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center text-white/90 hover:text-primary transition-all duration-300 hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & SEO Text */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Síguenos</h3>
            <div className="flex flex-col gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-white/90 hover:text-white transition-all duration-300"
                aria-label="Seguir a Clínica Hispana Nueva Salud Gessner en Instagram"
              >
                <span className="flex items-center justify-center size-10 rounded-full bg-white/15 group-hover:bg-linear-to-br group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-orange-400 transition-all duration-300 group-hover:scale-110">
                  <InstagramLogo className="size-5 text-white" weight="fill" />
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">@miclinicamedicalcenter</span>
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-white/90 hover:text-white transition-all duration-300"
                aria-label="Seguir a Clínica Hispana Nueva Salud Gessner en Facebook"
              >
                <span className="flex items-center justify-center size-10 rounded-full bg-white/15 group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                  <FacebookLogo className="size-5 text-white" weight="fill" />
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">Nueva Salud Gessner</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`}
                className="group flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
                aria-label="Llamar a la clínica"
              >
                <Phone className="size-5" weight="fill" />
                <span className="text-sm">Llamar</span>
              </a>
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-medium px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
                aria-label="Ver ubicación en Google Maps"
              >
                <MapPin className="size-5" weight="fill" />
                <span className="text-sm">Ubicación</span>
              </a>
            </div>
            <p className="text-white/90 text-sm mt-4">
              Visita nuestra clínica hispana en Houston para recibir atención
              médica de calidad. Somos la clínica hispana autorizada por USCIS
              para exámenes de Green Card I-693.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative mt-10 pt-8 text-center text-white/70 text-sm">
          {/* Gradient separator */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />
          <p>
            &copy; {currentYear} {SITE_CONFIG.name}. Todos los derechos
            reservados.
          </p>
          <p className="mt-2 text-white/60">
            Clínica Hispana en Houston, TX | Atención Médica en Español
          </p>
        </div>
      </div>
    </footer>
  );
}
