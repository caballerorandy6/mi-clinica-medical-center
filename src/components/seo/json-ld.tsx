import { SITE_CONFIG, CONTACT_INFO, FAQS, SERVICES, SOCIAL_LINKS } from "@/lib/constants";

export function JsonLdMedicalClinic() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${SITE_CONFIG.baseUrl}/#medicalclinic`,
    name: SITE_CONFIG.name,
    alternateName: [
      "Clínica Hispana Nueva Salud Gessner",
      "Nueva Salud Gessner",
      "Clínica Hispana Houston",
    ],
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.baseUrl,
    telephone: CONTACT_INFO.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1914 Gessner Rd B",
      addressLocality: "Houston",
      addressRegion: "TX",
      postalCode: "77080",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.8067,
      longitude: -95.5567,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    image: `${SITE_CONFIG.baseUrl}/images/logo.webp`,
    logo: `${SITE_CONFIG.baseUrl}/images/logo.webp`,
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card",
    areaServed: {
      "@type": "City",
      name: "Houston",
      addressRegion: "TX",
      addressCountry: "US",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de la Clínica Hispana",
      itemListElement: SERVICES.slice(0, 10).map((service) => ({
        "@type": "MedicalProcedure",
        name: service.title,
        description: service.description,
      })),
    },
    availableLanguage: [
      {
        "@type": "Language",
        name: "Spanish",
        alternateName: "es",
      },
      {
        "@type": "Language",
        name: "English",
        alternateName: "en",
      },
    ],
    medicalSpecialty: [
      "Gynecology",
      "Pediatrics",
      "GeneralPractice",
      "DiagnosticLab",
    ],
    isAcceptingNewPatients: true,
    sameAs: [SOCIAL_LINKS.instagram, SOCIAL_LINKS.facebook],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function JsonLdFAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function JsonLdBreadcrumb() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: SITE_CONFIG.baseUrl,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
