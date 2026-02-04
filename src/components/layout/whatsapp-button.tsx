"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import { CONTACT_INFO, WHATSAPP_MESSAGE } from "@/lib/constants";
import { generateWhatsAppUrl } from "@/lib/utils";

export function WhatsAppButton() {
  const whatsappUrl = generateWhatsAppUrl(
    CONTACT_INFO.whatsappNumber,
    WHATSAPP_MESSAGE
  );

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      aria-label="Contactar a la clínica hispana Mi Clínica Medical Center por WhatsApp"
    >
      {/* Tooltip - aparece al hover */}
      <span className="hidden group-hover:flex items-center bg-white text-foreground text-sm font-medium px-4 py-2 rounded-lg shadow-lg whitespace-nowrap animate-in fade-in slide-in-from-right-2 duration-200">
        ¡Escríbenos por WhatsApp!
        <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-white rotate-45" />
      </span>

      {/* Botón principal */}
      <div className="flex items-center justify-center w-16 h-16 bg-whatsapp rounded-full shadow-lg hover:bg-whatsapp-dark transition-colors animate-pulse-whatsapp">
        <WhatsappLogo className="size-8 text-white" weight="fill" />
      </div>
    </a>
  );
}
