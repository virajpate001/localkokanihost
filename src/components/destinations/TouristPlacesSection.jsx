// src/components/destinations/TouristPlacesSection.jsx
"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import CardCarousel from "@/components/ui/CardCarousel";
import { getCategoryIcon, getCategoryColor } from "@/lib/touristPlaceCategories";

function TouristPlaceCard({ place }) {
  const Icon = getCategoryIcon(place.category);
  return (
    <div className="card overflow-hidden h-full">
      {place.image?.url ? (
        <div className="relative aspect-[16/10]">
          <Image
            src={place.image.url}
            alt={place.name}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
            className="object-cover"
          />
          <span className={`absolute top-3 left-3 flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-lg backdrop-blur-sm ${getCategoryColor(place.category)}`}>
            <Icon className="text-xs" /> {place.category}
          </span>
        </div>
      ) : (
        <div className="p-5 pb-0">
          <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg ${getCategoryColor(place.category)}`}>
            <Icon className="text-xs" /> {place.category}
          </span>
        </div>
      )}
      <div className="p-5">
        <h3 className="font-display font-semibold text-primary dark:text-white">{place.name}</h3>
        {place.description && (
          <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">{place.description}</p>
        )}
      </div>
    </div>
  );
}

export default function TouristPlacesSection({ places = [], destinationName }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const validPlaces = places.filter((p) => p.name?.trim());
  if (validPlaces.length === 0) return null;

  const categories = useMemo(() => {
    const unique = [...new Set(validPlaces.map((p) => p.category))];
    return ["All", ...unique];
  }, [validPlaces]);

  const filteredPlaces =
    activeCategory === "All" ? validPlaces : validPlaces.filter((p) => p.category === activeCategory);

  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <h2 className="section-title">Tourist Places in {destinationName}</h2>

          {categories.length > 2 && (
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-lg transition-colors ${
                    activeCategory === cat
                      ? "bg-primary text-white"
                      : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* key={activeCategory} forces a clean remount on filter change, so the
            carousel always resets to the first slide instead of possibly
            landing out-of-bounds when the filtered item count shrinks. */}
        <CardCarousel
          key={activeCategory}
          items={filteredPlaces}
          navPrefix="tourist-places"
          renderItem={(place) => <TouristPlaceCard place={place} />}
        />
      </div>
    </section>
  );
}