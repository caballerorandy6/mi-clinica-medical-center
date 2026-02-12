import type { Metadata } from "next";
import Image from "next/image";
import { ServicesPageContent } from "@/components/services/services-page-content";
import { JsonLdBreadcrumb } from "@/components/seo/json-ld";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Servicios Médicos en Español | Clínica Hispana Nueva Salud Gessner Houston",
  description:
    "18+ servicios médicos en español en Houston TX. Exámenes I-693 inmigración, ginecología, ultrasonido, laboratorio. Abiertos 7 días. Sin cita previa. +1 (346) 226-5820",
  keywords: [
    "servicios medicos houston",
    "clinica hispana servicios",
    "examen inmigracion houston",
    "ginecologia en español houston",
    "ultrasonido houston",
    "laboratorio clinico houston",
  ],
  openGraph: {
    title: "Servicios Médicos | Clínica Hispana Nueva Salud Gessner",
    description:
      "18+ servicios médicos en español. Exámenes I-693, ginecología, ultrasonido, laboratorio. Abiertos 7 días.",
    url: "https://clinicagessner.com/servicios",
    siteName: "Clínica Hispana Nueva Salud Gessner",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "https://clinicagessner.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Servicios Médicos - Clínica Hispana Nueva Salud Gessner Houston",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios Médicos | Clínica Hispana Nueva Salud Gessner",
    description:
      "18+ servicios médicos en español en Houston. Exámenes I-693, ginecología, ultrasonido, laboratorio.",
    images: ["https://clinicagessner.com/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://clinicagessner.com/servicios",
  },
};

export default function ServiciosPage() {
  return (
    <>
      {/* Breadcrumb Schema for SEO */}
      <JsonLdBreadcrumb
        items={[
          { name: "Servicios", url: `${SITE_CONFIG.baseUrl}/servicios` },
        ]}
      />
      <main className="min-h-screen">
      {/* Hero Section - Server Component (static) */}
      <section className="relative text-white pt-28 sm:pt-32 lg:pt-40 pb-20 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/services/services-hero.webp"
          alt="servicios medicos clinica hispana houston"
          fill
          className="object-cover object-center -z-20"
          priority
          quality={85}
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 -z-10" />

        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="size-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white/90">
                Servicios Médicos Disponibles
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Servicios de la{" "}
              <span className="text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:0_0_30px_rgba(34,197,94,0.5)]">
                Clínica Hispana
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Atención médica profesional 100% en español. Encuentra el servicio
              que necesitas en nuestra clínica hispana de Houston.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Content - Client Component */}
      <ServicesPageContent />
    </main>
    </>
  );
}
