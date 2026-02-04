"use client";

import { motion } from "framer-motion";
import { Play, Star, Quotes } from "@phosphor-icons/react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: "1",
    name: "María García",
    service: "Ginecología",
    quote:
      "Excelente atención en esta clínica hispana. Me sentí muy cómoda porque todo el personal habla español. La doctora fue muy profesional y amable.",
    rating: 5,
  },
  {
    id: "2",
    name: "Juan Rodríguez",
    service: "Examen Green Card I-693",
    quote:
      "Necesitaba mi examen I-693 para inmigración y en esta clínica hispana me atendieron rápido. El doctor explicó todo en español y el proceso fue muy sencillo.",
    rating: 5,
  },
  {
    id: "3",
    name: "Ana Martínez",
    service: "Pediatría",
    quote:
      "Llevo a mis hijos a esta clínica hispana desde hace años. Los doctores son muy buenos con los niños y siempre nos atienden en español.",
    rating: 5,
  },
  {
    id: "4",
    name: "Carlos López",
    service: "Medicina General",
    quote:
      "La mejor clínica hispana en Houston. Precios justos, atención rápida y personal muy amable. Siempre recomiendo Mi Clínica Medical Center.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-16 bg-green-warm">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Testimonios de Nuestra{" "}
            <span className="text-primary">Clínica Hispana</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce las experiencias de pacientes que confían en nuestra clínica
            hispana Mi Clínica Medical Center para el cuidado de su salud.
          </p>
        </motion.div>

        {/* Video Testimonials - 4 videos como requiere el PDF */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
          {[
            {
              id: 1,
              title: "María - Experiencia en Ginecología",
              description: "Paciente de nuestra clínica hispana comparte su experiencia con ginecología en español",
            },
            {
              id: 2,
              title: "Juan - Examen Green Card I-693",
              description: "Testimonio sobre el proceso de examen médico de inmigración en la clínica hispana",
            },
            {
              id: 3,
              title: "Ana - Atención Pediátrica",
              description: "Madre hispana comparte su experiencia con el cuidado pediátrico de sus hijos",
            },
            {
              id: 4,
              title: "Carlos - Medicina General",
              description: "Paciente habla sobre la atención médica general en nuestra clínica hispana de Houston",
            },
          ].map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-video bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg mb-3">
                  <Play className="size-6 text-white ml-1" fill="white" />
                </div>
                <p className="text-center text-sm font-medium text-foreground">
                  {video.title}
                </p>
                <p className="text-center text-xs text-muted-foreground mt-1 max-w-[200px]">
                  {video.description}
                </p>
              </div>
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <span className="text-xs font-medium text-white bg-primary/90 px-2 py-1 rounded-full">
                  Video Testimonio
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Written Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6 space-y-4">
                  {/* Quote Icon */}
                  <Quotes className="size-8 text-primary/20" />

                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 text-yellow-400"
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.service}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* SEO Text */}
        <p className="text-center text-sm text-muted-foreground mt-10 max-w-3xl mx-auto">
          Miles de pacientes confían en nuestra clínica hispana en Houston. Mi
          Clínica Medical Center es la clínica hispana preferida por la
          comunidad latina gracias a nuestra atención en español y precios
          accesibles.
        </p>
      </div>
    </section>
  );
}
