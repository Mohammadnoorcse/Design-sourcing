// components/Header.tsx
import { useState } from 'react';
import { Search, Camera, Heart, ShoppingCart, X, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function UserHeader() {
  const [showTopBanner, setShowTopBanner] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar */}
      {showTopBanner && (
        <div className="bg-gray-900 text-white text-center py-2 px-4 text-sm relative">
          <div className="max-w-7xl mx-auto">
            FG FREE SHIPPING for Everyone – On Orders over $300 |{' '}
            <span className="underline cursor-pointer">Detail</span>
          </div>
          <button
            onClick={() => setShowTopBanner(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>
      )}

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                DESIGN
              </h1>
            </div>

            {/* Search Bar - center on desktop, full width on mobile */}
            <div className="hidden md:block flex-1 max-w-xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Searching..."
                  className="w-full pl-4 pr-10 py-2.5 border border-gray-300 rounded-md outline-none"
                />
                <Search
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  size={20}
                />
              </div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-4 md:gap-6">
              {/* Mobile search icon */}
              <button className="md:hidden text-gray-700">
                <Search size={22} />
              </button>


              

             

              {/* Desktop buttons */}
              <div className="hidden md:flex items-center gap-3">
                <Link to="/faq" className="px-4 py-1.5 border border-gray-800 text-gray-800 rounded hover:bg-gray-100 text-sm font-medium">
                  FAQ
                </Link>
                <Link to="/register" className="px-4 py-1.5 border border-gray-800 text-gray-800 rounded hover:bg-gray-100 text-sm font-medium">
                  REGISTER
                </Link>
                <Link to="/login" className="px-5 py-1.5 bg-gray-900 text-white rounded hover:bg-gray-800 text-sm font-medium">
                  SIGN IN
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                className="md:hidden text-gray-800"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile search - appears below header when opened */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 bg-white border-b">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Search
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={20}
              />
            </div>
          </div>
        )}
      </header>

      {/* Navigation Bar */}
      <nav className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center justify-center gap-x-8 lg:gap-x-12 py-3.5 text-sm font-medium">
            <a href="#" className="hover:text-red-400 transition-colors">Shop</a>
            <a href="#" className="hover:text-red-400 transition-colors">New In</a>
            <a href="#" className="hover:text-red-400 transition-colors">Best of Best</a>
            <a href="#" className="hover:text-red-400 transition-colors">Women's Apparel</a>
            <a href="#" className="hover:text-red-400 transition-colors">Accessories</a>
            <a href="#" className="hover:text-red-400 transition-colors">Jewelry</a>
            <a href="#" className="hover:text-red-400 transition-colors">Plus Size</a>
            <a href="#" className="hover:text-red-400 transition-colors">Mother's Day</a>
            <a href="#" className="hover:text-red-400 transition-colors">Vendors</a>
            <a href="#" className="hover:text-red-400 transition-colors">THE EDIT</a>
          </div>

          {/* Mobile nav - simple list version */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              <div className="flex flex-col gap-4 px-2 text-base">
                <a href="#" className="hover:text-red-400">Shop</a>
                <a href="#" className="hover:text-red-400">New In</a>
                <a href="#" className="hover:text-red-400">Best of Best</a>
                <a href="#" className="hover:text-red-400">Women's Apparel</a>
                <a href="#" className="hover:text-red-400">Accessories</a>
                <a href="#" className="hover:text-red-400">Jewelry</a>
                <a href="#" className="hover:text-red-400">Plus Size</a>
                <a href="#" className="hover:text-red-400">Mother's Day</a>
                <a href="#" className="hover:text-red-400">Vendors</a>
                <a href="#" className="hover:text-red-400">THE EDIT</a>

                <div className="pt-4 border-t border-gray-800 flex flex-col gap-3">
                  <button className="py-2 border border-white/30 rounded text-center">
                    DROPSHIPPING
                  </button>
                  <Link to="/register" className="py-2 border border-white/30 rounded text-center">
                    REGISTER
                  </Link>
                  <Link to="/login" className="py-2 bg-white text-gray-900 text-center rounded font-medium">
                    SIGN IN
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}