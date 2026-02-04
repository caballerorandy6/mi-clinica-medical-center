import { Hero } from "@/components/sections/hero";
import { Promotions } from "@/components/sections/promotions";
import { Testimonials } from "@/components/sections/testimonials";
import { Specialties } from "@/components/sections/specialties";
import { Services } from "@/components/sections/services";
import { GreenCard } from "@/components/sections/green-card";
import { Location } from "@/components/sections/location";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section con Trust Badges integrados */}
      <Hero />

      {/* 2. Promociones de la Clínica Hispana */}
      <Promotions />

      {/* 3. Video Reviews / Testimonios */}
      <Testimonials />

      {/* 4. Especialidades Médicas (Ginecología primero) */}
      <Specialties />

      {/* 5. Servicios Específicos */}
      <Services />

      {/* 6. Exámenes Green Card I-693 */}
      <GreenCard />

      {/* 7. Horarios y Ubicación */}
      <Location />

      {/* 8. FAQ */}
      <FAQ />

      {/* 9. Formulario de Contacto */}
      <Contact />
    </>
  );
}
