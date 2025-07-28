import React from 'react'

const Hero = () => {
  return (
    <section id='home'>
      <div className='flex justify-between items-center h-screen font-poppins font-extralight'>
        <div className='flex flex-col w-3/11 md:ml-40'>
          <div className=''>
            <h1 className=' text-3xl'> Milkshake for the whole people <span className='font-bold'>for every people</span></h1>
          </div>
          <div className='flex text-xs mt-2'>
            <h1 className='p-1 text-gray-600'>Explore</h1>
            <div className='p-1 gap-1 flex'>
              <a className='cursor-pointer px-1 border-1 text-blue-300 border-blue-300 rounded-full my-auto'>Flavour</a>
              <a className='cursor-pointer px-1 border-1 text-blue-300 border-blue-300 rounded-full my-auto'>Variant</a>
              <a className='cursor-pointer px-1 border-1 text-blue-300 border-blue-300 rounded-full my-auto'>Topping's</a>
            </div>
          </div>
          <button className='w-1/3 mt-5 p-1 rounded-full bg-black text-white glassy cursor-pointer button'>
            Explore now
          </button>
        </div>
        <div className='w-5/11 h-auto'>
          <img src='/images/milkshake/header.png' alt='hero' />
        </div>
      </div>


    </section>
  )
}

export default Hero
