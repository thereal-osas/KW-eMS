import React, { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navmenu from './Navmenu'

function Navbar() {
  const [Open, setOpen] = useState(false)

  const Toggle = () => {
    setOpen(!Open)
  }

  return (
    <section className='mb-12'>
      <main className=' fixed top-0 left-0 right-0 bg-white z-50 '>
        <div className='justify-between px-4 py-2 flex w-full'>
          <Link to='/' className='text-xl font-bold'>
            KWEMS
          </Link>
          <div className='hidden space-x-6 sm:flex items-center'>
            <Link className='text-sm font-medium' to='/'>
              Home
            </Link>
            <Navmenu />
            {/* <Link
							className="text-sm font-medium"
							to="/candidates">
							Candidates
						</Link> */}
            <Link className='text-sm font-medium' to='/live_results'>
              Live Results
            </Link>
            <Link className='text-sm font-medium' to='/news'>
              News
            </Link>
          </div>
          <div>
            <Link to='/interactive_map'>
              <button className='bg-[#336DFF] text-white px-4 py-1 rounded-2xl'>
                Interactive Map
              </button>
            </Link>
          </div>
          <button className='flex sm:hidden duration-1000 ' onClick={Toggle}>
            {Open ? <FaTimes size={25} /> : <FaBars size={25} />}
          </button>
        </div>
        <hr className='border-b-2  border-black' />
      </main>
      <aside>
        <div
          className={`z-10 duration-1000 p-10  fixed top-10 left-0 right-0 bottom-0 ${
            Open ? 'bg-[#336DFF] ' : ' bg-[#336DFF] translate-x-full '
          }`}
        >
          <div className='flex space-y-10 sm:hidden flex-col justify-center items-center text-white'>
            <div className='sm:hidden flex flex-col items-center  justify-around h-[80vh]  text-2xl gap-4'>
              <Link className='' to='/'>
                Home
              </Link>
              {/* <Navmenu /> */}
              <Link className='' to='/candidates'>
                Candidates
              </Link>
              <Link className='' to='/live_results'>
                Live Results
              </Link>
              <Link className='' to='/news'>
                News
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </section>
  )
}

export default Navbar
