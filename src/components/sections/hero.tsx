"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Calendar, CheckCircle, Shield, ChatCircle, Users, Clock } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { HERO_CONTENT, CONTACT_INFO, TRUST_BADGES } from "@/lib/constants";

const trustBadgeIconMap = {
  Shield,
  MessageCircle: ChatCircle,
  Users,
  Clock,
};

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-bg via-green-warm to-green-light/30 -z-10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium"
            >
              <CheckCircle className="size-4" />
              <span>Autorizado por USCIS para Exámenes I-693</span>
            </motion.div>

            {/* Title - H1 optimizado para SEO */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              <span className="text-primary">Clínica Hispana</span> Cerca de Ti en Houston
            </h1>

            {/* Subtitle - H2 */}
            <h2 className="text-xl md:text-2xl text-secondary font-semibold">
              Tu Clínica Hispana Familiar con Ginecólogos que Hablan Español
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              {HERO_CONTENT.description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 text-sm">
              {[
                "100% en Español",
                "Sin Cita Previa",
                "Abierto 7 Días",
                "Precios Accesibles",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <CheckCircle className="size-4 text-success" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="text-lg px-8">
                <a href="#contacto">
                  <Calendar className="size-5 mr-2" />
                  {HERO_CONTENT.cta}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`}>
                  <Phone className="size-5 mr-2" />
                  Llamar Ahora
                </a>
              </Button>
            </div>

            {/* Hours Badge */}
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-secondary">Horario:</span>{" "}
              {CONTACT_INFO.hours}
            </p>

            {/* Trust Badges integrados en Hero - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-3 pt-4 lg:hidden"
            >
              {TRUST_BADGES.map((badge) => {
                const Icon = trustBadgeIconMap[badge.icon as keyof typeof trustBadgeIconMap];
                return (
                  <div
                    key={badge.id}
                    className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-sm"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground text-xs leading-tight truncate">
                        {badge.title}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {badge.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-secondary/10 rounded-full" />

              {/* Main image placeholder - replace with actual clinic image */}
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden aspect-[4/5]">
                <Image
                  src="/images/logo.png"
                  alt="clinica hispana cerca de mi en Houston TX"
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="size-6 text-success" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">+5,000</p>
                    <p className="text-sm text-muted-foreground">
                      Pacientes Atendidos
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trust Badges integrados en Hero - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="hidden lg:grid grid-cols-4 gap-6 mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
        >
          {TRUST_BADGES.map((badge, index) => {
            const Icon = trustBadgeIconMap[badge.icon as keyof typeof trustBadgeIconMap];
            return (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Icon className="size-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-sm mb-1">{badge.title}</h3>
                <p className="text-xs text-muted-foreground">{badge.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
