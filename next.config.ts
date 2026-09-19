import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/dialogue/le-cheval",
        destination: "/dialogue/202609",
        permanent: true,
      },
      {
        source: "/festival",
        destination: "/exposition",
        permanent: true,
      },
      {
        source: "/festival/:path*",
        destination: "/exposition/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
