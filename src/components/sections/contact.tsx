"use client";

import { motion } from "framer-motion";
import { Phone, ChatCircle, Clock } from "@phosphor-icons/react";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/forms/contact-form";
import { CONTACT_INFO, WHATSAPP_MESSAGE } from "@/lib/constants";
import { generateWhatsAppUrl } from "@/lib/utils";

export function Contact() {
  const whatsappUrl = generateWhatsAppUrl(
    CONTACT_INFO.whatsappNumber,
    WHATSAPP_MESSAGE
  );

  return (
    <section id="contacto" className="py-16 bg-green-bg-alt">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Agenda tu Cita en la{" "}
            <span className="text-primary">Clínica Hispana</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contáctanos para agendar tu cita en la clínica hispana Mi Clínica
            Medical Center. Estamos listos para atenderte en español.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground">
              Contacto Directo
            </h3>
            <p className="text-muted-foreground">
              Puedes contactar nuestra clínica hispana de las siguientes formas:
            </p>

            {/* Phone Card */}
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-4"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="size-7 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">
                      Llama Ahora
                    </p>
                    <p className="text-primary font-semibold text-xl">
                      {CONTACT_INFO.phone}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Atención en español en la clínica hispana
                    </p>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* WhatsApp Card */}
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                >
                  <div className="w-14 h-14 bg-whatsapp/10 rounded-xl flex items-center justify-center shrink-0">
                    <ChatCircle className="size-7 text-whatsapp" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">WhatsApp</p>
                    <p className="text-whatsapp font-semibold">
                      Envía un mensaje
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Respuesta rápida de la clínica hispana
                    </p>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="size-7 text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">Horario</p>
                    <p className="text-secondary font-semibold">
                      {CONTACT_INFO.hours}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Clínica hispana abierta 7 días
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="bg-green-light rounded-xl p-6">
              <h4 className="font-bold text-foreground mb-2">
                ¿Por qué elegir nuestra clínica hispana?
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Atención 100% en español</li>
                <li>• Aceptamos pacientes sin cita</li>
                <li>• Precios accesibles para la comunidad</li>
                <li>• Autorizados por USCIS para I-693</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* SEO Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-10 max-w-3xl mx-auto"
        >
          Contacta la clínica hispana Mi Clínica Medical Center hoy mismo.
          Nuestra clínica hispana en Houston te espera con atención profesional
          en español para ti y toda tu familia.
        </motion.p>
      </div>
    </section>
  );
}
