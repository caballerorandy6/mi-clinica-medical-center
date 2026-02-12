import { Phone, MapPin } from "@phosphor-icons/react/dist/ssr";
import { CONTACT_INFO } from "@/lib/constants";
import { TooltipLink } from "./tooltip-link";

export function FloatingButtons() {
  const phoneUrl = `tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Maps Button */}
      <TooltipLink
        href={CONTACT_INFO.googleMapsUrl}
        label="Ver ubicación en Google Maps"
        tooltipText="Ver ubicación"
        external
        className="flex items-center justify-center size-14 bg-secondary rounded-full shadow-lg hover:bg-teal-dark transition-colors"
      >
        <MapPin className="size-7 text-white" weight="fill" />
      </TooltipLink>

      {/* Phone Button */}
      <TooltipLink
        href={phoneUrl}
        label="Llamar a la clínica"
        tooltipText="Llamar ahora"
        className="flex items-center justify-center size-14 bg-primary rounded-full shadow-lg hover:bg-green-dark transition-colors animate-pulse-float"
      >
        <Phone className="size-7 text-white" weight="fill" />
      </TooltipLink>
    </div>
  );
}
