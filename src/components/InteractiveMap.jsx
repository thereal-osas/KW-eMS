import React from 'react'
import map from '../assets/Interactive map.svg'

function InteractiveMap() {
  return (
    <>
      <div>
        <div className='mb-32'>
          <div>
            <h3 className='text-center text-2xl md:text-3xl font-bold tracking-wider text-[#1748C9]'>
              Explore Our <br /> Interactive Map
            </h3>
            <p className='text-center mt-6 text-sm'>
              Access our interactive map to stay updated <br /> with election
              results
            </p>
          </div>
          <div className='text-center mt-10 md:mt-20'>
            <img className='w-3/4 md:w-2/4  mx-auto' src={map} alt='Map' />
          </div>
          <div className='text-center mt-10'>
            <button className='px-4 py-2 bg-[#336DFF] text-sm text-white font-semibold rounded-lg hover:bg-[#adc5ff] hover:text-[#000] transition ease-in duration-150'>
              Interactive Map
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default InteractiveMap
