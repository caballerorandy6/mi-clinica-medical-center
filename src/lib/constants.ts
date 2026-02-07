import type {
  Specialty,
  Service,
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
  phone: "+1 (346) 226-5820",
  hours: "Lunes a Domingo: 9:00 AM - 9:00 PM",
  googleMapsUrl:
    "https://www.google.com/maps/place/Mi+Clinica+Medical+Center/@29.8066856,-95.5467939,17z/data=!3m1!4b1!4m6!3m5!1s0x8640c4de999b36b5:0xdc9d14200d006777!8m2!3d29.806681!4d-95.5442136!16s%2Fg%2F11c58dkqrc",
  whatsappNumber: "13462265820",
};

export const WHATSAPP_MESSAGE =
  "Hola, me gustaría agendar una cita en la clínica hispana Mi Clínica Medical Center.";

export const NAVIGATION_LINKS: NavigationLink[] = [
  { label: "Servicios", href: "#especialidades" },
  { label: "Green Card", href: "#green-card" },
  { label: "Contacto", href: "#contacto" },
];

export const TRUST_BADGES: TrustBadge[] = [
  {
    id: "sin-seguro",
    title: "Sin Seguro Bienvenidos",
    description: "Atención para todos sin importar seguro",
    icon: "Users",
  },
  {
    id: "precios",
    title: "Precios Accesibles",
    description: "Opciones económicas para la comunidad",
    icon: "Shield",
  },
  {
    id: "rating",
    title: "5.0 ★ Google Reviews",
    description: "Calificación perfecta de pacientes",
    icon: "Star",
  },
  {
    id: "mismo-dia",
    title: "Citas Mismo Día",
    description: "Agenda hoy, te atendemos hoy",
    icon: "Clock",
  },
];

