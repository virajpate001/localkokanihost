const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "i.pravatar.cc" },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400,
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
    turbopack: false,
  },
};

module.exports = nextConfig;