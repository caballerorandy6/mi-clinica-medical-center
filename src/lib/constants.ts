import type {
  Specialty,
  Promotion,
  FAQ,
  ContactInfo,
  TrustBadge,
  GreenCardFeature,
  NavigationLink,
} from "@/types";

export const SITE_CONFIG = {
  name: "Mi Clínica Medical Center",
  tagline: "Clínica Hispana en Houston, TX",
  description:
    "Mi Clínica Medical Center es la clínica hispana de confianza en Houston. Atención médica profesional en español para toda la familia. Exámenes médicos para Green Card (I-693) autorizados por USCIS.",
  baseUrl: "https://miclinicamedicalcenter.com",
  locale: "es-MX",
} as const;

export const CONTACT_INFO: ContactInfo = {
  address: "1914 Gessner Rd B, Houston, TX 77080",
  phone: "(346) 226-5820",
  hours: "Lunes a Domingo: 9:00 AM - 9:00 PM",
  googleMapsUrl:
    "https://www.google.com/maps/place/1914+Gessner+Rd+B,+Houston,+TX+77080",
  whatsappNumber: "13462265820",
};

export const WHATSAPP_MESSAGE =
  "Hola, me gustaría agendar una cita en la clínica hispana Mi Clínica Medical Center.";

export const NAVIGATION_LINKS: NavigationLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#especialidades" },
  { label: "Green Card", href: "#green-card" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Preguntas", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export const TRUST_BADGES: TrustBadge[] = [
  {
    id: "hispana",
    title: "Clínica Hispana Familiar",
    description: "Atención médica para toda la comunidad",
    icon: "Users",
  },
  {
    id: "ginecologos",
    title: "Ginecólogos en Español",
    description: "Doctores que hablan tu idioma",
    icon: "MessageCircle",
  },
  {
    id: "gratuitas",
    title: "Opciones Gratuitas",
    description: "Precios accesibles y planes de pago",
    icon: "Shield",
  },
  {
    id: "domingos",
    title: "Abierto Domingos",
    description: "Lunes a Domingo 9AM-9PM",
    icon: "Clock",
  },
];

