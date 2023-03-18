import React, { Fragment, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'

import { FaTimes, FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.PNG'

function Navbar() {
  const [navState, setnavState] = useState(false)

  return (
    <section className='mb-12'>
      <main className=' fixed top-0 left-0 right-0 bg-[#edf2ff] z-[60] '>
        <div className='justify-between px-4 py-2 flex w-full'>
          <img className='h-8' src={Logo} alt='' />
          <div className='hidden space-x-6 sm:flex items-center'>
            <Link
              onClick={() => setnavState(false)}
              className='text-sm font-medium'
              to='/'
            >
              Home
            </Link>

            {/* Navmenu */}
            <div className=' text-right'>
              <Menu as='div' className='relative inline-block text-left'>
                <div>
                  <Menu.Button className='inline-flex w-full justify-center items-center rounded-md  sm:text-sm font-semibold sm:font-medium text-black  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                    Candidates
                    <ChevronDownIcon
                      className='ml-2 -mr-1 h-5 w-5  text-black '
                      aria-hidden='true'
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <div className='px-1 py-1'>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            onClick={() => setnavState(false)}
                            to='candidates/presidential'
                            className={`${
                              active
                                ? 'bg-blue-500 text-white'
                                : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Presidential
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            onClick={() => setnavState(false)}
                            to='candidates/gubernatorial'
                            className={`${
                              active
                                ? 'bg-blue-500 text-white'
                                : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Gubernatorial
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            onClick={() => setnavState(false)}
                            to='candidates/senatorial'
                            className={`${
                              active
                                ? 'bg-blue-500 text-white'
                                : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Senatorial
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            onClick={() => setnavState(false)}
                            to='candidates/house_of_reps'
                            className={`${
                              active
                                ? 'bg-blue-500 text-white'
                                : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            House of Reps
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            {/* Navmenu */}
            {/* <Link
							className="text-sm font-medium"
							to="/candidates">
							Candidates
						</Link> */}
            {/* <Link
              onClick={() => setnavState(false)}
              className='text-sm font-medium'
              to='/results'
            >
              Election Results
            </Link> */}
            <div className=' text-right'>
              <Menu as='div' className='relative inline-block text-left'>
                <div>
                  <Menu.Button className='inline-flex w-full justify-center items-center rounded-md  sm:text-sm font-semibold sm:font-medium text-black  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                    Election Results
                    <ChevronDownIcon
                      className='ml-2 -mr-1 h-5 w-5  text-black '
                      aria-hidden='true'
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <div className='px-1 py-1'>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            onClick={() => setnavState(false)}
                            to='/presidentialresults'
                            className={`${
                              active
                                ? 'bg-blue-500 text-white'
                                : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Presidential
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            onClick={() => setnavState(false)}
                            to='/gubernatorialresults' //results/gubernatorial
                            className={`${
                              active
                                ? 'bg-blue-500 text-white'
                                : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Gubernatorial
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            onClick={() => setnavState(false)}
                            to='/senatorialresults' //results/senatorial
                            className={`${
                              active
                                ? 'bg-blue-500 text-white'
                                : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Senatorial
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            onClick={() => setnavState(false)}
                            to='/horresults' // results/house_of_reps
                            className={`${
                              active
                                ? 'bg-blue-500 text-white'
                                : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            House of Reps
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            onClick={() => setnavState(false)}
                            to='/hoaresults' //results/house_of_assembly
                            className={`${
                              active
                                ? 'bg-blue-500 text-white'
                                : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            House of Assembly
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            {/* <Link
              onClick={() => setnavState(false)}
              className='text-sm font-medium'
              to='/news'
            >
              News
            </Link> */}
          </div>
          <Link onClick={() => setnavState(false)} to='/map'>
            <button className='bg-[#1748C9] sm:flex hidden text-white px-4 py-1 rounded-2xl'>
              Interactive Map
            </button>
          </Link>

          <button
            className='flex sm:hidden duration-1000 '
            onClick={() => setnavState(!navState)}
          >
            {navState ? <FaTimes size={25} /> : <FaBars size={25} />}
          </button>
        </div>
      </main>
      <aside className='sm:hidden'>
        <div
          className={`z-50 duration-1000 p-10  fixed top-10 left-0 right-0 bottom-1/3 ${
            navState ? 'bg-[#f4f7ff] ' : ' bg-[#f4f7ff] -translate-y-full '
          }`}
        >
          <div className='flex space-y-10 sm:hidden flex-col justify-center items-center text-black'>
            <div className='sm:hidden flex flex-col items-center  justify-around   text-xl font-semibold gap-4'>
              <Link onClick={() => setnavState(false)} className='' to='/'>
                Home
              </Link>
              {/* Navmenu */}
              <div className=' text-right z-10'>
                <Menu as='div' className='relative inline-block text-left'>
                  <div>
                    <Menu.Button className='inline-flex w-full justify-center items-center rounded-md  sm:text-sm font-semibold sm:font-medium text-black  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                      Candidates
                      <ChevronDownIcon
                        className='ml-2 -mr-1 h-5 w-5  text-black '
                        aria-hidden='true'
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <div className='px-1 py-1'>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              onClick={() => setnavState(false)}
                              to='candidates/presidential'
                              className={`${
                                active
                                  ? 'bg-blue-500 text-white'
                                  : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Presidential
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              onClick={() => setnavState(false)}
                              to='candidates/gubernatorial'
                              className={`${
                                active
                                  ? 'bg-blue-500 text-white'
                                  : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Gubernatorial
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              onClick={() => setnavState(false)}
                              to='candidates/senatorial'
                              className={`${
                                active
                                  ? 'bg-blue-500 text-white'
                                  : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Senatorial
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              onClick={() => setnavState(false)}
                              to='candidates/house_of_reps'
                              className={`${
                                active
                                  ? 'bg-blue-500 text-white'
                                  : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              House of Reps
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              {/* Navmenu */}

              {/* <Link
                onClick={() => setnavState(false)}
                className=''
                to='/results'
              >
                Election Results
              </Link> */}
              <div className=' text-right '>
                <Menu as='div' className='relative inline-block text-left'>
                  <div>
                    <Menu.Button className='inline-flex w-full justify-center items-center rounded-md  sm:text-sm font-semibold sm:font-medium text-black  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                      Election Results
                      <ChevronDownIcon
                        className='ml-2 -mr-1 h-5 w-5  text-black '
                        aria-hidden='true'
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <div className='px-1 py-1'>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              onClick={() => setnavState(false)}
                              to='results/presidential'
                              className={`${
                                active
                                  ? 'bg-blue-500 text-white'
                                  : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Presidential
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              onClick={() => setnavState(false)}
                              to='results/gubernatorial'
                              className={`${
                                active
                                  ? 'bg-blue-500 text-white'
                                  : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Gubernatorial
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              onClick={() => setnavState(false)}
                              to='results/senatorial'
                              className={`${
                                active
                                  ? 'bg-blue-500 text-white'
                                  : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Senatorial
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              onClick={() => setnavState(false)}
                              to='results/house_of_reps'
                              className={`${
                                active
                                  ? 'bg-blue-500 text-white'
                                  : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              House of Reps
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              onClick={() => setnavState(false)}
                              to='results/house_of_assembly'
                              className={`${
                                active
                                  ? 'bg-blue-500 text-white'
                                  : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              House of Assembly
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              {/* <Link onClick={() => setnavState(false)} className='' to='/news'>
                News
              </Link> */}
              <div>
                <Link onClick={() => setnavState(false)} to='/map'>
                  <button className='bg-[#1748C9] text-white px-4 py-1 rounded-2xl'>
                    Interactive Map
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </section>
  )
}

export default Navbar
