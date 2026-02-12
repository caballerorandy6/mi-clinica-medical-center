import { Inter, Poppins } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${poppins.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#F7FDF9" />
        <meta name="msapplication-TileColor" content="#16A34A" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
