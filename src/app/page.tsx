import React from 'react'
// import Header from './Header/page'
import Hero from './Hero/page'
import Hero1 from './Hero/hero1'
import Hero2 from './Hero/hero2/page'
// import Hero3 from './Hero/hero3/page'
import Hero4 from './Hero/hero4/page'
import Hero5 from './Hero/hero5/page'
import Hero6 from './Hero/hero6/page' 
import Hero9 from './Hero/hero9/page'
import Footer from './Footer/page'
import Pricing4 from './pricing/pricing4/page'
import Pricing5 from './pricing/pricing5/page'
const Home = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
    
    <Hero />
    <Hero1 />
    <Hero2 />
    {/* <Hero3 /> */}
    <Hero4 />
    <Hero5 />
    <Hero6 />
    <Pricing4 />
    <Pricing5 />
    <Hero9 />
    <Footer />
    Home</div>
  )
}

export default Home