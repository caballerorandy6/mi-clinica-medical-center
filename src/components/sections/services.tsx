"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Check } from "@phosphor-icons/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SERVICES } from "@/lib/constants";

// IDs de los 3 servicios destacados para el landing
const FEATURED_SERVICE_IDS = ["examenes-inmigracion", "servicios-ginecologia", "ultrasonido"];

// Obtener los servicios destacados del array SERVICES
const FEATURED_SERVICES = SERVICES.filter((service) =>
  FEATURED_SERVICE_IDS.includes(service.id)
).sort(
  (a, b) =>
    FEATURED_SERVICE_IDS.indexOf(a.id) - FEATURED_SERVICE_IDS.indexOf(b.id)
);

// Imágenes de fondo para los servicios destacados
const serviceImages: Record<string, string> = {
  "examenes-inmigracion": "/images/services/immigration-exam.webp",
  "servicios-ginecologia": "/images/services/gynecology.webp",
  "ultrasonido": "/images/services/ultrasound.webp",
};

// Alt text para SEO
const serviceAltText: Record<string, string> = {
  "examenes-inmigracion": "Examen médico de inmigración I-693 Green Card - Clínica Hispana Houston",
  "servicios-ginecologia": "Ginecología en español - Clínica Hispana Nueva Salud Gessner Houston TX",
  "ultrasonido": "Ultrasonido diagnóstico en clínica hispana - Houston TX",
};

export function Services() {
  return (
    <section id="servicios" className="py-16 bg-green-bg-alt">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Servicios Destacados en Nuestra{" "}
            <span className="text-primary">Clínica Hispana</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Atención médica de calidad 100% en español. Exámenes de inmigración,
            ultrasonidos y control de enfermedades crónicas con doctores que
            hablan tu idioma.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {FEATURED_SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={
                index === FEATURED_SERVICES.length - 1
                  ? "md:col-span-2 md:justify-self-center md:w-[calc(50%-0.75rem)] lg:col-span-1 lg:w-full"
                  : ""
              }
            >
              <Card
                className={`h-full relative overflow-hidden border-0 ${
                  index === 0
                    ? "ring-2 ring-primary shadow-2xl md:scale-105"
                    : "hover:shadow-xl transition-shadow"
                }`}
              >
                {/* Background Image */}
                {serviceImages[service.id] && (
                  <>
                    <Image
                      src={serviceImages[service.id]}
                      alt={serviceAltText[service.id] || service.title}
                      fill
                      className="object-cover object-[center_20%] md:object-[center_30%] xl:object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/70 to-black/40" />
                  </>
                )}

                <CardHeader className="relative z-10 pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl text-white drop-shadow-md">
                      {service.title}
                    </CardTitle>
                    {index === 0 ? (
                      <Badge className="bg-primary text-white shrink-0">
                        USCIS Autorizado
                      </Badge>
                    ) : (
                      <Badge className="bg-white/90 text-secondary shrink-0">
                        Destacado
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-white/80 mt-2">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="relative z-10 space-y-4">
                  {/* Features - mostrar solo 4 */}
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="size-4 text-green-400 shrink-0" weight="bold" />
                        <span className="text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="w-full mt-4 bg-white text-secondary hover:bg-white/90 font-semibold"
                  >
                    <a href="#contacto">Agendar Cita</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Ver más button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button asChild size="lg" variant="outline">
            <Link href="/servicios">
              Ver Todos los Servicios →
            </Link>
          </Button>
        </motion.div>

        {/* SEO Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-8 max-w-3xl mx-auto"
        >
          La clínica hispana Clínica Hispana Nueva Salud Gessner ofrece una amplia variedad de
          servicios médicos en español. Ultrasonidos, laboratorio clínico, y opciones
          económicas para familias sin seguro. Abiertos los domingos.
        </motion.p>
      </div>
    </section>
  );
}
