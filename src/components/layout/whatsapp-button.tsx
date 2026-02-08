"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import { CONTACT_INFO, WHATSAPP_MESSAGE } from "@/lib/constants";
import { generateWhatsAppUrl } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function WhatsAppButton() {
  const whatsappUrl = generateWhatsAppUrl(
    CONTACT_INFO.whatsappNumber,
    WHATSAPP_MESSAGE
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-whatsapp rounded-full shadow-lg hover:bg-whatsapp-dark transition-colors animate-pulse-whatsapp"
              aria-label="Contactar por WhatsApp"
            >
              <WhatsappLogo className="size-7 text-white" weight="fill" />
            </a>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>¡Escríbenos por WhatsApp!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
