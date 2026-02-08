"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  WarningCircle,
  ArrowLeft,
  Phone,
  WhatsappLogo,
  CheckCircle,
  MapPin,
  Clock,
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
} from "healthicons-react/outline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, SERVICES, CONTACT_INFO, WHATSAPP_MESSAGE } from "@/lib/constants";
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
};

const categoryLabels: Record<Service["category"], string> = {
  especialidad: "Enfermedades Crónicas",
  diagnostico: "Diagnóstico",
  mujer: "Salud de la Mujer",
  especial: "Servicios Especiales",
  otro: "Tratamientos",
};

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <main className="min-h-screen bg-green-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Servicio no encontrado</h1>
          <Button asChild>
            <Link href="/services">Ver todos los servicios</Link>
          </Button>
        </div>
      </main>
    );
  }

  const Icon = iconMap[service.icon] || iconMap["Stethoscope"];
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hola, me interesa el servicio de ${service.title}. ${WHATSAPP_MESSAGE}`
  )}`;

  // Get related services (same category, excluding current)
  const relatedServices = SERVICES.filter(
    (s) => s.category === service.category && s.id !== service.id
  ).slice(0, 3);

  return (
    <main className="min-h-screen bg-green-bg">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary/90 text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="size-5" />
              Volver a servicios
            </Link>

            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center ${
                  service.highlighted
                    ? "bg-primary text-white"
                    : "bg-white/20 text-white"
                }`}
              >
                <Icon className="size-10" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    {categoryLabels[service.category]}
                  </Badge>
                  {service.highlighted && (
                    <Badge className="bg-primary text-white">Destacado</Badge>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  {service.title}
                </h1>
                <p className="text-lg text-white/90 mt-2 max-w-2xl">
                  {service.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Sobre este servicio</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.longDescription}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>¿Qué incluye?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <CheckCircle className="size-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-xl font-bold mb-4">
                    Servicios relacionados
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {relatedServices.map((related) => {
                      const RelatedIcon =
                        iconMap[related.icon] || iconMap["Stethoscope"];
                      return (
                        <Link
                          key={related.id}
                          href={`/services/${related.slug}`}
                        >
                          <Card className="h-full hover:shadow-md hover:border-primary/50 transition-all">
                            <CardContent className="p-4">
                              <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-3">
                                <RelatedIcon className="size-5" />
                              </div>
                              <h3 className="font-semibold text-sm">
                                {related.title}
                              </h3>
                            </CardContent>
                          </Card>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="border-2 border-primary/20 bg-gradient-to-br from-white to-primary/5">
                  <CardHeader>
                    <CardTitle className="text-center">
                      ¿Necesitas este servicio?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button asChild size="lg" className="w-full">
                      <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`}>
                        <Phone className="size-5 mr-2" />
                        Llamar Ahora
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="w-full bg-whatsapp hover:bg-whatsapp-dark text-white border-whatsapp hover:border-whatsapp-dark"
                    >
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <WhatsappLogo className="size-5 mr-2" />
                        WhatsApp
                      </a>
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                      Atención en español • Sin cita previa
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Información de contacto
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="size-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Teléfono</p>
                        <a
                          href={`tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`}
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          {CONTACT_INFO.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="size-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Dirección</p>
                        <a
                          href={CONTACT_INFO.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          {CONTACT_INFO.address}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="size-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Horario</p>
                        <p className="text-sm text-muted-foreground">
                          {CONTACT_INFO.hours}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para agendar tu cita?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Visita nuestra clínica hispana en Houston. Atención profesional en
              español para ti y tu familia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`}>
                  <Phone className="size-5 mr-2" />
                  {CONTACT_INFO.phone}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Ver todos los servicios</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
