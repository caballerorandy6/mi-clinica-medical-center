import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Deshabilitar optimización de imágenes de Next.js
    unoptimized: true,
    // Calidades permitidas para evitar warnings
    qualities: [75, 80, 85],
  },
};

export default nextConfig;
