import React from 'react'
/* import CandidatesWatch from '../components/CandidatesWatch' */
import Hero from '../components/Hero'
import InteractiveMap from '../components/InteractiveMap'
import LiveResult from '../components/LiveResult'
import NewsArticles from '../components/NewsArticles'

function Home() {
  return (
    <>
      <div className='bg-[#f4f7ff]'>
        <Hero />
        <LiveResult />
        <InteractiveMap />
        {/* <CandidatesWatch /> */}
        <NewsArticles />
      </div>
    </>
  )
}

export default Home
