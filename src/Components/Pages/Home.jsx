import React from 'react'
import Navbar from '../Shared/Navbar'
import Footer from '../Shared/Footer'
import Slider from "../Slider"
import Testimonials from '../Shared/Testimonials'
import Accordians from '../Accordians'
const Home = () => {
  return (
    <>
      <div className='Main'>
        <Navbar />
        <div className='Body'>
          <Slider/>
          <Testimonials/>
          <Accordians/>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home

