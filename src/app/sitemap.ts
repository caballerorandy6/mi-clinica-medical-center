import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.baseUrl;

  const routes: MetadataRoute.Sitemap = [];

  // Generate routes for each locale
  locales.forEach((locale) => {
    const prefix = locale === "es" ? "" : `/${locale}`;

    // Homepage
    routes.push({
      url: `${baseUrl}${prefix}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          es: baseUrl,
          en: `${baseUrl}/en`,
        },
      },
    });

    // Services page
    routes.push({
      url: `${baseUrl}${prefix}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          es: `${baseUrl}/services`,
          en: `${baseUrl}/en/services`,
        },
      },
    });
  });

  return routes;
}