export const SPECIALTIES: Specialty[] = [
  {
    id: "ginecologia",
    title: "Ginecología",
    description:
      "Ginecólogos que hablan español en nuestra clínica hispana de Houston. Atención integral para la salud de la mujer con doctores certificados.",
    icon: "Heart",
    keywords: ["clínica hispana", "ginecología Houston", "ginecólogo español"],
    highlighted: true,
  },
  {
    id: "chequeo-inmigracion",
    title: "Examen Green Card I-693",
    description:
      "Exámenes médicos para inmigración autorizados por USCIS en nuestra clínica hispana. Formulario I-693 completado por médicos Civil Surgeon certificados.",
    icon: "FileCheck",
    keywords: ["clínica hispana", "examen Green Card Houston", "I-693"],
    highlighted: true,
  },
  {
    id: "papanicolaou",
    title: "Papanicolaou",
    description:
      "Examen de Papanicolaou para detección temprana de cáncer cervical. Prevención vital para la salud de la mujer en la clínica hispana.",
    icon: "Heart",
    keywords: ["clínica hispana", "papanicolaou Houston"],
    highlighted: true,
  },
  {
    id: "ultrasonidos",
    title: "Ultrasonidos",
    description:
      "Ultrasonidos de embarazo, abdominales, pélvicos y más. Diagnóstico por imagen seguro y confiable en nuestra clínica hispana.",
    icon: "Monitor",
    keywords: ["clínica hispana", "ultrasonido Houston"],
  },
  {
    id: "diabetes",
    title: "Diabetes",
    description:
      "Control y tratamiento de diabetes en la clínica hispana. Monitoreo de glucosa, hemoglobina A1C y orientación nutricional.",
    icon: "Activity",
    keywords: ["clínica hispana", "diabetes Houston"],
    highlighted: true,
  },
  {
    id: "examenes-embarazo",
    title: "Exámenes de Embarazo",
    description:
      "Pruebas de embarazo con resultados rápidos y confidenciales. Orientación y cuidado prenatal en la clínica hispana.",
    icon: "Baby",
    keywords: ["clínica hispana", "embarazo Houston"],
  },
  {
    id: "chequeos-salud",
    title: "Chequeos de Salud",
    description:
      "Exámenes físicos completos para detectar condiciones a tiempo. Tu bienestar es nuestra prioridad en la clínica hispana.",
    icon: "Stethoscope",
    keywords: ["clínica hispana", "chequeo médico Houston"],
  },
  {
    id: "presion-arterial",
    title: "Presión Arterial",
    description:
      "Control de presión arterial alta en la clínica hispana. Prevención de enfermedades cardíacas y accidentes cerebrovasculares.",
    icon: "Heart",
    keywords: ["clínica hispana", "hipertensión Houston"],
  },
  {
    id: "infecciones-urinarias",
    title: "Infecciones Urinarias",
    description:
      "Diagnóstico y tratamiento de infecciones urinarias. Análisis de orina y tratamiento antibiótico efectivo en la clínica hispana.",
    icon: "Pill",
    keywords: ["clínica hispana", "infección urinaria Houston"],
  },
  {
    id: "electrocardiogramas",
    title: "Electrocardiogramas",
    description:
      "Electrocardiograma (EKG) para evaluar la salud de tu corazón. Detección de arritmias y condiciones cardíacas.",
    icon: "Heart",
    keywords: ["clínica hispana", "EKG Houston"],
  },
  {
    id: "fisicos-escolares",
    title: "Físicos Escolares",
    description:
      "Exámenes físicos para escuela y deportes. Formularios oficiales completados el mismo día en la clínica hispana.",
    icon: "FileCheck",
    keywords: ["clínica hispana", "físico escolar Houston"],
  },
  {
    id: "planificacion-familiar",
    title: "Planificación Familiar",
    description:
      "Asesoría sobre métodos anticonceptivos. Anticonceptivos orales, inyecciones, DIU e implantes en la clínica hispana.",
    icon: "Heart",
    keywords: ["clínica hispana", "planificación familiar Houston"],
  },
  {
    id: "sutura-heridas",
    title: "Sutura de Heridas",
    description:
      "Atención médica rápida para cortes y laceraciones. Sutura profesional con anestesia local en la clínica hispana.",
    icon: "AlertCircle",
    keywords: ["clínica hispana", "sutura Houston"],
  },
];

