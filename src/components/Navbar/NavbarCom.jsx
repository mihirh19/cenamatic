import React from 'react'
import { BiChevronDown, BiMenu, BiSearch } from 'react-icons/bi'
import {BsFillPersonFill} from 'react-icons/bs'
import logon from './logo.png'

function NavSm() {
  return (<>
    <div className='text-white, flex, items-center, justify-between'>
      <div>
        <h3 className='text-x1 font-bold '>It all starts here!</h3>
        <span className='text-gray-400 text-xs flex items-center cursor-pointer hover:text-white'>
          Nadiad <BiChevronDown />
        </span>
      </div>
      <div className='w-8 h-8'>
        <BiSearch className='w-full h-full' />
      </div>
    </div>
  </>)
}


function NavMd() {
  return (<>
    <div className='w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md'>
      <BiSearch />
      <input type="search" className='w-full bg-transparent border-none focus:outline-none' />

    </div>
  </>)
}


function NavLg() {
  return (<>
    <div className='container flex mx-auto px-4 items-center justify-between'>
      <div className='flex items-center w-1/2 gap-3'>
        <div className='w-10 h-10'>
          <a href="/"><img src={logon} alt="logo" className='w-full h-full' /></a>
        </div>
        <div className='w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md'>
          <BiSearch />
          <input type="search" className='w-full bg-transparent border-none focus:outline-none' placeholder='Search for movies, events, plays, sports and activities' />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
          Nadiad <BiChevronDown />
        </span>
        <a href="/about"><button className=" text-white px-2 py-1 text-sm rounded">
          About us
        </button></a>
        <div className="w-8 h-8 text-white">
            <BsFillPersonFill className="w-full h-full" />
          </div>
      </div>
    </div>
  </>)
}


const Navbar = () => {
  return (
    <>
     <nav className="bg-darkBackground-700 px-4 py-3">
                <div className="md:hidden">
                    {/* Mobile Screen */}
                    <NavSm />
                </div>
                <div className="hidden md:flex lg:hidden">
                    {/* Medium/Tab Screen */}
                    <NavMd />
                </div>
                <div className="hidden w-full lg:flex">
                    {/* Large Screen*/}
                    <NavLg />
                </div>
            </nav>
    </>
  )
}





export default Navbar;