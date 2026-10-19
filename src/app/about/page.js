// src/app/about/page.js
import Image from "next/image";
import { FiMapPin, FiHeart, FiUsers, FiTrendingUp } from "react-icons/fi";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/utils/seo";



export const metadata = buildMetadata({
  title: "About Us | Local Kokan",
  description: "Learn about Local Kokani's mission to connect travelers with handpicked hotels and restaurants across India.",
  path: "/about",
  keywords: ["Local Kokani", "About Us", "Travel", "Hotels", "Restaurants"],
});

const stats = [
  { value: "50+", label: "Destinations" },
  { value: "300+", label: "Hotels Listed" },
  { value: "10K+", label: "Happy Travelers" },
];

const values = [
  {
    icon: FiHeart,
    title: "Handpicked, Not Automated",
    description: "Every hotel and restaurant on Local Kokani is personally reviewed before it goes live — no bulk listings, no unchecked data.",
  },
  {
    icon: FiUsers,
    title: "Real People, Real Help",
    description: "We connect you directly with property owners over WhatsApp, so you get honest answers, not automated chatbots.",
  },
  {
    icon: FiTrendingUp,
    title: "Empowering Local Businesses",
    description: "We partner with homestay owners, hotels, resorts, and local restaurants across Konkan, helping them connect with more travelers, grow their businesses, and showcase the authentic hospitality of the region.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="bg-secondary dark:bg-gray-900">
        <Breadcrumbs items={[{ name: "About Us", url: "/about" }]} />
      </div>

      <section className="bg-primary py-8">
        <div className="container-custom text-center">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
            <FiMapPin className="text-accent text-2xl" />
          </div>
          <h1 className="font-display font-extrabold text-2xl md:text-3xl text-white">
            About Local Kokani
          </h1>
          <p className="text-white/80 mt-4 max-w-xl mx-auto">
            We're on a mission to make finding your next stay — and your next meal — simple, honest, and human.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="container-custom max-w-3xl">
          <h2 className="font-display font-bold text-2xl text-primary section-title mb-4">Our Story</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed dark:text-gray-300">
            <p>
              LocalKokani was born from a love for the beautiful Konkan region and a simple belief: discovering a place should be as special as experiencing it.
            </p>
            <p>
             From peaceful beaches and scenic coastal villages to historic forts, delicious Konkani food, and warm local hospitality, Konkan has so much to offer. Yet, finding the right place to stay or a good local restaurant can sometimes be difficult for travelers.
            </p>
            <p>
              That's why we created <strong>LocalKokani — a platform that brings travelers closer to the heart of Konkan.</strong>
            </p>

            <p>Our goal is to make it easier for travelers to discover homestays, hotels, resorts, rooms, villas, restaurants, and local Khanavals while helping them connect with the people who make this region truly special.</p>

            <p>We also believe that local businesses deserve more opportunities to grow. By bringing their properties and services online, we help local owners reach more travelers and showcase the unique hospitality, culture, and traditions of their communities.</p>

            <p>At LocalKokani, we want travel to be more than just visiting a destination. We want you to experience local life, enjoy authentic Konkani food, explore hidden gems, and create memories that stay with you long after your journey ends.</p>

            <p><strong>Our mission is simple: to help you discover Konkan, stay local, and experience the region like never before.</strong></p>

               <p><strong>LocalKokani — Stay with Locals. Discover the Real Konkan.</strong></p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-blue-50 dark:bg-gray-950 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mb-16">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display font-extrabold text-4xl text-primary dark:text-white">{stat.value}</p>
                <p className="text-gray-500 text-sm mt-1 dark:text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="text-primary text-xl dark:text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg text-primary dark:text-white">{value.title}</h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-hero-gradient">
        <div className="container-custom text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
            Have a hotel or restaurant to list?
          </h2>
          <p className="text-white/80 mt-3 max-w-lg mx-auto">
            Join Local Kokani as a partner and reach thousands of travelers looking for their next stay.
          </p>
          <a href="/partner-with-us" className="btn-accent inline-flex items-center gap-2 mt-6">
            Become a Partner
          </a>
        </div>
      </section>
    </>
  );
}