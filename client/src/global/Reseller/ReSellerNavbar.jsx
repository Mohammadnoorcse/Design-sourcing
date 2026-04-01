// src/components/global/ReSellerNavbar.jsx
import React, { useState } from 'react';
import { Search, Menu, X, ChevronRight, MessageCircle, ChevronDown } from 'lucide-react';
import { NavLink } from "react-router-dom";

export default function ReSellerNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/reseller" className="flex items-center">
            <span className="text-2xl font-bold tracking-tight">
              Design
            </span>
            
          </NavLink>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products, categories, vendors..."
                className="w-full pl-12 pr-5 py-2.5 bg-gray-50 border border-gray-300 rounded-full outline-none"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="md:hidden p-2 text-gray-700 hover:text-pink-600">
              <Search className="h-6 w-6" />
            </button>

          

           

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-pink-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>

            {/* User Avatar */}
            <div to="/reseller/profile" className="hidden md:flex items-center gap-2 group relative">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                UM
              </div>
              <ChevronDown className="h-4 w-4 text-gray-500 group-hover:text-pink-600" />

              <div className='absolute top-[2rem] right-0 w-[7rem] p-1 hidden group-hover:flex shadow-sm z-50 bg-white  flex-col gap-2'>
                <button className='text-sm border-b border-gray-200 pb-1'>Log Out</button>
                <button className='text-sm'>Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-6 space-y-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-12 py-3 bg-gray-50 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
            </div>

            <nav className="grid grid-cols-2 gap-4 text-center font-medium">
              <NavLink to="/reseller" className="py-3 hover:text-pink-600">Dashboard</NavLink>
              <NavLink to="/reseller/products" className="py-3 hover:text-pink-600">Products</NavLink>
              <NavLink to="/reseller/orders" className="py-3 hover:text-pink-600">Orders</NavLink>
              <NavLink to="/reseller/cart" className="py-3 hover:text-pink-600">Cart</NavLink>
              <NavLink to="/reseller/help" className="py-3 hover:text-pink-600">Help</NavLink>
              <NavLink to="/wholesale" className="py-3 text-black font-semibold">Wholesale</NavLink>
            </nav>

            <div className="pt-4 border-t flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                UM
              </div>
              <div>
                <p className="font-medium">userme</p>
                <p className="text-sm text-gray-500">Reseller</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}