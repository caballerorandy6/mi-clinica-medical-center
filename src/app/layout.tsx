import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingButtons } from "@/components/layout/floating-buttons";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import {
  JsonLdMedicalClinic,
  JsonLdFAQ,
  JsonLdBreadcrumb,
} from "@/components/seo/json-ld";

// Fuente para títulos - Poppins: moderna, profesional, geométrica
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Fuente para cuerpo - Inter: legible, limpia, excelente para texto largo
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clinicagessner.com"),
  title: {
    default:
      "Clínica Hispana Cerca de Ti en Houston | Ginecología en Español",
    template: "%s | Clínica Hispana Houston - Clínica Hispana Nueva Salud Gessner",
  },
  other: {
    "theme-color": "#F7FDF9",
    "msapplication-TileColor": "#16A34A",
    "apple-mobile-web-app-status-bar-style": "default",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  description:
    "Clínica hispana cerca de ti en Houston. Ginecólogos que hablan español, exámenes médicos de inmigración, ultrasonidos de embarazo. Clínica familiar hispana. Llama: +1 (346) 226-5820",
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
  authors: [{ name: "Clínica Hispana Nueva Salud Gessner" }],
  creator: "Clínica Hispana Nueva Salud Gessner",
  publisher: "Clínica Hispana Nueva Salud Gessner",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://clinicagessner.com",
    siteName: "Clínica Hispana Nueva Salud Gessner",
    title:
      "Clínica Hispana Cerca de Ti en Houston | Ginecología en Español",
    description:
      "Clínica hispana cerca de ti en Houston. Ginecólogos que hablan español, exámenes médicos de inmigración, ultrasonidos de embarazo. Clínica familiar hispana con opciones gratuitas. Abierto domingos.",
    images: [
      {
        url: "https://clinicagessner.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clínica Hispana cerca de mi en Houston TX - Clínica Hispana Nueva Salud Gessner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Hispana Cerca de Ti en Houston | Ginecología en Español",
    description:
      "Clínica hispana cerca de ti en Houston. Ginecólogos que hablan español, exámenes médicos de inmigración. Clínica familiar hispana.",
    images: ["https://clinicagessner.com/images/og-image.jpg"],
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
    canonical: "https://clinicagessner.com",
  },
  verification: {
    google: "0e75VFJfRJHj87jse_2qkMBJ6I78XsHEBeUHuB3yJlY",
  },
  category: "Medical Clinic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <JsonLdMedicalClinic />
        <JsonLdFAQ />
        <JsonLdBreadcrumb />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <ScrollToTop />
      </body>
    </html>
  );
}
