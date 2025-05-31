import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'www.amazon.in',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      }
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: 'https://api.spawnright.gg',
  },
};

export default nextConfig;