export const SPECIALTIES: Specialty[] = [
  {
    id: "ginecologia",
    title: "Ginecología",
    description:
      "Atención ginecológica completa en nuestra clínica hispana. Papanicolaou, control prenatal, planificación familiar y más servicios para la salud de la mujer en Houston.",
    icon: "Heart",
    keywords: ["clínica hispana", "ginecología Houston", "papanicolaou"],
    highlighted: true,
  },
  {
    id: "medicina-general",
    title: "Medicina General",
    description:
      "Consultas médicas generales en español en la clínica hispana de Houston. Diagnóstico, tratamiento y seguimiento de enfermedades comunes.",
    icon: "Stethoscope",
    keywords: ["clínica hispana", "médico hispano Houston"],
  },
  {
    id: "pediatria",
    title: "Pediatría",
    description:
      "Cuidado pediátrico de calidad en nuestra clínica hispana. Vacunas, exámenes de desarrollo y atención para niños de todas las edades.",
    icon: "Baby",
    keywords: ["clínica hispana", "pediatra Houston"],
  },
  {
    id: "laboratorio",
    title: "Laboratorio Clínico",
    description:
      "Análisis de laboratorio con resultados rápidos en la clínica hispana Mi Clínica Medical Center. Sangre, orina, glucosa y más.",
    icon: "TestTube",
    keywords: ["clínica hispana", "laboratorio Houston"],
  },
  {
    id: "ultrasonido",
    title: "Ultrasonido",
    description:
      "Servicios de ultrasonido diagnóstico en nuestra clínica hispana de Houston. Ultrasonido abdominal, pélvico, obstétrico y más.",
    icon: "Monitor",
    keywords: ["clínica hispana", "ultrasonido Houston"],
  },
  {
    id: "green-card",
    title: "Examen Green Card I-693",
    description:
      "Exámenes médicos para inmigración autorizados por USCIS en nuestra clínica hispana. Formulario I-693 completado por médicos certificados.",
    icon: "FileCheck",
    keywords: ["clínica hispana", "examen Green Card Houston", "I-693"],
  },
  {
    id: "urgencias",
    title: "Urgencias Menores",
    description:
      "Atención de urgencias menores sin cita en la clínica hispana. Heridas, infecciones, fiebre y más condiciones tratadas el mismo día.",
    icon: "AlertCircle",
    keywords: ["clínica hispana", "urgencias Houston"],
  },
  {
    id: "control-enfermedades",
    title: "Control de Enfermedades Crónicas",
    description:
      "Manejo de diabetes, hipertensión y otras condiciones crónicas en nuestra clínica hispana de Houston. Seguimiento médico personalizado.",
    icon: "Activity",
    keywords: ["clínica hispana", "diabetes Houston", "hipertensión"],
  },
  {
    id: "endocrinologia",
    title: "Endocrinología",
    description:
      "Especialistas en tiroides, diabetes y trastornos hormonales en nuestra clínica hispana de Houston. Diagnóstico y tratamiento en español.",
    icon: "Pill",
    keywords: ["clínica hispana", "endocrinólogo Houston", "tiroides"],
  },
  {
    id: "urologia",
    title: "Urología",
    description:
      "Atención urológica completa en la clínica hispana Mi Clínica Medical Center. Salud masculina, próstata, infecciones urinarias y más.",
    icon: "User",
    keywords: ["clínica hispana", "urólogo Houston", "próstata"],
  },
  {
    id: "dermatologia",
    title: "Dermatología",
    description:
      "Cuidado de la piel en nuestra clínica hispana. Acné, dermatitis, evaluación de lunares y tratamientos dermatológicos en español.",
    icon: "Sparkles",
    keywords: ["clínica hispana", "dermatólogo Houston", "piel"],
  },
  {
    id: "nutricion",
    title: "Nutrición",
    description:
      "Asesoría nutricional personalizada en la clínica hispana. Planes de alimentación, control de peso y nutrición para diabéticos.",
    icon: "Apple",
    keywords: ["clínica hispana", "nutricionista Houston", "dieta"],
  },
];

export const PROMOTIONS: Promotion[] = [
  {
    id: "consulta-general",
    title: "Consulta Médica General",
    badge: "Más Popular",
    description:
      "Consulta médica completa en español en nuestra clínica hispana de Houston.",
    price: "$50",
    includes: [
      "Evaluación médica completa",
      "Diagnóstico profesional",
      "Receta médica si es necesario",
      "Seguimiento incluido",
    ],
  },
  {
    id: "paquete-mujer",
    title: "Paquete Salud de la Mujer",
    badge: "Recomendado",
    description:
      "Examen ginecológico completo en la clínica hispana Mi Clínica Medical Center.",
    price: "$99",
    originalPrice: "$150",
    includes: [
      "Consulta ginecológica",
      "Papanicolaou",
      "Ultrasonido pélvico",
      "Resultados en 48 horas",
    ],
  },
  {
    id: "green-card-exam",
    title: "Examen Green Card I-693",
    badge: "USCIS Autorizado",
    description:
      "Examen médico de inmigración completo en nuestra clínica hispana autorizada por USCIS.",
    price: "$200",
    includes: [
      "Examen físico completo",
      "Análisis de sangre requeridos",
      "Formulario I-693 sellado",
      "Médico civil surgeon certificado",
    ],
  },
];

export const GREEN_CARD_FEATURES: GreenCardFeature[] = [
  { id: "1", text: "Médico Civil Surgeon certificado por USCIS", included: true },
  { id: "2", text: "Formulario I-693 completado y sellado", included: true },
  { id: "3", text: "Examen físico completo", included: true },
  { id: "4", text: "Análisis de sangre requeridos", included: true },
  { id: "5", text: "Historial de vacunas revisado", included: true },
  { id: "6", text: "Resultados en 3-5 días hábiles", included: true },
  { id: "7", text: "Atención 100% en español", included: true },
  { id: "8", text: "Sin cita previa necesaria", included: true },
];

