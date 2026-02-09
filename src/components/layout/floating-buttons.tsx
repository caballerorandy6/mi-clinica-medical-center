"use client";

import { Phone, MapPin } from "@phosphor-icons/react";
import { CONTACT_INFO } from "@/lib/constants";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function FloatingButtons() {
  const phoneUrl = `tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Maps Button */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={CONTACT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-secondary rounded-full shadow-lg hover:bg-teal-dark transition-colors"
              aria-label="Ver ubicación en Google Maps"
            >
              <MapPin className="size-7 text-white" weight="fill" />
            </a>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Ver ubicación</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Phone Button */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={phoneUrl}
              className="flex items-center justify-center w-14 h-14 bg-primary rounded-full shadow-lg hover:bg-green-dark transition-colors animate-pulse-float"
              aria-label="Llamar a la clínica"
            >
              <Phone className="size-7 text-white" weight="fill" />
            </a>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Llamar ahora</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
