"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  MagnifyingGlass,
  Funnel,
  Phone,
  Chat,
} from "@phosphor-icons/react/dist/ssr";
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
  MedicalRecords,
  Alert,
} from "healthicons-react/outline";
import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ServiceDetailDialog } from "@/components/services/service-detail-dialog";
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
  FileCheck: MedicalRecords,
  AlertCircle: Alert,
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
  especialidad: "bg-teal-50 text-teal-700 border-teal-200",
  diagnostico: "bg-emerald-50 text-emerald-700 border-emerald-200",
  mujer: "bg-pink-50 text-pink-700 border-pink-200",
  especial: "bg-amber-50 text-amber-700 border-amber-200",
  otro: "bg-sky-50 text-sky-700 border-sky-200",
};

export default function ServiciosPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    Service["category"] | "all"
  >("all");
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setDialogOpen(true);
  };

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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white pt-28 sm:pt-32 lg:pt-40 pb-20 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/services/services-hero.webp"
          alt="Servicios médicos en clínica hispana Houston - Clínica Hispana Nueva Salud Gessner"
          fill
          className="object-cover object-center -z-20"
          priority
          quality={85}
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 -z-10" />

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="size-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white/90">
                {SERVICES.length} Servicios Médicos Disponibles
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Servicios de la{" "}
              <span className="text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:0_0_30px_rgba(34,197,94,0.5)]">
                Clínica Hispana
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Atención médica profesional 100% en español. Encuentra el servicio
              que necesitas en nuestra clínica hispana de Houston.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-green-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-6"
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar servicios..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20 bg-gray-50/50"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2 flex-wrap justify-center">
                <Funnel className="size-5 text-muted-foreground hidden sm:block" />
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full transition-all ${
                      selectedCategory === category
                        ? "shadow-md shadow-primary/25"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {category === "all" ? "Todos" : categoryLabels[category]}
                  </Button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm text-muted-foreground">
                Mostrando{" "}
                <span className="font-semibold text-foreground">
                  {filteredServices.length}
                </span>{" "}
                de {SERVICES.length} servicios
              </p>
              {searchTerm && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchTerm("")}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  Limpiar búsqueda
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-green-bg">
        <div className="container mx-auto px-4">
          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-white rounded-2xl shadow-sm"
            >
              <div className="size-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MagnifyingGlass className="size-8 text-gray-400" />
              </div>
              <p className="text-lg text-muted-foreground mb-2">
                No se encontraron servicios
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Intenta con otros términos de búsqueda
              </p>
              <Button
                variant="outline"
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
                const Icon = iconMap[service.icon] || iconMap["Stethoscope"];
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03 }}
                  >
                    <Card
                      onClick={() => handleServiceClick(service)}
                      className={`h-full cursor-pointer group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                        service.highlighted
                          ? "border-2 border-primary shadow-lg shadow-primary/10 bg-linear-to-br from-white via-white to-green-50"
                          : "border border-gray-100 hover:border-primary/30 hover:shadow-xl hover:shadow-gray-200/50 bg-white"
                      }`}
                    >
                      <CardHeader className="pb-3">
                        {/* Badges row */}
                        <div className="flex items-center justify-between mb-3">
                          <Badge
                            variant="outline"
                            className={`text-xs font-medium ${categoryColors[service.category]}`}
                          >
                            {categoryLabels[service.category]}
                          </Badge>
                          {service.highlighted && (
                            <Badge className="bg-primary text-white text-xs">
                              Destacado
                            </Badge>
                          )}
                        </div>

                        {/* Icon */}
                        <div
                          className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                            service.highlighted
                              ? "bg-primary text-white shadow-lg shadow-primary/30"
                              : "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white group-hover:shadow-lg group-hover:shadow-secondary/20 group-hover:scale-110"
                          }`}
                        >
                          <Icon className="size-7" />
                        </div>
                        <CardTitle className="text-lg mt-4 group-hover:text-primary transition-colors leading-snug">
                          {service.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {service.features.slice(0, 3).map((feature) => (
                            <span
                              key={feature}
                              className="text-xs bg-gray-50 text-gray-600 px-2.5 py-1 rounded-full border border-gray-100"
                            >
                              {feature}
                            </span>
                          ))}
                          {service.features.length > 3 && (
                            <span className="text-xs text-primary font-medium px-2.5 py-1">
                              +{service.features.length - 3} más
                            </span>
                          )}
                        </div>

                        <Button
                          variant={service.highlighted ? "default" : "outline"}
                          size="sm"
                          className={`w-full transition-all ${
                            service.highlighted
                              ? "shadow-md shadow-primary/25"
                              : "group-hover:bg-primary group-hover:text-white group-hover:border-primary"
                          }`}
                        >
                          Ver Detalles
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/services/services-cta.webp"
          alt="Contactar clínica hispana Houston - Clínica Hispana Nueva Salud Gessner"
          fill
          className="object-cover object-center -z-20"
          quality={85}
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-secondary/90 -z-10" />
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.15)_0%,transparent_60%)] -z-10" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6"
            >
              <span className="size-2.5 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white/90">
                Estamos para ayudarte
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-white/90 mb-10 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Llámanos y te ayudamos a encontrar el servicio que necesitas.
              Nuestra clínica hispana está lista para atenderte.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/30 hover:shadow-primary/40 transition-all duration-300 hover:scale-105 h-14 px-8 text-base font-semibold"
              >
                <a href="tel:+13462265820">
                  <Phone className="size-5 mr-2" weight="fill" />
                  Llamar Ahora
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/50 text-white hover:bg-white hover:text-secondary backdrop-blur-sm transition-all duration-300 hover:scale-105 h-14 px-8 text-base font-semibold"
              >
                <Link href="/#contacto">
                  <Chat className="size-5 mr-2" />
                  Enviar Mensaje
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <span className="size-1.5 bg-primary rounded-full" />
                <span>Atención en español</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-1.5 bg-primary rounded-full" />
                <span>Sin cita previa</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-1.5 bg-primary rounded-full" />
                <span>Abierto 7 días</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Dialog */}
      <ServiceDetailDialog
        service={selectedService}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </main>
  );
}
