import React from 'react'

const Hero = () => {
  return (
    <div className='text-center mt-20'>
      <div className='text-right flex flex-col gap-4 mb-10'>
        <button className='bg-violet-500 text-amber-50 p-2'>Street of Creativity, 23</button>
        <button className='bg-violet-500 text-amber-50 p-2'>Milan 20121, Italy</button>
      </div>
      <div className='mix-blend-normal text-gray-400'>
        <h5>Igniting the Spark of Creativity</h5>
      </div>
      <div>
        <h1><i class="ri-guide-fill"></i></h1>
        <h1 className='absolute left-76 rotate-y-25 inline-block rotate-[-10deg]'><img className='w-55 relative rounded-md' src='https://th.bing.com/th/id/R.a896f6b46453262ca856913474c98497?rik=8RXy9SxcuuPbEw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f6%2f0%2fd%2f461424.jpg&ehk=6nKZA0fTqetr1rxz9q09kiSxtNbeaCHw71kIH6tmj34%3d&risl=&pid=ImgRaw&r=0'/></h1>
        <h1 className='text-8xl font-semibold'>Unleash Your</h1>
        <h1 className='mt-5 text-8xl font-semibold'>Brand with Our</h1>
        <h1 className='mt-5 text-8xl font-semibold'><span className='bg-yellow-200 rounded-xl p-x-4 rotate-z-35 inline-block rotate-[-10deg] hover:rotate-0'>Magico</span> Design</h1>
        <h1 className='absolute left-260  bottom-3 rotate-z-25 inline-block rotate-[-10deg]'><img className='w-55 relative rounded-md' src='https://th.bing.com/th/id/R.eecbe56338a05e81a98eb52f44240189?rik=ncIT74WEoHaKAA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fc%2f6%2f1%2f461187.jpg&ehk=Q9yVyyMzIw8lsCQPw3wkrBbyNp9jwOENfdKBz0NDKrQ%3d&risl=&pid=ImgRaw&r=0'/></h1>
      </div>
      <div className='text-left pl-50 mt-10 font-semibold absolute'>
        <button className='p-2 rounded-4xl border-2 border-purple-400 rotate-y-35 inline-block rotate-[-10deg]'>Create Magic</button>
        <h1 className='pl-9 relative bottom-3'><img className='inline-block w-[30px]' src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7916148/click-icon-md.png"/></h1>
      </div>
    </div>
  )
}

export default Hero