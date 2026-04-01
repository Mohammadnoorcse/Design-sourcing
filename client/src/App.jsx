// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserLayout from "./layouts/UserLayout";
import ResellerLayout from "./layouts/ResellerLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./ulitites/ProtectedRoute";



const AdminOverview = () => <h1>Full Admin Dashboard</h1>;
const AdminOrders = () => <h1>Admin Orders</h1>;
const Unauthorized = () => <h1>Unauthorized</h1>;
const NotFound = () => <h1>404 - Page Not Found</h1>;

import React from "react";
import Home from "./pages/User/Home";
import DropshipHelpPage from "./pages/User/DropshipHelpPage";
import AllProductsPage from "./pages/User/AllProductsPage";
import Reseller from "./pages/Reseller/Reseller";
import AllProducts from "./pages/Reseller/AllProducts";
import Wishlist from "./pages/Reseller/Wishlist";
import ProductDetails from "./pages/Reseller/ProductDetails";
import CartPage from "./pages/Reseller/CartPage";
import MyOrdersPage from "./pages/Reseller/MyOrdersPage";
import HotDealsPage from "./pages/Reseller/HotDealsPage";
import ResellerSettingsPage from "./pages/Reseller/ResellerSettingsPage";
import ResellerAnalyticsPage from "./pages/Reseller/ResellerAnalyticsPage";
import CheckoutPage from "./pages/Reseller/CheckoutPage";
import RegisterPage from "./pages/User/RegisterPage";
import LoginPage from "./pages/User/LoginPage";
import PrivacyPolicy from "./components/global/PrivacyPolicy";
import TermsOfService from "./components/global/TermsOfService";
import CareersPage from "./components/global/CareersPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public / Normal Users */}
        <Route element={<ProtectedRoute allowedRoles={[5]} />}>
          <Route element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<DropshipHelpPage/>} />
            <Route path="/product" element={<AllProductsPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
            <Route path="/terms-service" element={<TermsOfService/>} />
            <Route path="/careers" element={<CareersPage/>} />


          </Route>
        </Route>

        {/* Resellers / Wholesale */}
        <Route element={<ProtectedRoute allowedRoles={[4]} />}>
          <Route element={<ResellerLayout />}>
            <Route path="/reseller" element={<Reseller />} />
            <Route path="/reseller/products" element={<AllProducts/>} />
            <Route path="/reseller/wishlist" element={<Wishlist/>} />
            <Route path="/reseller/cart" element={<CartPage/>} />
            <Route path="/reseller/orders" element={<MyOrdersPage/>} />
            <Route path="/reseller/deals" element={<HotDealsPage/>} />
            <Route path="/reseller/settings" element={<ResellerSettingsPage/>} />
            <Route path="/reseller/analytics" element={<ResellerAnalyticsPage/>} />
            <Route path="/product/checkout" element={<CheckoutPage/>} />
            <Route path="/reseller/product/:id" element={<ProductDetails/>} />
          </Route>
        </Route>

        {/* Admin */}
        <Route element={<ProtectedRoute allowedRoles={[1]} />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<AdminOverview />} />
            <Route path="/dashboard/orders" element={<AdminOrders />} />
          </Route>
        </Route>

        {/* Unauthorized / Fallback */}
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
