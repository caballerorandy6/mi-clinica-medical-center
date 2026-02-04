import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import {
  JsonLdMedicalClinic,
  JsonLdFAQ,
  JsonLdLocalBusiness,
} from "@/components/seo/json-ld";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://miclinicamedicalcenter.com"),
  title: {
    default:
      "Clínica Hispana en Houston | Ginecología en Español | Cerca de Ti",
    template: "%s | Clínica Hispana Houston - Mi Clínica Medical Center",
  },
  description:
    "Clínica hispana cerca de ti en Houston. Ginecólogos que hablan español, exámenes médicos de inmigración, ultrasonidos de embarazo. Clínica familiar hispana. Llama: (346) 226-5820",
  keywords: [
    "clinica hispana",
    "clinica hispana cerca de mi",
    "ginecologos cerca de mi",
    "ginecologo que hablen español",
    "clinica hispana houston",
    "examenes medicos de inmigracion",
    "clinicas gratuitas cerca de mi",
    "clinica hispana familiar",
    "clinica hispana near me",
    "ultrasonido de embarazo cerca de mi",
    "examen Green Card Houston",
    "examen I-693 Houston",
    "clínica latina Houston",
    "USCIS civil surgeon Houston",
  ],
  authors: [{ name: "Mi Clínica Medical Center" }],
  creator: "Mi Clínica Medical Center",
  publisher: "Mi Clínica Medical Center",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://miclinicamedicalcenter.com",
    siteName: "Clínica Hispana Mi Clínica Medical Center",
    title:
      "Clínica Hispana en Houston | Ginecología en Español | Cerca de Ti",
    description:
      "Clínica hispana cerca de ti en Houston. Ginecólogos que hablan español, exámenes médicos de inmigración, ultrasonidos de embarazo. Clínica familiar hispana con opciones gratuitas. Abierto domingos.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clínica Hispana cerca de mi en Houston TX - Mi Clínica Medical Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Hispana en Houston | Ginecología en Español | Cerca de Ti",
    description:
      "Clínica hispana cerca de ti en Houston. Ginecólogos que hablan español, exámenes médicos de inmigración. Clínica familiar hispana.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://miclinicamedicalcenter.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Medical Clinic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <JsonLdMedicalClinic />
        <JsonLdFAQ />
        <JsonLdLocalBusiness />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
