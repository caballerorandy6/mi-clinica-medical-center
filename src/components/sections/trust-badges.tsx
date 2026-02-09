"use client";

import { motion } from "framer-motion";
import { Shield, ChatCircle, Users, Clock } from "@phosphor-icons/react";
import { TRUST_BADGES } from "@/lib/constants";

const iconMap = {
  Shield,
  MessageCircle: ChatCircle,
  Users,
  Clock,
};

export function TrustBadges() {
  return (
    <section className="py-12 bg-green-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST_BADGES.map((badge, index) => {
            const Icon = iconMap[badge.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="size-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {badge.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* SEO Text */}
        <p className="text-center text-sm text-muted-foreground mt-8 max-w-3xl mx-auto">
          Clínica Hispana Nueva Salud Gessner es la clínica hispana de confianza para la
          comunidad latina en Houston. Nuestra clínica hispana ofrece atención
          médica completa con personal que habla español.
        </p>
      </div>
    </section>
  );
}
