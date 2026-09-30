// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" }, // a couple of placeholder testimonial avatars still hotlink here — harmless, no account needed
      { protocol: "https", hostname: "i.pravatar.cc" },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400, // 31 days — hotel/destination images rarely change
  },
  // Image uploads go through a Server Action (src/lib/services/imageService.js).
  // Next's default body limit for actions is 1MB — raise it so a real photo upload isn't rejected.
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
};

module.exports = nextConfig;