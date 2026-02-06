"use client";

import { motion } from "framer-motion";
import { FileText, WarningCircle } from "@phosphor-icons/react";
// Health Icons - iconos médicos profesionales
import {
  Gynecology,
  Stethoscope,
  ChildProgram,
  BiochemistryLaboratory,
  UltrasoundScanner,
  Diabetes,
  BlisterPillsOvalX1,
  Bladder,
  SkinCancer,
  Nutrition,
} from "healthicons-react/outline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SPECIALTIES } from "@/lib/constants";

const iconMap = {
  // Health Icons (médicos)
  Heart: Gynecology,
  Stethoscope: Stethoscope,
  Baby: ChildProgram,
  TestTube: BiochemistryLaboratory,
  Monitor: UltrasoundScanner,
  Activity: Diabetes,
  Pill: BlisterPillsOvalX1,
  User: Bladder,
  Sparkles: SkinCancer,
  Apple: Nutrition,
  // Phosphor Icons (general)
  FileCheck: FileText,
  AlertCircle: WarningCircle,
};

export function Specialties() {
  return (
    <section id="especialidades" className="py-16 bg-green-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Servicios de la{" "}
            <span className="text-primary">Clínica Hispana</span> en Houston
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestra clínica hispana Mi Clínica Medical Center ofrece una amplia
            gama de servicios médicos en español. Atención profesional para toda
            la familia en la comunidad hispana de Houston.
          </p>
        </motion.div>

        {/* Specialties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIALTIES.map((specialty, index) => {
            const Icon = iconMap[specialty.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={specialty.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`h-full hover:shadow-lg transition-all ${
                    specialty.highlighted
                      ? "border-2 border-primary bg-gradient-to-br from-white to-green-light/30"
                      : ""
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                          specialty.highlighted
                            ? "bg-primary text-white"
                            : "bg-secondary/10 text-secondary"
                        }`}
                      >
                        <Icon className="size-7" />
                      </div>
                      {specialty.highlighted && (
                        <Badge variant="default">Destacado</Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg mt-4">
                      {specialty.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {specialty.description}
                    </p>
                    <Button
                      asChild
                      variant={specialty.highlighted ? "default" : "outline"}
                      size="sm"
                      className="w-full mt-4"
                    >
                      <a href="#contacto">
                        Agendar en Clínica Hispana
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional SEO Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-xl p-8 shadow-sm"
        >
          <h3 className="text-xl font-bold text-foreground mb-4">
            ¿Por qué elegir nuestra Clínica Hispana en Houston?
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
            <div>
              <p className="mb-4">
                Mi Clínica Medical Center es la clínica hispana líder en Houston
                para servicios de ginecología, medicina general y exámenes de
                inmigración I-693. Nuestra clínica hispana cuenta con
                profesionales certificados que hablan español.
              </p>
              <p>
                En nuestra clínica hispana, entendemos las necesidades de la
                comunidad latina. Por eso ofrecemos atención médica de calidad a
                precios accesibles, con horarios extendidos de Lunes a Domingo.
              </p>
            </div>
            <div>
              <p className="mb-4">
                Como clínica hispana autorizada por USCIS, realizamos exámenes
                médicos para Green Card (I-693) con médicos Civil Surgeon
                certificados. Nuestra clínica hispana completa todo el proceso
                en español.
              </p>
              <p>
                Visita la clínica hispana Mi Clínica Medical Center para
                ginecología, pediatría, laboratorio clínico, ultrasonido y más
                servicios. Somos tu clínica hispana de confianza en Houston, TX.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
