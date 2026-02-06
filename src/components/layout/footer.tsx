"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Clock, InstagramLogo } from "@phosphor-icons/react";
import { CONTACT_INFO, NAVIGATION_LINKS, SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white" id="contacto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.webp"
                alt="Logo Mi Clínica Medical Center - Clínica hispana en Houston TX"
                width={60}
                height={60}
                className="w-14 h-14 bg-white rounded-lg p-1"
              />
              <div>
                <p className="text-lg font-bold">Mi Clínica</p>
                <p className="text-sm text-white/80">Medical Center</p>
              </div>
            </Link>
            <p className="text-white/80 text-sm">
              Mi Clínica Medical Center es tu clínica hispana de confianza en
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
                  className="flex items-start gap-3 text-white/80 hover:text-white transition-colors"
                >
                  <Phone className="size-5 mt-0.5 shrink-0" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/80 hover:text-white transition-colors"
                >
                  <MapPin className="size-5 mt-0.5 shrink-0" />
                  <span>{CONTACT_INFO.address}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <Clock className="size-5 mt-0.5 shrink-0" />
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
                    className="text-white/80 hover:text-white transition-colors"
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
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              aria-label="Seguir a la clínica hispana Mi Clínica Medical Center en Instagram"
            >
              <InstagramLogo className="size-6" />
              <span>@miclinicamedicalcenter</span>
            </a>
            <p className="text-white/80 text-sm mt-4">
              Visita nuestra clínica hispana en Houston para recibir atención
              médica de calidad. Somos la clínica hispana autorizada por USCIS
              para exámenes de Green Card I-693.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>
            &copy; {currentYear} {SITE_CONFIG.name}. Todos los derechos
            reservados.
          </p>
          <p className="mt-2">
            Clínica Hispana en Houston, TX | Atención Médica en Español
          </p>
        </div>
      </div>
    </footer>
  );
}
