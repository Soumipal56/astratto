import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full h-12 border-b-2 border-gray-300 mix-blend-normal'>
        <div className='flex gap-8 ml-6'>
          <Link to ='/services'>Services</Link>
          <Link to ='/work'>Work</Link>
          <h1>About</h1>
        </div>
        <div className='text-center text-base font-bold'>
          <h1>ASTRATTO</h1>
        </div>
        <div className='flex gap-8 mr-6'>
          <h1>Careers</h1>
          <button className='p-0.5 border-2 border-purple-400 rounded-2xl mix-blend-normal'>CONTACT US <i class="ri-arrow-right-up-long-fill"></i></button>
        </div> 
    </div>
  )
}

export default Navbar