"use client";

import { motion } from "framer-motion";
import { CheckCircle, Shield, FileText, Clock } from "@phosphor-icons/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GREEN_CARD_FEATURES } from "@/lib/constants";

export function GreenCard() {
  return (
    <section id="green-card" className="py-16 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Badge */}
            <Badge className="bg-white/20 text-white hover:bg-white/30">
              <Shield className="size-4 mr-2" />
              Autorizado por USCIS
            </Badge>

            <h2 className="text-3xl md:text-4xl font-bold">
              Examen Médico Green Card I-693 en la{" "}
              <span className="text-red-light">Clínica Hispana</span>
            </h2>

            <p className="text-lg text-white/80 leading-relaxed">
              Nuestra clínica hispana Mi Clínica Medical Center está autorizada
              por USCIS para realizar exámenes médicos de inmigración. El
              formulario I-693 es completado por nuestro médico Civil Surgeon
              certificado, todo en español.
            </p>

            <p className="text-white/80">
              En la clínica hispana Mi Clínica Medical Center, entendemos lo
              importante que es tu proceso de inmigración. Por eso, nuestro
              equipo te guía paso a paso en tu idioma para completar tu examen
              I-693 sin complicaciones.
            </p>

            {/* Features Checklist */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {GREEN_CARD_FEATURES.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="size-5 text-success shrink-0" />
                  <span className="text-sm text-white/90">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-secondary hover:bg-white/90"
              >
                <a href="#contacto">
                  Agendar Examen I-693 en la Clínica Hispana
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Process Steps */}
            <Card className="bg-white/10 border-white/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <FileText className="size-6" />
                  Proceso en la Clínica Hispana
                </h3>
                <ol className="space-y-4">
                  {[
                    "Llame o visite nuestra clínica hispana sin cita",
                    "Complete el examen físico con nuestro médico en español",
                    "Realizamos los análisis de sangre requeridos",
                    "Revisamos su historial de vacunas",
                    "Reciba su formulario I-693 sellado en 3-5 días",
                  ].map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-white/90">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="pt-6 text-center">
                  <Clock className="size-8 mx-auto mb-2 text-success" />
                  <p className="font-bold text-2xl">3-5</p>
                  <p className="text-sm text-white/80">Días para resultados</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="pt-6 text-center">
                  <Shield className="size-8 mx-auto mb-2 text-success" />
                  <p className="font-bold text-2xl">100%</p>
                  <p className="text-sm text-white/80">En español</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>

        {/* Bottom SEO Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-white/70 mt-12 max-w-3xl mx-auto"
        >
          Mi Clínica Medical Center es la clínica hispana de preferencia en
          Houston para exámenes de Green Card I-693. Nuestra clínica hispana
          cuenta con médicos Civil Surgeon certificados por USCIS que completan
          todo el proceso en español.
        </motion.p>
      </div>
    </section>
  );
}
