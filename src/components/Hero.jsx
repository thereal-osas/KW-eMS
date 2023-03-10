import React from 'react'
import stats from '../assets/Statistics.svg'
import piechart from '../assets/Pie Sections.svg'
import bar from '../assets/Chart 7.svg'

function Hero() {
  return (
    <>
      <div className='pt-8'>
        <div className='mb-32'>
          <div>
            <h3 className='text-center text-2xl md:text-3xl font-bold tracking-wider text-[#1748C9]'>
              Kwara State Election <br /> Monitoring System
            </h3>
            <p className='text-center mt-6 text-sm'>
              A comprehensive and user-friendly to stay <br /> informed and
              updated about the electoral process
            </p>
          </div>
          <div className='relative text-center mx-auto mt-24 md:mt-52 bg-[#dee7fd] w-3/4 md:w-6/12 h-44 md:h-72 rounded-lg flex'>
            <div className='absolute bottom-2 left-4 md:left-10'>
              <img src={stats} alt='Statistics' className='w-2/4' />
              <img
                src={piechart}
                alt='Pie Chart'
                className='absolute w-4/12 top-6 md:top-14 left-6 md:left-10 transform hover:-rotate-45 transition ease-in-out duration-500'
              />
            </div>
            <img
              src={bar}
              alt='Bar Chart'
              className='w-2/5 absolute top-12 right-3 md:right-10 hover:transform hover:-translate-y-3 transition ease-in-out duration-500'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
