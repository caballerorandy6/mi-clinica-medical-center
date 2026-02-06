"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  WarningCircle,
  MagnifyingGlass,
  Funnel,
} from "@phosphor-icons/react";
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
  Heart,
  HealthWorker,
} from "healthicons-react/outline";
import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SERVICES } from "@/lib/constants";
import type { Service } from "@/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
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
  FileCheck: FileText,
  AlertCircle: WarningCircle,
  Cardiologia: Heart,
  General: HealthWorker,
};

const categoryLabels: Record<Service["category"], string> = {
  especialidad: "Enfermedades Crónicas",
  diagnostico: "Diagnóstico",
  mujer: "Salud de la Mujer",
  especial: "Servicios Especiales",
  otro: "Tratamientos",
};

const categoryColors: Record<Service["category"], string> = {
  especialidad: "bg-teal-100 text-teal-800",
  diagnostico: "bg-emerald-100 text-emerald-800",
  mujer: "bg-green-100 text-green-800",
  especial: "bg-lime-100 text-lime-800",
  otro: "bg-cyan-100 text-cyan-800",
};

export default function ServiciosPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    Service["category"] | "all"
  >("all");

  const filteredServices = useMemo(() => {
    return SERVICES.filter((service) => {
      const matchesSearch =
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.keywords.some((keyword) =>
          keyword.toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesCategory =
        selectedCategory === "all" || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    }).sort((a, b) => a.order - b.order);
  }, [searchTerm, selectedCategory]);

  const categories: Array<Service["category"] | "all"> = [
    "all",
    "especialidad",
    "mujer",
    "diagnostico",
    "especial",
    "otro",
  ];

  return (
    <main className="min-h-screen bg-green-bg">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary/90 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Servicios de la{" "}
              <span className="text-green-light">Clínica Hispana</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Mi Clínica Medical Center ofrece {SERVICES.length} servicios
              médicos completos en español. Encuentra el servicio que necesitas
              en nuestra clínica hispana de Houston.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar servicios..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <Funnel className="size-5 text-muted-foreground" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === "all" ? "Todos" : categoryLabels[category]}
                </Button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-muted-foreground mt-4 text-center md:text-left">
            Mostrando {filteredServices.length} de {SERVICES.length} servicios
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-lg text-muted-foreground">
                No se encontraron servicios con esos criterios.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
              >
                Limpiar filtros
              </Button>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => {
                const Icon =
                  iconMap[service.icon] || iconMap["Stethoscope"];
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link href={`/servicios/${service.slug}`}>
                      <Card
                        className={`h-full hover:shadow-lg transition-all cursor-pointer group ${
                          service.highlighted
                            ? "border-2 border-primary bg-gradient-to-br from-white to-green-light/20"
                            : "hover:border-primary/50"
                        }`}
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div
                              className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                                service.highlighted
                                  ? "bg-primary text-white"
                                  : "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors"
                              }`}
                            >
                              <Icon className="size-7" />
                            </div>
                            <div className="flex flex-col gap-1 items-end">
                              {service.highlighted && (
                                <Badge variant="default">Destacado</Badge>
                              )}
                              <Badge
                                variant="outline"
                                className={categoryColors[service.category]}
                              >
                                {categoryLabels[service.category]}
                              </Badge>
                            </div>
                          </div>
                          <CardTitle className="text-lg mt-4 group-hover:text-primary transition-colors">
                            {service.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                            {service.description}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-1">
                            {service.features.slice(0, 3).map((feature) => (
                              <span
                                key={feature}
                                className="text-xs bg-muted px-2 py-1 rounded-full"
                              >
                                {feature}
                              </span>
                            ))}
                            {service.features.length > 3 && (
                              <span className="text-xs text-muted-foreground px-2 py-1">
                                +{service.features.length - 3} más
                              </span>
                            )}
                          </div>
                          <Button
                            variant={service.highlighted ? "default" : "outline"}
                            size="sm"
                            className="w-full mt-4"
                          >
                            Ver Detalles
                          </Button>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-muted-foreground mb-6">
              Llámanos y te ayudamos a encontrar el servicio que necesitas.
              Nuestra clínica hispana está lista para atenderte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="tel:+13462265820">Llamar Ahora</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/#contacto">Enviar Mensaje</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
