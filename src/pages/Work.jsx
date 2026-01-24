import React from 'react'

const Work = () => {
  return (
    <div className='ml-20'>
      <h2 className='pt-8 text-xl'>Recent Projects</h2>
      <div className='box h-45 w-80 mt-4 rounded-2xl'>
         <img className='h-45 w-80 border-2 border-violet-400 rounded-2xl' src='https://tse2.mm.bing.net/th/id/OIP.5LelkzgkN1Ay-A_CRdKCcQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3'/>
        <button className='bg-white text-black mt-30 ml-4 rounded-2xl p-2 absolute top-32'>2D Animation</button>
      </div>
      <div>
        <h5 className='text-2xl font-semibold'>The Lighthouse</h5>
        <h6 className='text-gray-600'>Adding a new light to the world</h6>
      </div>
      <div className='box h-45 w-80 mt-4 ml-30 rounded-2xl'>
         <img className='h-45 w-80 border-2 border-violet-400 rounded-2xl' src='https://th.bing.com/th/id/OIP.3WwDKkqXsAr5a-fl5QQZ1wHaE8?w=273&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3'/>
         <button className='bg-white text-black mt-30 ml-4 rounded-2xl p-2 absolute top-95 left-50'>Visual Identity</button>
      </div>
      <div>
        <h5 className='text-2xl font-semibold ml-30'>Snowscape Haven</h5>
        <h6 className='text-gray-600 ml-30'>Creating a winter wonderland</h6>
      </div>
    </div>
  )
}

export default Work