export const FAQS: FAQ[] = [
  {
    question:
      "¿Mi Clínica Medical Center es una clínica hispana con atención en español?",
    answer:
      "Sí, Mi Clínica Medical Center es una clínica hispana ubicada en Houston, TX. Todo nuestro personal habla español y ofrecemos atención médica completamente en tu idioma para que te sientas cómodo y comprendido durante tu visita.",
  },
  {
    question: "¿Qué servicios ofrece esta clínica hispana en Houston?",
    answer:
      "Nuestra clínica hispana ofrece medicina general, ginecología, pediatría, laboratorio clínico, ultrasonido, exámenes de Green Card I-693, urgencias menores y control de enfermedades crónicas. Todos los servicios están disponibles en español.",
  },
  {
    question:
      "¿Necesito cita para visitar la clínica hispana Mi Clínica Medical Center?",
    answer:
      "Aceptamos pacientes con y sin cita en nuestra clínica hispana. Sin embargo, recomendamos agendar una cita para reducir el tiempo de espera. Puede llamar al (346) 226-5820 o enviar un mensaje por WhatsApp.",
  },
  {
    question: "¿Cuál es el horario de atención de la clínica hispana?",
    answer:
      "Nuestra clínica hispana en Houston está abierta de Lunes a Domingo de 9:00 AM a 9:00 PM. Ofrecemos horarios extendidos para que pueda visitarnos después del trabajo o los fines de semana.",
  },
  {
    question:
      "¿La clínica hispana está autorizada para exámenes de Green Card I-693?",
    answer:
      "Sí, Mi Clínica Medical Center es una clínica hispana autorizada por USCIS para realizar exámenes médicos de inmigración I-693. Contamos con un médico Civil Surgeon certificado que completa y sella el formulario oficial.",
  },
  {
    question:
      "¿Cuánto cuesta una consulta médica en la clínica hispana Mi Clínica Medical Center?",
    answer:
      "Las consultas médicas generales en nuestra clínica hispana comienzan desde $50. Ofrecemos precios accesibles y planes de pago para que toda la comunidad hispana de Houston tenga acceso a atención médica de calidad.",
  },
  {
    question: "¿La clínica hispana acepta seguro médico?",
    answer:
      "Nuestra clínica hispana trabaja con varios seguros médicos. Le recomendamos llamarnos al (346) 226-5820 para verificar si aceptamos su seguro. También ofrecemos precios especiales para pacientes sin seguro.",
  },
  {
    question: "¿Dónde está ubicada la clínica hispana Mi Clínica Medical Center?",
    answer:
      "Nuestra clínica hispana está ubicada en 1914 Gessner Rd B, Houston, TX 77080. Estamos en una ubicación conveniente con amplio estacionamiento gratuito para nuestros pacientes.",
  },
];

export const HERO_CONTENT = {
  title: "Clínica Hispana Cerca de Ti en Houston | Ginecología y Servicios Médicos en Español",
  subtitle: "Tu Clínica Hispana Familiar con Ginecólogos que Hablan Español",
  description:
    "Somos una clínica hispana cerca de ti en Houston. Nuestra clínica hispana familiar ofrece atención médica completa en español: ginecólogos que hablan español, exámenes médicos de inmigración, ultrasonidos de embarazo, urología, dermatología y más. Como clínica hispana comunitaria, ofrecemos opciones económicas y clínicas gratuitas. Abierto los domingos.",
  cta: "Agendar Cita Ahora",
  ctaSecondary: "Ver Servicios",
};

export const LOCATION_FEATURES = [
  "Estacionamiento gratuito",
  "Accesible para sillas de ruedas",
  "Cerca de transporte público",
  "Área segura y bien iluminada",
];

export const SEO_KEYWORDS = [
  "clínica hispana Houston",
  "clínica hispana en Houston TX",
  "médico hispano Houston",
  "doctor que habla español Houston",
  "clínica hispana cerca de mí",
  "examen Green Card Houston",
  "I-693 Houston",
  "ginecología en español Houston",
];
