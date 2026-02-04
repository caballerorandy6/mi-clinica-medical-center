"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "@phosphor-icons/react";
// Health Icons - iconos médicos profesionales
import {
  Pregnant,
  CommunityHealthworker,
  BiochemistryLaboratory,
  Ambulance,
} from "healthicons-react/outline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SERVICES = [
  {
    id: "ultrasonido-embarazo",
    title: "Ultrasonidos de Embarazo Cerca de Mi",
    description:
      "En nuestra clínica hispana, ultrasonidos para embarazadas con tecnología moderna. Control prenatal completo, ultrasonido obstétrico y seguimiento del bebé en español.",
    icon: Pregnant,
    features: [
      "Ultrasonido obstétrico",
      "Control prenatal",
      "Resultados inmediatos",
      "100% en español",
    ],
  },
  {
    id: "clinicas-gratuitas",
    title: "Clínicas Gratuitas Cerca de Mí",
    description:
      "Nuestra clínica hispana ofrece opciones gratuitas y económicas para la comunidad. Planes de pago flexibles, precios accesibles y atención sin seguro médico.",
    icon: CommunityHealthworker,
    features: [
      "Planes de pago flexibles",
      "Precios accesibles",
      "Atención sin seguro",
      "Opciones comunitarias",
    ],
    highlighted: true,
  },
  {
    id: "laboratorio",
    title: "Laboratorio Clínico Cerca de Mi",
    description:
      "En la clínica hispana Mi Clínica Medical Center, laboratorio con resultados rápidos. Análisis de sangre, orina, glucosa y más pruebas diagnósticas.",
    icon: BiochemistryLaboratory,
    features: [
      "Resultados rápidos",
      "Análisis de sangre",
      "Pruebas de glucosa",
      "Panel completo",
    ],
  },
  {
    id: "clinica-abierta",
    title: "Clínica Abierta Cerca de Mi",
    description:
      "Clínica hispana abierta los domingos y con horario extendido. Atención de urgencias menores sin cita previa para toda la comunidad hispana de Houston.",
    icon: Ambulance,
    features: [
      "Abierto domingos",
      "Sin cita previa",
      "Urgencias menores",
      "Horario extendido",
    ],
  },
];

export function Services() {
  return (
    <section className="py-16 bg-green-bg-alt">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Más Servicios en Nuestra{" "}
            <span className="text-primary">Clínica Hispana</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestra clínica hispana Mi Clínica Medical Center ofrece servicios
            adicionales para toda la comunidad hispana de Houston. Atención
            completa en español con opciones económicas.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`h-full hover:shadow-lg transition-all ${
                    service.highlighted
                      ? "border-2 border-success bg-gradient-to-br from-green-light to-green-bg"
                      : ""
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                          service.highlighted
                            ? "bg-success text-white"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        <Icon className="size-7" />
                      </div>
                      {service.highlighted && (
                        <Badge className="bg-success hover:bg-success/90">
                          Opciones Económicas
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg mt-4">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="size-4 text-success shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      variant={service.highlighted ? "default" : "outline"}
                      className={`w-full mt-4 ${
                        service.highlighted ? "bg-success hover:bg-success/90" : ""
                      }`}
                    >
                      <a href="#contacto">Consultar en Clínica Hispana</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* SEO Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-10 max-w-3xl mx-auto"
        >
          La clínica hispana Mi Clínica Medical Center ofrece ultrasonidos de
          embarazo, laboratorio clínico, y opciones gratuitas para familias sin
          seguro. Nuestra clínica hispana está abierta los domingos para servir
          mejor a la comunidad hispana de Houston.
        </motion.p>
      </div>
    </section>
  );
}
