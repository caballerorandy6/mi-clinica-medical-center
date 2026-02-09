"use client";

import { motion } from "framer-motion";
import { Question } from "@phosphor-icons/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/constants";

export function FAQ() {
  return (
    <section id="faq" className="py-16 bg-green-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Question className="size-8 text-primary" weight="duotone" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Preguntas Frecuentes sobre la{" "}
            <span className="text-primary">Clínica Hispana</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestra
            clínica hispana Mi Clínica Medical Center en Houston, TX.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl px-6 shadow-sm border border-border"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Additional SEO Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-6">
            ¿Tienes más preguntas sobre nuestra clínica hispana? Contáctanos
            ahora.
          </p>
          <div className="flex justify-center">
            <a
              href={`tel:3462265820`}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Llamar a la Clínica Hispana
            </a>
          </div>
        </motion.div>

        {/* SEO Text */}
        <p className="text-center text-sm text-muted-foreground mt-10 max-w-3xl mx-auto">
          Mi Clínica Medical Center es la clínica hispana que responde todas tus
          preguntas en español. Nuestra clínica hispana en Houston está
          comprometida con brindar información clara y transparente a la
          comunidad latina.
        </p>
      </div>
    </section>
  );
}
