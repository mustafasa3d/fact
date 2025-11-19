import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  eslint: {
    // 🚨 WARNING: This will allow production builds to complete
    // even if there are ESLint errors.
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  reactCompiler: true,
  

};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
