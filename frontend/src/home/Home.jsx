import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Freebook from '../components/Freebook'
import Footer from '../components/Footer'

function Home() {
  return (<>
   <div className="bg-blue-50 min-h-screen">
        <Navbar />
        <Banner />
        <Freebook />
        <Footer />
      </div>
  </>
  )
}

export default Home;
