import React from 'react'

const Services = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className='font-sm text-2xl px-8 pt-6'>Our Services</h1>
        <p className='text-gray-600 font-xs'>Discover a wide range of opportunities through <br/>a comprehensive range of qualified services</p>
      </div>
      <div className='flex gap-9 flex-wrap justify-center mt-10'>
        <div className='box bg-gray-200 px-5 pt-5 m-4 rounded-lg shadow-lg h-[350px] w-[300px]'>
          <h4 className='text-2xl font-semibold pb-2 border-b border-violet-400'>Motion <br/>Graphics</h4>
          {/* <h1 className='h-10 w-10 bg-violet-600'><i class="ri-arrow-right-up-long-line"></i></h1> */}
          <p className='pt-3 text-gray-500'>Bring your ideas to life through dynamic visuals and engaging animations</p>
          <h1><img className='h-40 w-full rounded-md pt-3' src="https://tse3.mm.bing.net/th/id/OIP.FLaFMPA1awTe8tXCz48oQQHaEo?rs=1&pid=ImgDetMain&o=7&rm=3"/></h1>
        </div>
        <div className='box bg-gray-200 m-4 rounded-lg shadow-lg h-[350px] w-[300px]'></div>
        <div className='box bg-gray-200 m-4 rounded-lg shadow-lg h-[350px] w-[300px]'></div>
      </div>
    </div>
  )
}

export default Services