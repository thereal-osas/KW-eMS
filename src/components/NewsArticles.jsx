import React from 'react'
import { Link } from 'react-router-dom'
import news1 from '../assets/news1.svg'
import news2 from '../assets/news2.svg'
import news3 from '../assets/news3.svg'
import news4 from '../assets/news4.svg'

function NewsArticles() {
  return (
    <>
      <div className='bg-[#edf2ff] px-10 sm:px-28 pb-32'>
        <div className='flex flex-col sm:flex-row justify-between'>
          <div className='mt-16 text-center sm:text-left'>
            <Link to='/news'>
              <button className='px-5 py-2 bg-[#c8d6f9] text-sm text-black font-semibold rounded-lg'>
                News/Articles
              </button>
            </Link>

            <h3 className='mt-6 text-lg font-bold tracking-wider'>
              Take a look at our latest news and articles
            </h3>
          </div>
          <div>
            <div className='mt-16 bg-[#ffffff] px-4 py-5 rounded flex justify-between items-center'>
              <div>
                <h4 className='font-medium'>
                  3 takeaways from Nigeria Presidential election
                </h4>
                <h4 className='text-[#94979e] font-medium mt-10'>
                  01 March, 2023
                </h4>
              </div>

              <img src={news1} alt='News' className='w-2/5 rounded' />
            </div>
            <div className='mt-16 bg-[#ffffff] px-4 py-5 rounded flex justify-between items-center'>
              <div>
                <h4 className='font-medium'>
                  3 takeaways from Nigeria Presidential election
                </h4>
                <h4 className='text-[#94979e] font-medium mt-10'>
                  01 March, 2023
                </h4>
              </div>

              <img src={news2} alt='News' className='w-2/5 rounded' />
            </div>
            <div className='mt-16 bg-[#ffffff] px-4 py-5 rounded flex justify-between items-center'>
              <div>
                <h4 className='font-medium'>
                  3 takeaways from Nigeria Presidential election
                </h4>
                <h4 className='text-[#94979e] font-medium mt-10'>
                  01 March, 2023
                </h4>
              </div>

              <img src={news3} alt='News' className='w-2/5 rounded' />
            </div>
            <div className='mt-16 bg-[#ffffff] px-4 py-5 rounded flex justify-between items-center'>
              <div>
                <h4 className='font-medium'>
                  3 takeaways from Nigeria Presidential election
                </h4>
                <h4 className='text-[#94979e] font-medium mt-10'>
                  01 March, 2023
                </h4>
              </div>

              <img src={news4} alt='News' className='w-2/5 rounded' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsArticles
