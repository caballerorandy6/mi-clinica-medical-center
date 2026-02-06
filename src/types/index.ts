export interface Specialty {
  id: string;
  title: string;
  description: string;
  icon: string;
  keywords: string[];
  highlighted?: boolean;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: string;
  category: "especialidad" | "diagnostico" | "mujer" | "especial" | "otro";
  keywords: string[];
  features: string[];
  highlighted?: boolean;
  order: number;
}

export interface Promotion {
  id: string;
  title: string;
  badge: string;
  description: string;
  price?: string;
  originalPrice?: string;
  includes: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  quote: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  hours: string;
  googleMapsUrl: string;
  whatsappNumber: string;
}

export interface TrustBadge {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GreenCardFeature {
  id: string;
  text: string;
  included: boolean;
}

export interface NavigationLink {
  label: string;
  href: string;
}
