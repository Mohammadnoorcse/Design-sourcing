// src/layouts/ResellerLayout.jsx
import { Outlet } from "react-router-dom";


import ReSellerNavbar from "../global/Reseller/ReSellerNavbar";
import Sidebar from "../global/Reseller/Sidebar";

export default function ResellerLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Navbar */}
      <ReSellerNavbar />

      {/* Main content area with sidebar */}
      <div className="w-full flex lg:gap-[5rem] overflow-hidden">
        <div className="lg:w-[2%] lg:block hidden">
          <Sidebar />
        </div>

        {/* Page content */}
        <main className="lg:w-[90%] w-full transition-all duration-300">
          <div className="">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}