// next.config.js
/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],

    formats: ["image/avif", "image/webp"],

    // 31 days
    minimumCacheTTL: 2678400,
  },

    async rewrites() {
    return [
      { source: "/uploads/:path*", destination: "/api/serve-upload/:path*" },
    ];
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
};

module.exports = nextConfig;