"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "@phosphor-icons/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROMOTIONS } from "@/lib/constants";

export function Promotions() {
  return (
    <section className="py-16 bg-gradient-to-b from-green-bg to-green-bg-alt">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Promociones de la{" "}
            <span className="text-primary">Clínica Hispana</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aprovecha nuestros precios especiales en la clínica hispana Mi
            Clínica Medical Center. Atención médica de calidad a precios
            accesibles para la comunidad hispana de Houston.
          </p>
        </motion.div>

        {/* Promotion Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PROMOTIONS.map((promo, index) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card
                className={`h-full relative overflow-hidden ${
                  index === 1
                    ? "border-2 border-primary shadow-xl scale-105"
                    : "hover:shadow-lg transition-shadow"
                }`}
              >
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <Badge
                    variant={index === 1 ? "default" : "secondary"}
                    className={
                      index === 2 ? "bg-success hover:bg-success/90" : ""
                    }
                  >
                    {promo.badge}
                  </Badge>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-xl pr-20">{promo.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">
                    {promo.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Price */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">
                      {promo.price}
                    </span>
                    {promo.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        {promo.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Includes */}
                  <ul className="space-y-2">
                    {promo.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="size-4 text-success shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    asChild
                    className="w-full mt-4"
                    variant={index === 1 ? "default" : "outline"}
                  >
                    <a href="#contacto">Agendar en la Clínica Hispana</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          * Precios válidos en nuestra clínica hispana Mi Clínica Medical Center
          en Houston, TX. Sujetos a cambio sin previo aviso.
        </p>
      </div>
    </section>
  );
}
