"use client";

import Link from "next/link";
import { Phone, Calendar, CheckCircle, X } from "@phosphor-icons/react/dist/ssr";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CONTACT_INFO } from "@/lib/constants";
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

interface ServiceDetailDialogProps {
  service: Service | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ServiceDetailDialog({
  service,
  open,
  onOpenChange,
}: ServiceDetailDialogProps) {
  if (!service) return null;

  const Icon = iconMap[service.icon] || iconMap["Stethoscope"];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0 gap-0" showCloseButton={false}>
        {/* Header con gradiente */}
        <div className="bg-linear-to-br from-secondary to-secondary/90 text-white p-6 rounded-t-lg">
          <DialogHeader>
            <div className="flex items-start gap-4">
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                  service.highlighted
                    ? "bg-primary text-white"
                    : "bg-white/20 text-white"
                }`}
              >
                <Icon className="size-7" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                    {categoryLabels[service.category]}
                  </Badge>
                  {service.highlighted && (
                    <Badge className="bg-primary text-white text-xs">Destacado</Badge>
                  )}
                </div>
                <DialogTitle className="text-xl sm:text-2xl font-bold text-white">
                  {service.title}
                </DialogTitle>
                <DialogDescription className="text-white/80 mt-1">
                  {service.description}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
        </div>

        {/* Contenido scrolleable */}
        <ScrollArea className="max-h-[50vh]">
          <div className="p-6 space-y-6">
            {/* Descripción larga */}
            {service.longDescription && (
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Sobre este servicio
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.longDescription}
                </p>
              </div>
            )}

            {/* Features */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">
                ¿Qué incluye?
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle
                      className="size-4 text-primary shrink-0 mt-0.5"
                      weight="fill"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info adicional */}
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground text-center">
                Atención 100% en español • Sin cita previa • Abierto 7 días
              </p>
            </div>
          </div>
        </ScrollArea>

        {/* Footer con CTAs */}
        <div className="border-t p-4 bg-muted/30">
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="flex-1">
              <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`}>
                <Phone className="size-5 mr-2" weight="fill" />
                Llamar Ahora
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="flex-1"
              onClick={() => onOpenChange(false)}
            >
              <Link href="/#contacto">
                <Calendar className="size-5 mr-2" weight="fill" />
                Agendar Cita
              </Link>
            </Button>
          </div>
        </div>

        {/* Botón cerrar */}
        <DialogClose className="absolute right-4 top-4 rounded-full bg-white/20 p-1.5 text-white hover:bg-white/30 transition-colors">
          <X className="size-4" />
          <span className="sr-only">Cerrar</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
