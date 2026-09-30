const nextConfig = {
  images: {
    remotePatterns: [
      // your existing remotePatterns
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400,
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
};

module.exports = nextConfig;