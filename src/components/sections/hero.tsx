"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Phone,
  Calendar,
  CheckCircle,
  Shield,
  ChatCircle,
  Users,
  Clock,
  Star,
  WhatsappLogo,
  CaretDown,
} from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { CONTACT_INFO, TRUST_BADGES } from "@/lib/constants";

const trustBadgeIconMap = {
  Shield,
  MessageCircle: ChatCircle,
  Users,
  Clock,
  Star,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export function Hero() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hola, me gustaría agendar una cita en Mi Clínica Medical Center."
  )}`;

  return (
    <section
      id="inicio"
      className="relative min-h-svh flex items-center pt-32 md:pt-36 lg:pt-40 pb-28 md:pb-32 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero.webp"
          alt="Clínica Hispana con Ginecología en Español - Mi Clínica Medical Center Houston TX"
          fill
          className="object-cover object-center"
          priority
          quality={85}
          sizes="100vw"
        />
      </div>

      {/* Overlay con gradiente elegante */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40 -z-10" />
      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-5"
          >
            {/* Title - SEO optimizado, lo primero que impacta */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05]"
            >
              <span className="text-primary">Clínica Hispana</span>
              <br />
              Cerca de Ti en Houston
            </motion.h1>

            {/* Subtitle - Conciso, incluye Ginecología */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl lg:text-2xl text-white/90 font-medium max-w-xl"
            >
              Ginecología y atención médica en español. Doctores que hablan tu idioma.
            </motion.p>

            {/* Badge USCIS - Después del mensaje principal */}
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                <Shield className="size-4 text-primary" weight="fill" />
                <span>Autorizado por USCIS para Exámenes I-693</span>
              </div>
            </motion.div>

            {/* Features - 3 diferenciadores únicos (sin redundancia) */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-x-6 gap-y-2 text-white/90"
            >
              {[
                "Sin Cita Previa",
                "Abierto 7 Días",
                "Precios Accesibles",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="size-5 text-primary" weight="fill" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs - Con urgencia */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <Button
                asChild
                size="lg"
                className="text-lg h-14 px-8 bg-primary hover:bg-primary/90 shadow-xl shadow-primary/30"
              >
                <a href="#contacto">
                  <Calendar className="size-5 mr-2" aria-hidden="true" />
                  Agenda Hoy
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="text-lg h-14 px-8 bg-white text-foreground hover:bg-white/90 shadow-xl"
              >
                <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`}>
                  <Phone className="size-5 mr-2" aria-hidden="true" />
                  {CONTACT_INFO.phone}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="text-lg h-14 px-8 bg-whatsapp hover:bg-whatsapp-dark text-white shadow-xl sm:hidden"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <WhatsappLogo className="size-5 mr-2" weight="fill" aria-hidden="true" />
                  WhatsApp
                </a>
              </Button>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Link a servicios */}
      <motion.a
        href="#especialidades"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer"
      >
        <span className="text-xs font-medium tracking-wider uppercase">Ver servicios</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <CaretDown className="size-5" />
        </motion.div>
      </motion.a>

      {/* Trust Badges - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent pt-12 pb-6">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {TRUST_BADGES.map((badge) => {
              const Icon = trustBadgeIconMap[badge.icon as keyof typeof trustBadgeIconMap];
              return (
                <div
                  key={badge.id}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/10"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                    <Icon className="size-5 md:size-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-white text-sm md:text-base leading-tight truncate">
                      {badge.title}
                    </p>
                    <p className="text-xs md:text-sm text-white/60 truncate">
                      {badge.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
