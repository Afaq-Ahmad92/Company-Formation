import React from 'react'
import Navbar from '../Shared/Navbar'
import Footer from '../Shared/Footer'
import Slider from "../Slider"
const Home = () => {
  return (
    <>
      <div className='Main'>
        <Navbar />
        <div className='Body'>
          <Slider/>
          
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home

