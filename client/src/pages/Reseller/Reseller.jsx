import React from "react";
import HeroSlider from "../../components/Reseller/home/HeroSlider";
import ShopByCategory from "../../components/Reseller/home/ShopByCategory";
import TopPicks from "../../components/Reseller/home/TopPicks";
import HeroBanner from "../../components/Reseller/home/HeroBanner";
import SummerLinenSection from "../../components/Reseller/home/SummerLinenSection";
import VendorsSection from "../../components/Reseller/home/VendorsSection";
import TrendForecast from "../../components/Reseller/home/TrendForecast";
import PantsSection from "../../components/Reseller/home/PantsSection";
import FreeShippingVendors from "../../components/Reseller/home/FreeShippingVendors";


const Reseller = () => {
  return (
    <div className="w-full py-5">
      <HeroSlider />
      <ShopByCategory/>
      <TopPicks/>
      <HeroBanner/>
      <SummerLinenSection/>
      <VendorsSection/>
      <TrendForecast/>
      <PantsSection/>
      <FreeShippingVendors/>
    </div>
  );
};

export default Reseller;
