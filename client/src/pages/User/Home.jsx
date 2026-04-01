import React from 'react'
import HeroSection from '../../components/User/HeroSection'
import MustHaveBrands from '../../components/User/MustHaveBrands'
import StoreCategories from '../../components/User/StoreCategories'
import MarketPlace from '../../components/User/MarketPlace'
import TrendingNowSection from '../../components/User/TrendingNowSection'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <MustHaveBrands/>
      <StoreCategories/>
      <MarketPlace/>
      <TrendingNowSection/>
    </div>
  )
}

export default Home
