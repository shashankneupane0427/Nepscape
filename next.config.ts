import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during builds
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true, // Set to true if you want a 301 permanent redirect
      },

    ];
  },
};

export default nextConfig;
