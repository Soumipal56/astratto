import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full h-10 border-b-2 border-gray-300'>
        <div className='flex gap-8 ml-6'>
          <h1>Services</h1>
          <h1>Work</h1>
          <h1>About</h1>
        </div>
        <div className='text-center text-base font-bold'>
          <h1>ASTRATTO</h1>
        </div>
        <div className='flex gap-8 mr-6'>
          <h1>Careers</h1>
          <button>CONTACT US</button>
        </div> 
    </div>
  )
}

export default Navbar