// SERVICES - 27 servicios basados en clinicahispanaairline.com (excluyendo vacunas)
export const SERVICES: Service[] = [
  // ============================================
  // ENFERMEDADES CRÓNICAS Y TRATAMIENTOS (7)
  // ============================================
  {
    id: "alergias",
    slug: "alergias",
    title: "Alergias",
    shortTitle: "Alergias",
    description:
      "Control de alergias en nuestra clínica hispana de Houston. Diagnóstico y tratamiento para respirar con libertad.",
    longDescription:
      "¿Sientes que las estaciones del año te afectan? En Mi Clínica Medical Center ofrecemos diagnóstico y tratamiento integral para todo tipo de alergias. Nuestros médicos hispanos te ayudan a identificar los alérgenos y controlar tus síntomas.",
    icon: "Activity",
    category: "especialidad",
    keywords: ["alergias Houston", "alergia clínica hispana", "rinitis"],
    features: [
      "Diagnóstico de alergias",
      "Tratamiento personalizado",
      "Control de síntomas",
      "Alergias estacionales",
      "Alergias alimentarias",
      "Seguimiento médico",
    ],
    order: 1,
  },
  {
    id: "artritis",
    slug: "artritis",
    title: "Artritis",
    shortTitle: "Artritis",
    description:
      "Tratamiento de artritis en la clínica hispana. Recupera tu movilidad y vive sin dolor.",
    longDescription:
      "¿Sientes que el dolor articular limita tu vida diaria? En Mi Clínica Medical Center ofrecemos tratamiento especializado para artritis y enfermedades reumáticas. Nuestro objetivo es ayudarte a recuperar tu movilidad y calidad de vida.",
    icon: "User",
    category: "especialidad",
    keywords: ["artritis Houston", "dolor articulaciones clínica hispana"],
    features: [
      "Diagnóstico de artritis",
      "Tratamiento del dolor",
      "Terapia antiinflamatoria",
      "Control de la inflamación",
      "Orientación de ejercicios",
      "Seguimiento personalizado",
    ],
    order: 2,
  },
  {
    id: "diabetes",
    slug: "diabetes",
    title: "Diabetes",
    shortTitle: "Diabetes",
    description:
      "Control y tratamiento de diabetes en la clínica hispana de Houston. Manejo integral de glucosa.",
    longDescription:
      "La diabetes requiere un manejo cuidadoso y constante. En Mi Clínica Medical Center ofrecemos control integral de diabetes con monitoreo de glucosa, ajuste de medicamentos y orientación nutricional en español.",
    icon: "Activity",
    category: "especialidad",
    keywords: ["diabetes Houston", "glucosa clínica hispana", "azúcar en sangre"],
    features: [
      "Control de glucosa",
      "Hemoglobina A1C",
      "Ajuste de medicamentos",
      "Orientación nutricional",
      "Prevención de complicaciones",
      "Seguimiento mensual",
    ],
    highlighted: true,
    order: 3,
  },
  {
    id: "presion-arterial",
    slug: "presion-arterial",
    title: "Presión Arterial",
    shortTitle: "Presión",
    description:
      "Control de presión arterial alta en la clínica hispana. Prevención de enfermedades cardíacas.",
    longDescription:
      "La presión arterial alta puede causar enfermedades cardíacas y accidentes cerebrovasculares. En Mi Clínica Medical Center monitoreamos y controlamos tu presión arterial con tratamiento personalizado.",
    icon: "Heart",
    category: "especialidad",
    keywords: ["presión arterial Houston", "hipertensión clínica hispana"],
    features: [
      "Monitoreo de presión",
      "Diagnóstico de hipertensión",
      "Tratamiento médico",
      "Ajuste de medicamentos",
      "Orientación de estilo de vida",
      "Control regular",
    ],
    order: 4,
  },
  {
    id: "colesterol-trigliceridos",
    slug: "colesterol-trigliceridos",
    title: "Colesterol y Triglicéridos",
    shortTitle: "Colesterol",
    description:
      "Control de colesterol y triglicéridos en la clínica hispana de Houston.",
    longDescription:
      "El colesterol alto es un factor de riesgo para enfermedades del corazón. En Mi Clínica Medical Center realizamos análisis de perfil lipídico y ofrecemos tratamiento para mantener tus niveles saludables.",
    icon: "TestTube",
    category: "especialidad",
    keywords: ["colesterol Houston", "triglicéridos clínica hispana"],
    features: [
      "Perfil lipídico completo",
      "Control de colesterol LDL",
      "Control de triglicéridos",
      "Tratamiento médico",
      "Orientación dietética",
      "Seguimiento regular",
    ],
    order: 5,
  },
  {
    id: "tiroides",
    slug: "tiroides",
    title: "Tiroides",
    shortTitle: "Tiroides",
    description:
      "Control de tiroides en la clínica hispana. Equilibra tu energía y tu salud.",
    longDescription:
      "¿Te sientes cansado sin razón aparente? Los problemas de tiroides pueden afectar tu energía y metabolismo. En Mi Clínica Medical Center diagnosticamos y tratamos trastornos de la tiroides.",
    icon: "Pill",
    category: "especialidad",
    keywords: ["tiroides Houston", "hipotiroidismo clínica hispana"],
    features: [
      "Pruebas de tiroides",
      "Diagnóstico TSH, T3, T4",
      "Tratamiento de hipotiroidismo",
      "Tratamiento de hipertiroidismo",
      "Ajuste de medicamentos",
      "Seguimiento regular",
    ],
    order: 6,
  },
  {
    id: "tratamiento-anemias",
    slug: "tratamiento-anemias",
    title: "Tratamiento de Anemias",
    shortTitle: "Anemias",
    description:
      "Tratamiento de anemias en la clínica hispana. Recupera tu fuerza y vitalidad.",
    longDescription:
      "¿Te sientes cansado todo el tiempo? La anemia puede ser la causa. En Mi Clínica Medical Center diagnosticamos el tipo de anemia y ofrecemos tratamiento para recuperar tu energía.",
    icon: "TestTube",
    category: "especialidad",
    keywords: ["anemia Houston", "hierro bajo clínica hispana"],
    features: [
      "Diagnóstico de anemia",
      "Análisis de sangre completo",
      "Suplementos de hierro",
      "Vitamina B12",
      "Tratamiento personalizado",
      "Seguimiento de niveles",
    ],
    order: 7,
  },
  // ============================================
  // SALUD DE LA MUJER (5)
  // ============================================
  {
    id: "papanicolaou",
    slug: "papanicolaou",
    title: "Papanicolaou",
    shortTitle: "Papanicolaou",
    description:
      "Papanicolaou en la clínica hispana de Houston. Prevención vital para la salud de la mujer.",
    longDescription:
      "El Papanicolaou es un examen esencial para la detección temprana de cáncer cervical. En Mi Clínica Medical Center realizamos este procedimiento en un ambiente cómodo y confidencial.",
    icon: "FileCheck",
    category: "mujer",
    keywords: ["papanicolaou Houston", "pap smear clínica hispana"],
    features: [
      "Procedimiento rápido",
      "Detección temprana",
      "Resultados en 48-72 horas",
      "Ambiente privado",
      "Orientación médica",
      "Seguimiento si es necesario",
    ],
    highlighted: true,
    order: 8,
  },
  {
    id: "planificacion-familiar",
    slug: "planificacion-familiar",
    title: "Planificación Familiar",
    shortTitle: "Planificación",
    description:
      "Planificación familiar en la clínica hispana. Tu futuro, tu decisión.",
    longDescription:
      "En Mi Clínica Medical Center ofrecemos asesoría completa sobre métodos anticonceptivos. Nuestros especialistas te orientan sobre las mejores opciones para tu estilo de vida.",
    icon: "Heart",
    category: "mujer",
    keywords: ["planificación familiar Houston", "anticonceptivos clínica hispana"],
    features: [
      "Asesoría personalizada",
      "Anticonceptivos orales",
      "Inyecciones anticonceptivas",
      "DIU",
      "Implantes hormonales",
      "Seguimiento médico",
    ],
    order: 9,
  },
  {
    id: "examenes-embarazo",
    slug: "examenes-embarazo",
    title: "Exámenes de Embarazo",
    shortTitle: "Embarazo",
    description:
      "Exámenes de embarazo en la clínica hispana. Resultados rápidos y confidenciales.",
    longDescription:
      "En Mi Clínica Medical Center realizamos pruebas de embarazo con resultados rápidos y confidenciales. Ofrecemos orientación y seguimiento para tu cuidado prenatal.",
    icon: "Baby",
    category: "mujer",
    keywords: ["prueba embarazo Houston", "test embarazo clínica hispana"],
    features: [
      "Prueba de embarazo",
      "Resultados inmediatos",
      "Confirmación por laboratorio",
      "Orientación médica",
      "Cuidado prenatal",
      "Atención confidencial",
    ],
    highlighted: true,
    order: 10,
  },
  {
    id: "infecciones-vaginales",
    slug: "infecciones-vaginales",
    title: "Infecciones Vaginales",
    shortTitle: "Vaginales",
    description:
      "Tratamiento de infecciones vaginales en la clínica hispana. Cuidado especializado y confidencial.",
    longDescription:
      "En Mi Clínica Medical Center ofrecemos diagnóstico y tratamiento de infecciones vaginales en un ambiente de confianza. Nuestro equipo médico femenino está disponible para atenderte.",
    icon: "Heart",
    category: "mujer",
    keywords: ["infección vaginal Houston", "candidiasis clínica hispana"],
    features: [
      "Diagnóstico preciso",
      "Tratamiento efectivo",
      "Candidiasis",
      "Vaginosis bacteriana",
      "Atención confidencial",
      "Seguimiento médico",
    ],
    order: 11,
  },
  {
    id: "extraccion-implante-hormonal",
    slug: "extraccion-implante-hormonal",
    title: "Extracción de Implante Hormonal",
    shortTitle: "Implante",
    description:
      "Extracción de implante hormonal en la clínica hispana. Procedimiento rápido y seguro.",
    longDescription:
      "En Mi Clínica Medical Center realizamos la extracción de implantes hormonales anticonceptivos de forma segura y profesional. Procedimiento rápido con mínimas molestias.",
    icon: "Pill",
    category: "mujer",
    keywords: ["extracción implante Houston", "Nexplanon clínica hispana"],
    features: [
      "Procedimiento seguro",
      "Personal capacitado",
      "Mínimas molestias",
      "Cuidados post-extracción",
      "Opciones anticonceptivas",
      "Seguimiento médico",
    ],
    order: 12,
  },
  // ============================================
  // DIAGNÓSTICO Y LABORATORIO (4)
  // ============================================
  {
    id: "ultrasonidos",
    slug: "ultrasonidos",
    title: "Ultrasonidos",
    shortTitle: "Ultrasonidos",
    description:
      "Ultrasonidos en la clínica hispana de Houston. Diagnóstico por imagen seguro y confiable.",
    longDescription:
      "En Mi Clínica Medical Center ofrecemos servicios de ultrasonido para diagnóstico de diversas condiciones. Ultrasonidos abdominales, pélvicos, de embarazo y más.",
    icon: "Monitor",
    category: "diagnostico",
    keywords: ["ultrasonido Houston", "ecografía clínica hispana"],
    features: [
      "Ultrasonido abdominal",
      "Ultrasonido pélvico",
      "Ultrasonido de embarazo",
      "Ultrasonido renal",
      "Resultados inmediatos",
      "Interpretación médica",
    ],
    highlighted: true,
    order: 13,
  },
  {
    id: "electrocardiogramas",
    slug: "electrocardiogramas",
    title: "Electrocardiogramas",
    shortTitle: "EKG",
    description:
      "Electrocardiograma (EKG) en la clínica hispana. Cuida el ritmo de tu corazón.",
    longDescription:
      "En Mi Clínica Medical Center realizamos electrocardiogramas para evaluar la salud de tu corazón. Diagnóstico rápido de arritmias y otras condiciones cardíacas.",
    icon: "Heart",
    category: "diagnostico",
    keywords: ["electrocardiograma Houston", "EKG clínica hispana"],
    features: [
      "EKG de 12 derivaciones",
      "Resultados inmediatos",
      "Detección de arritmias",
      "Evaluación cardíaca",
      "Interpretación médica",
      "Referido si es necesario",
    ],
    order: 14,
  },
  {
    id: "cultivos",
    slug: "cultivos",
    title: "Cultivos",
    shortTitle: "Cultivos",
    description:
      "Servicio de cultivos y pruebas microbiológicas en la clínica hispana de Houston.",
    longDescription:
      "En Mi Clínica Medical Center realizamos cultivos para identificar infecciones bacterianas y determinar el tratamiento antibiótico más efectivo.",
    icon: "TestTube",
    category: "diagnostico",
    keywords: ["cultivo Houston", "prueba microbiológica clínica hispana"],
    features: [
      "Cultivo de garganta",
      "Cultivo de orina",
      "Cultivo de heridas",
      "Antibiograma",
      "Resultados precisos",
      "Tratamiento dirigido",
    ],
    order: 15,
  },
  {
    id: "covid-19",
    slug: "covid-19",
    title: "COVID-19",
    shortTitle: "COVID-19",
    description:
      "Pruebas y cuidado de COVID-19 en la clínica hispana de Houston.",
    longDescription:
      "En Mi Clínica Medical Center ofrecemos pruebas de COVID-19 rápidas y PCR. Resultados confiables para diagnóstico, viajes y trabajo.",
    icon: "TestTube",
    category: "diagnostico",
    keywords: ["prueba COVID Houston", "test coronavirus clínica hispana"],
    features: [
      "Prueba rápida de antígenos",
      "Prueba PCR",
      "Resultados rápidos",
      "Certificados para viaje",
      "Tratamiento si es necesario",
      "Orientación médica",
    ],
    order: 16,
  },
  // ============================================
  // INFECCIONES Y URGENCIAS (6)
  // ============================================
  {
    id: "infecciones-respiratorias",
    slug: "infecciones-respiratorias",
    title: "Infecciones Respiratorias",
    shortTitle: "Respiratorias",
    description:
      "Tratamiento de infecciones respiratorias en la clínica hispana de Houston.",
    longDescription:
      "En Mi Clínica Medical Center tratamos infecciones respiratorias como gripa, bronquitis, sinusitis y neumonía. Diagnóstico rápido y tratamiento efectivo.",
    icon: "Activity",
    category: "otro",
    keywords: ["gripa Houston", "bronquitis clínica hispana"],
    features: [
      "Diagnóstico rápido",
      "Tratamiento de gripa",
      "Bronquitis",
      "Sinusitis",
      "Faringitis",
      "Medicamentos recetados",
    ],
    order: 17,
  },
  {
    id: "infecciones-urinarias",
    slug: "infecciones-urinarias",
    title: "Infecciones Urinarias",
    shortTitle: "Urinarias",
    description:
      "Tratamiento de infecciones urinarias en la clínica hispana. Diagnóstico preciso y alivio rápido.",
    longDescription:
      "En Mi Clínica Medical Center diagnosticamos y tratamos infecciones del tracto urinario con análisis de orina y tratamiento antibiótico efectivo.",
    icon: "Pill",
    category: "otro",
    keywords: ["infección urinaria Houston", "cistitis clínica hispana"],
    features: [
      "Análisis de orina",
      "Diagnóstico rápido",
      "Tratamiento antibiótico",
      "Alivio de síntomas",
      "Prevención de recurrencia",
      "Seguimiento médico",
    ],
    order: 18,
  },
  {
    id: "enfermedades-transmision-sexual",
    slug: "enfermedades-transmision-sexual",
    title: "Enfermedades de Transmisión Sexual",
    shortTitle: "ETS",
    description:
      "Pruebas y tratamiento de ETS en la clínica hispana. Privacidad y cuidado para tu salud.",
    longDescription:
      "En Mi Clínica Medical Center realizamos pruebas confidenciales de enfermedades de transmisión sexual. Diagnóstico y tratamiento en un ambiente de respeto y privacidad.",
    icon: "TestTube",
    category: "otro",
    keywords: ["prueba ETS Houston", "VIH clínica hispana"],
    features: [
      "Pruebas confidenciales",
      "VIH",
      "Sífilis",
      "Clamidia y gonorrea",
      "Herpes",
      "Tratamiento disponible",
    ],
    order: 19,
  },
  {
    id: "cura-heridas",
    slug: "cura-heridas",
    title: "Cura de Heridas",
    shortTitle: "Heridas",
    description:
      "Cuidado y cura de heridas en la clínica hispana de Houston. Sanación profesional y segura.",
    longDescription:
      "En Mi Clínica Medical Center ofrecemos cuidado profesional de heridas. Limpieza, vendaje y seguimiento para una sanación óptima.",
    icon: "AlertCircle",
    category: "otro",
    keywords: ["cura heridas Houston", "curación clínica hispana"],
    features: [
      "Limpieza de heridas",
      "Vendajes profesionales",
      "Prevención de infección",
      "Cuidado de quemaduras",
      "Seguimiento de sanación",
      "Orientación de cuidados",
    ],
    order: 20,
  },
  {
    id: "sutura-heridas",
    slug: "sutura-heridas",
    title: "Sutura de Heridas",
    shortTitle: "Suturas",
    description:
      "Sutura de heridas en la clínica hispana de Houston. Atención médica rápida para cortes.",
    longDescription:
      "En Mi Clínica Medical Center realizamos suturas para cortes y laceraciones que requieren cierre. Procedimiento profesional con anestesia local.",
    icon: "AlertCircle",
    category: "otro",
    keywords: ["sutura Houston", "puntos clínica hispana"],
    features: [
      "Evaluación de heridas",
      "Anestesia local",
      "Sutura profesional",
      "Cuidados post-sutura",
      "Retiro de puntos",
      "Seguimiento de cicatrización",
    ],
    order: 21,
  },
  {
    id: "extraccion-unas",
    slug: "extraccion-unas",
    title: "Extracción de Uñas",
    shortTitle: "Uñas",
    description:
      "Extracción de uñas en la clínica hispana de Houston. Alivio inmediato para dolor e infección.",
    longDescription:
      "¿Tienes una uña enterrada o infectada? En Mi Clínica Medical Center realizamos extracción de uñas de forma segura para aliviar el dolor y prevenir complicaciones.",
    icon: "Pill",
    category: "otro",
    keywords: ["uña enterrada Houston", "extracción uña clínica hispana"],
    features: [
      "Evaluación de la uña",
      "Anestesia local",
      "Extracción profesional",
      "Tratamiento de infección",
      "Cuidados post-procedimiento",
      "Seguimiento médico",
    ],
    order: 22,
  },
  // ============================================
  // SERVICIOS ESPECIALES (5)
  // ============================================
  {
    id: "chequeo-inmigracion",
    slug: "chequeo-inmigracion",
    title: "Chequeo de Inmigración",
    shortTitle: "Green Card",
    description:
      "Examen médico de inmigración (I-693) en la clínica hispana de Houston. Médico Civil Surgeon certificado.",
    longDescription:
      "En Mi Clínica Medical Center realizamos exámenes médicos de inmigración autorizados por USCIS. Nuestro médico Civil Surgeon certificado completa el formulario I-693 en español.",
    icon: "FileCheck",
    category: "especial",
    keywords: ["examen Green Card Houston", "I-693 clínica hispana", "civil surgeon"],
    features: [
      "Médico Civil Surgeon",
      "Formulario I-693",
      "Examen físico completo",
      "Análisis de sangre",
      "Revisión de vacunas",
      "Resultados en 3-5 días",
    ],
    highlighted: true,
    order: 23,
  },
  {
    id: "chequeos-salud",
    slug: "chequeos-salud",
    title: "Chequeos de Salud",
    shortTitle: "Chequeos",
    description:
      "Chequeos de salud y exámenes físicos en la clínica hispana de Houston.",
    longDescription:
      "En Mi Clínica Medical Center realizamos chequeos de salud completos para detectar condiciones a tiempo. Tu bienestar es nuestra prioridad.",
    icon: "Stethoscope",
    category: "especial",
    keywords: ["chequeo médico Houston", "examen físico clínica hispana"],
    features: [
      "Examen físico completo",
      "Análisis de sangre",
      "Evaluación de presión",
      "Control de peso",
      "Detección temprana",
      "Recomendaciones de salud",
    ],
    order: 24,
  },
  {
    id: "examen-dot",
    slug: "examen-dot",
    title: "Examen de DOT",
    shortTitle: "DOT",
    description:
      "Examen médico de DOT en la clínica hispana de Houston. Mantén tu licencia comercial al día.",
    longDescription:
      "En Mi Clínica Medical Center realizamos exámenes médicos DOT para conductores comerciales. Certificación requerida para licencias CDL.",
    icon: "FileCheck",
    category: "especial",
    keywords: ["examen DOT Houston", "físico CDL clínica hispana"],
    features: [
      "Examen DOT completo",
      "Certificación médica",
      "Evaluación de vista",
      "Evaluación de audición",
      "Análisis de orina",
      "Tarjeta médica DOT",
    ],
    order: 25,
  },
  {
    id: "fisicos-escolares",
    slug: "fisicos-escolares",
    title: "Físicos Escolares",
    shortTitle: "Escolares",
    description:
      "Físicos escolares y deportivos en la clínica hispana de Houston. Prepara a tus hijos para el éxito.",
    longDescription:
      "En Mi Clínica Medical Center realizamos exámenes físicos para escuela y deportes. Formularios oficiales completados el mismo día.",
    icon: "FileCheck",
    category: "especial",
    keywords: ["físico escolar Houston", "examen deportivo clínica hispana"],
    features: [
      "Examen físico completo",
      "Formularios escolares",
      "Certificado deportivo",
      "Evaluación de vista",
      "Evaluación de audición",
      "Resultados el mismo día",
    ],
    order: 26,
  },
  {
    id: "farmacia",
    slug: "farmacia",
    title: "Farmacia",
    shortTitle: "Farmacia",
    description:
      "Servicio de farmacia en la clínica hispana de Houston. Medicamentos rápidos y seguros.",
    longDescription:
      "Contamos con servicio de farmacia para que recibas tus medicamentos de manera rápida, segura y conveniente. Todo en un solo lugar.",
    icon: "Pill",
    category: "especial",
    keywords: ["farmacia Houston", "medicamentos clínica hispana"],
    features: [
      "Medicamentos recetados",
      "Atención en español",
      "Precios accesibles",
      "Medicamentos genéricos",
      "Surtido rápido",
      "Orientación farmacéutica",
    ],
    order: 27,
  },
];

