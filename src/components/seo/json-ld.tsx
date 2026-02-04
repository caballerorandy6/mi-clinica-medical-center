import { SITE_CONFIG, CONTACT_INFO, FAQS, SPECIALTIES } from "@/lib/constants";

export function JsonLdMedicalClinic() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    additionalType: "Hispanic Health Clinic",
    name: SITE_CONFIG.name,
    alternateName: "Clínica Hispana Mi Clínica Medical Center",
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
    image: `${SITE_CONFIG.baseUrl}/images/logo.png`,
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
      itemListElement: SPECIALTIES.map((specialty) => ({
        "@type": "MedicalProcedure",
        name: specialty.title,
        description: specialty.description,
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
      "GeneralPractice",
      "Gynecology",
      "Pediatrics",
      "DiagnosticLab",
    ],
    isAcceptingNewPatients: true,
    sameAs: ["https://instagram.com/miclinicamedicalcenter"],
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

export function JsonLdLocalBusiness() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": SITE_CONFIG.baseUrl,
    name: SITE_CONFIG.name,
    alternateName: "Clínica Hispana Houston",
    description:
      "Clínica hispana de confianza en Houston TX. Atención médica profesional en español. Exámenes Green Card I-693 autorizados por USCIS.",
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
    openingHoursSpecification: {
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
    image: `${SITE_CONFIG.baseUrl}/images/logo.png`,
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
