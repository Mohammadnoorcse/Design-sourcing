// src/components/global/Sidebar.jsx
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { 
  Home, Search, Heart, Tag, ClipboardList, 
  ShoppingCart, LayoutDashboard, Settings, UserCircle 
} from 'lucide-react';

const navItems = [
  { icon: Home,           label: 'Dashboard',   to: "/reseller",         exact: true },
  { icon: Search,         label: 'All Products',to: "/reseller/products" },
  { icon: Heart,          label: 'Wishlist',    to: "/reseller/wishlist" },
  { icon: Tag,            label: 'Hot Deals',   to: "/reseller/deals" },
  { icon: ClipboardList,  label: 'My Orders',   to: "/reseller/orders" },
  { icon: ShoppingCart,   label: 'Cart',        to: "/reseller/cart",     badgeKey: "cartCount" },
  { icon: LayoutDashboard,label: 'Analytics',   to: "/reseller/analytics" },
  { icon: Settings,       label: 'Settings',    to: "/reseller/settings" },
  { icon: UserCircle,     label: 'Profile',     to: "/reseller/profile" },
];

const mobileItems = [
  { icon: Home,           label: 'Dashboard',   to: "/reseller",         exact: true },
  { icon: Heart,          label: 'Wishlist',    to: "/reseller/wishlist" },
  { icon: ShoppingCart,   label: 'Cart',        to: "/reseller/cart",     badgeKey: "cartCount" },
  { icon: Settings,       label: 'Settings',    to: "/reseller/settings" },
];

export default function Sidebar() {
    const[isActive,setIsActive] = useState(false);
  return (
    <>
      {/* Desktop Sidebar - hover expand effect */}
      <aside className="
        hidden lg:flex lg:flex-col fixed left-0 top-16 bottom-0 z-40
        w-20 hover:w-64 group transition-all duration-300 ease-in-out
        bg-white border-r border-gray-100 shadow-sm
      ">
        <div className="flex flex-col h-full py-6 px-3">
          <nav className="flex-1 space-y-1.5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.exact}
                className={({ isActive }) => `
                  group/item relative flex items-center gap-4 px-4 py-3.5 rounded-xl
                  transition-all duration-200
                  ${isActive 
                    ? 'bg-pink-50 text-pink-700 font-semibold shadow-sm' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-pink-600'
                  }
                `}
              >
                <div className="relative">
                  <item.icon className="h-6 w-6 flex-shrink-0" strokeWidth={2} />
                  {item.badgeKey && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                      3
                    </span>
                  )}
                </div>

                <span className="
                  opacity-0 group-hover/item:opacity-100 
                  group-hover:w-auto w-0 overflow-hidden whitespace-nowrap
                  transition-all duration-300 text-sm font-medium
                ">
                  {item.label}
                </span>

                <div className="
                  absolute left-full ml-5 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg
                  opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible
                  transition-all pointer-events-none whitespace-nowrap shadow-md
                ">
                  {item.label}
                </div>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile Bottom Navigation - icons only + active indicator */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl safe-area-inset-bottom">
        <div className="flex justify-around items-center h-16 px-2 max-w-screen-xl mx-auto">
          {mobileItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.exact}
              className={({ isActive }) => `
                relative flex flex-col items-center justify-center flex-1 py-2
                transition-colors duration-200
                ${isActive ? 'text-pink-600' : 'text-gray-600 hover:text-pink-600'}
              `}
            >
              {/* Active indicator bar (moved inside className scope) */}
              <div className={`
                absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 rounded-b-md transition-all
                ${isActive ? 'bg-pink-600' : 'bg-transparent'}
              `} />

              <div className="relative">
                <item.icon 
                  className="h-7 w-7" 
                  strokeWidth={isActive ? 2.5 : 2} 
                />
                {item.badgeKey && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
                    3
                  </span>
                )}
              </div>
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Spacer for desktop sidebar */}
      <div className="hidden lg:block lg:w-20 xl:w-64 flex-shrink-0" />
    </>
  );
}