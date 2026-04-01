import React from 'react';
import { ArrowUp, Facebook, Instagram, Twitter, Youtube, Send } from 'lucide-react'; // or any icon lib

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
   

      {/* Main links grid */}
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand / About */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-lg font-semibold text-white">DESIGN</h4>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Connecting buyers with exclusive vendors since 2000+. Trend insights, data-backed bestsellers, smart buying tools.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube className="h-6 w-6" /></a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h5 className="text-base font-medium text-white mb-4">Shop</h5>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trending Now</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Women's Apparel</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shoes & Accessories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kids & Baby</a></li>
            </ul>
          </div>

          {/* Categories (quick links) */}
          <div>
            <h5 className="text-base font-medium text-white mb-4">Categories</h5>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Print Perfection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Summer Serenity</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Jewelry & Watches</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bags & Wallets</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Activewear</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="text-base font-medium text-white mb-4">Support</h5>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Style Match FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-base font-medium text-white mb-4">Company</h5>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vendor Portal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar: Copyright + Back to top */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} FASHIONNGO. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-gray-300 transition-colors">Sitemap</a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              Back to Top <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}