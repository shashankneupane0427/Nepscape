import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during builds
  },
  async redirects() {
    return [
      {
        source: '/',         // Redirect from root URL
        destination: '/home', // Redirect to /home
        permanent: true,     // Permanent redirect (301)
      },
    ];
  },
};

export default nextConfig;
