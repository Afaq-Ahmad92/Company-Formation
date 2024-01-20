import React from 'react'
import Navbar from '../Shared/Navbar'
import Footer from '../Shared/Footer'
const Home = () => {
  return (
    <>
      <div className='Main'>
        <Navbar />
        <div className='Body'>
          <h1>This is Home page</h1>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home

