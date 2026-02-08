import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";

// Dynamic imports para secciones below-the-fold (mejor performance)
const Promotions = dynamic(() =>
  import("@/components/sections/promotions").then((mod) => mod.Promotions)
);

const Testimonials = dynamic(() =>
  import("@/components/sections/testimonials").then((mod) => mod.Testimonials)
);


const Services = dynamic(() =>
  import("@/components/sections/services").then((mod) => mod.Services)
);

const GreenCard = dynamic(() =>
  import("@/components/sections/green-card").then((mod) => mod.GreenCard)
);

const Location = dynamic(() =>
  import("@/components/sections/location").then((mod) => mod.Location)
);

const FAQ = dynamic(() =>
  import("@/components/sections/faq").then((mod) => mod.FAQ)
);

const Contact = dynamic(() =>
  import("@/components/sections/contact").then((mod) => mod.Contact)
);

export default function Home() {
  return (
    <>
      {/* Hero - Carga inmediata (above the fold) */}
      <Hero />

      {/* Secciones below-the-fold - Carga diferida */}
      <Promotions />
      <Testimonials />
      <Services />
      <GreenCard />
      <Location />
      <FAQ />
      <Contact />
    </>
  );
}
