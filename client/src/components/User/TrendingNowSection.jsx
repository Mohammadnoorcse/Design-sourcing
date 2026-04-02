import React from "react";
import { Link } from "react-router-dom";

const trendingTabs = [
  { label: "Print Perfection", active: true },
  { label: "Springtime Silhouettes" },
  { label: "Summer Serenity" },
];

const gridItems = [
  {
    imageId: 6,
    brand: "Blu Pepper",
    title: "STRIPE HALF BUTTON COLLARED KNIT POLO...",
    image: "https://images.pexels.com/photos/36730407/pexels-photo-36730407.jpeg",
    isFeatured: true,
  },
  {
    imageId: 0,
    brand: "Beeson River",
    title: "Striped Shirt Top",
    image: "https://images.pexels.com/photos/6069566/pexels-photo-6069566.jpeg",
    isFeatured: false,
  },
  {
    imageId: 3,
    brand: "Raisonnel",
    title: "Polka Dot Ruffle Collar Blouse",
    image: "https://images.pexels.com/photos/11013642/pexels-photo-11013642.jpeg",
    isFeatured: false,
  },
  {
    imageId: 9,
    brand: "INA",
    title: "Adorable Polka Dot Satin Deep V Halter Mini Dress",
    image: "https://images.pexels.com/photos/6068975/pexels-photo-6068975.jpeg",
    membersOnly: true,
    freeShipping: true,
  },
  {
    imageId: 11,
    brand: "Hem & Thread",
    title: "TIERED SMOCKED CAP SLEEVES MULTI COLOR KNIT",
    image: "https://images.pexels.com/photos/3527572/pexels-photo-3527572.jpeg",
    membersOnly: true,
    freeShipping: true,
  },
  {
    imageId: 13,
    brand: "Dress Forum",
    title: "Long Summer Halter Neck Midi Dress",
    image: "https://images.pexels.com/photos/36492563/pexels-photo-36492563.jpeg",
    membersOnly: true,
    freeShipping: true,
  },
];

function GridCard({ item }) {
  const isLarge = item.isFeatured;

  return (
    <Link to="/register"
      className={`
        group relative overflow-hidden rounded-xl h-[20rem] bg-white shadow-md hover:shadow-xl 
        transition-all duration-300
        ${isLarge ? "lg:col-span-3" : "lg:col-span-1"}
      `}
    >
      {/* Image Container */}
      <div
        className={`${isLarge ? "aspect-[4/5]" : "aspect-[3/4]"} relative overflow-hidden`}
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/600x800/cccccc/666666?text=Image+Not+Found";
          }}
        />

        {/* Members Only Badge */}
        {item.membersOnly && (
          <div className="absolute top-3 left-3 bg-black/80 text-white text-xs px-2.5 py-1 rounded-md font-medium">
            Members Only
          </div>
        )}
      </div>

      {/* Bottom Overlay */}
      <div
        className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-${
          isLarge ? "6" : "4"
        }`}
      >
        <p
          className={`text-white font-semibold ${isLarge ? "text-xl md:text-2xl" : "text-base"}`}
        >
          {item.brand}
        </p>
        <p
          className={`text-white/90 mt-1.5 ${isLarge ? "text-base" : "text-sm"} line-clamp-2`}
        >
          {item.title}
        </p>

        {item.freeShipping && (
          <p className="text-green-300 text-xs md:text-sm mt-2 font-medium">
            FG Free Shipping $300+
          </p>
        )}
      </div>
    </Link>
  );
}

export default function TrendingNowGrid() {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            In Focus: Trending Now
          </h2>

          <div className="flex flex-wrap gap-3 mt-4 sm:mt-0">
            {trendingTabs.map((tab) => (
              <button
                key={tab.label}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  tab.active
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {gridItems.map((item, index) => (
            <GridCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}