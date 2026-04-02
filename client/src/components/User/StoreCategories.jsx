import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: "Women's Apparel",
    imageUrl: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&auto=format",
  },
  {
    title: "Shoes",
    imageUrl: "https://images.pexels.com/photos/12210270/pexels-photo-12210270.jpeg",
  },
  {
    title: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&auto=format",
  },
  {
    title: "Kids",
    imageUrl: "https://images.pexels.com/photos/15170532/pexels-photo-15170532.jpeg",
  },
  {
    title: "Jewelry",
    imageUrl: "https://images.unsplash.com/photo-1611590027211-b954fd027b51?w=800&auto=format",
  },
];

const secondaryItems = [
  { title: "Bags", imageUrl: "https://images.pexels.com/photos/33235378/pexels-photo-33235378.jpeg" },
  { title: "Skincare", imageUrl: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=800" },
  { title: "Men's", imageUrl: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800" },
  { title: "Home", imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800" },
  
];

function CategoryCard({ title, imageUrl }) {
  return (
    <Link to="/register" className="group relative aspect-[4/5] overflow-hidden rounded-xl">
      <img
        src={imageUrl}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="text-xl font-medium text-white drop-shadow-md md:text-2xl">
          {title}
        </h3>
      </div>
    </Link>
  );
}

export default function StoreCategories() {
  return (
    <section className="bg-[#1a2f23] py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Find Everything for Your Store
          </h2>
        </div>

        {/* Main Categories - 5 cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:gap-5">
          {categories.map((cat) => (
            <CategoryCard key={cat.title} title={cat.title} imageUrl={cat.imageUrl} />
          ))}
        </div>

        {/* Secondary items - 2 rows × 3 + last one centered or full width */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mt-14 md:gap-6">
          {secondaryItems.slice(0, 6).map((item) => (
            <CategoryCard key={item.title} title={item.title} imageUrl={item.imageUrl} />
          ))}
        </div>
      </div>
    </section>
  );
}