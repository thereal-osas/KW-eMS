import React from 'react'
/* import CandidatesWatch from '../components/CandidatesWatch' */
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import InteractiveMap from '../components/InteractiveMap'
import LiveResult from '../components/LiveResult'
import NewsArticles from '../components/NewsArticles'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <div className='bg-[#f4f7ff]'>
        <Hero />
        <LiveResult />
        <InteractiveMap />
        {/* <CandidatesWatch /> */}
        <NewsArticles />
        <Footer />
      </div>
    </>
  )
}

export default Home