// Helper function to get service by slug
export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

// Helper function to get highlighted services
export function getHighlightedServices(): Service[] {
  return SERVICES.filter((service) => service.highlighted);
}

// Helper function to get services by category
export function getServicesByCategory(
  category: Service["category"]
): Service[] {
  return SERVICES.filter((service) => service.category === category);
}

export const PROMOTIONS: Promotion[] = [
  {
    id: "ginecologia",
    title: "Consulta con Ginecólogo que Habla Español",
    badge: "¡Más Popular!",
    description:
      "En nuestra clínica hispana, ginecólogos certificados que hablan español te atienden con profesionalismo y calidez.",
    price: "$75",
    originalPrice: "$120",
    includes: [
      "Consulta ginecológica completa",
      "Evaluación de salud femenina",
      "Orientación en español",
      "Seguimiento personalizado",
    ],
  },
  {
    id: "inmigracion",
    title: "Exámenes Médicos de Inmigración",
    badge: "Paquete Completo",
    description:
      "Clínica hispana autorizada para exámenes de inmigración. Todo el proceso en español con médico Civil Surgeon certificado.",
    price: "$200",
    includes: [
      "Examen físico completo",
      "Análisis de sangre requeridos",
      "Formulario I-693 sellado",
      "Médico Civil Surgeon certificado",
    ],
  },
  {
    id: "ultrasonido-embarazo",
    title: "Ultrasonido de Embarazo",
    badge: "Oferta Especial",
    description:
      "En nuestra clínica hispana familiar, ultrasonidos de embarazo con tecnología moderna y atención en español.",
    price: "$85",
    originalPrice: "$130",
    includes: [
      "Ultrasonido obstétrico",
      "Imágenes para llevar",
      "Interpretación médica",
      "Seguimiento prenatal",
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
