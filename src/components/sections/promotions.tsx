"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "@phosphor-icons/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROMOTIONS } from "@/lib/constants";

const promoImages: Record<string, string> = {
  ginecologia: "/images/promotions/gynecology-promo.webp",
  inmigracion: "/images/promotions/immigration-promo.webp",
  "ultrasonido-embarazo": "/images/promotions/ultrasound-promo.webp",
};

const promoAltText: Record<string, string> = {
  ginecologia: "Ginecóloga hispana atendiendo paciente en consulta - Clínica Hispana Houston",
  inmigracion: "Examen médico de inmigración I-693 en clínica hispana Houston",
  "ultrasonido-embarazo": "Ultrasonido de embarazo en clínica hispana - Atención prenatal Houston",
};

export function Promotions() {
  return (
    <section className="py-16 bg-linear-to-b from-green-bg to-green-bg-alt">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Promociones de la{" "}
            <span className="text-primary">Clínica Hispana</span> en Houston
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aprovecha nuestros precios especiales en la clínica hispana Mi
            Clínica Medical Center. Atención médica de calidad a precios
            accesibles para la comunidad hispana de Houston.
          </p>
        </motion.div>

        {/* Promotion Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PROMOTIONS.map((promo, index) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={
                index === PROMOTIONS.length - 1
                  ? "md:col-span-2 md:justify-self-center md:w-[calc(50%-0.75rem)] xl:col-span-1 xl:w-full"
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
                {promoImages[promo.id] && (
                  <>
                    <Image
                      src={promoImages[promo.id]}
                      alt={promoAltText[promo.id] || promo.title}
                      fill
                      className="object-cover object-[center_20%] md:object-[center_30%] xl:object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/70 to-black/40" />
                  </>
                )}

                <CardHeader className="pb-2 relative z-10">
                  <CardTitle className="text-xl text-white drop-shadow-md">
                    {promo.title}
                  </CardTitle>
                  {/* Badge debajo del título */}
                  <Badge
                    className={`w-fit mt-2 ${
                      index === 0
                        ? "bg-primary text-white"
                        : index === 2
                          ? "bg-success text-white"
                          : "bg-white/90 text-secondary"
                    }`}
                  >
                    {promo.badge}
                  </Badge>
                  <p className="text-sm text-white/80 mt-2">
                    {promo.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4 relative z-10">
                  {/* Price */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white drop-shadow-lg">
                      {promo.price}
                    </span>
                    {promo.originalPrice && (
                      <span className="text-lg text-white/60 line-through">
                        {promo.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Includes */}
                  <ul className="space-y-2">
                    {promo.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="size-4 text-green-400 shrink-0 mt-0.5" />
                        <span className="text-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
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

        {/* Bottom text */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          * Precios válidos en nuestra clínica hispana Mi Clínica Medical Center
          en Houston, TX. Sujetos a cambio sin previo aviso.
        </p>
      </div>
    </section>
  );
}
