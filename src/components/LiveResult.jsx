import React from 'react'
import chart from '../assets/chart1.svg'

function LiveResult() {
  return (
    <>
      <div>
        <div className='mb-32'>
          <div>
            <h3 className='text-center text-2xl md:text-3xl font-bold tracking-wider text-[#1748C9]'>
              Stay Updated with <br /> Live Results
            </h3>
            <p className='text-center mt-6 text-sm'>
              Follow up on electoral process and access live results <br />{' '}
              which range from presidential, gubernatorial, senatorial and
              representative elections
            </p>
          </div>
          <div className='text-center mt-10 md:mt-20'>
            <img
              className='w-3/4 md:w-2/4 mx-auto'
              src={chart}
              alt='Live Result'
            />
          </div>
          <div className='text-center mt-10'>
            <button className='px-4 py-2 bg-[#336DFF] text-sm text-white font-semibold rounded-lg hover:bg-[#adc5ff] hover:text-[#000] transition ease-in duration-150'>
              Track Results
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LiveResult
