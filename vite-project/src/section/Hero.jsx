import React from 'react'

const Hero = () => {
  return (
    <section id='home'>
      <div className='flex justify-between items-center mt-40 md:mt-0 md:h-screen  font-poppins font-extralight'>
        <div className='flex flex-col md:w-3/11 w-screen  md:ml-40 ml-5'>
          <div className=''>
            <h1 className=' md:text-3xl text-2xl'> Milkshake for the whole people <span className='font-bold'>for every people</span></h1>
          </div>
          <div className='flex text-xs mt-2'>
            <h1 className='p-1 text-gray-600'>Explore</h1>
            <div className='p-1 gap-1 flex'>
              <a className='cursor-pointer px-1 border-1 text-blue-300 border-blue-300 rounded-full my-auto'>Flavour</a>
              <a className='cursor-pointer px-1 border-1 text-blue-300 border-blue-300 rounded-full my-auto'>Variant</a>
              <a className='cursor-pointer px-1 border-1 text-blue-300 border-blue-300 rounded-full my-auto'>Topping's</a>
            </div>
          </div>
          <button className='w-1/4 md:w-1/3 mt-5 md:p-1 text-xs rounded-full bg-black text-white glassy cursor-pointer button'>
            Explore now
          </button>
        </div>
        <div className='md:w-5/11 h-auto'>
          <img src='/images/milkshake/header.png' alt='hero' />
        </div>
      </div>


    </section>
  )
}

export default Hero
