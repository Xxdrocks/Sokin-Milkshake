import React from 'react'

const Hero = () => {
  return (
    <section id='home'>
      <div className='flex justify-between items-center mt-40 md:mt-0 md:h-screen  font-poppins font-extralight'>
        <div className='flex flex-col md:w-7/11 w-screen md:ml-20 ml-5'>
          <div className='' data-aos="fade-right" data-aos-duration="1000">
            <h1 className=' md:text-6xl text-2xl'> Milkshake for the whole people <span className='font-bold bg-gradient-to-r from-[#235599] to-blue-300 bg-clip-text text-transparent'>for every people</span></h1>
          </div>
          <div className='flex text-sm mt-2' data-aos="fade-right" data-aos-duration="1100">
            <h1 className='p-1 text-gray-600'>Explore</h1>
            <div className='p-1 gap-1 flex'>
              <a className='cursor-pointer px-1 border-1 text-blue-300 border-blue-300 rounded-full my-auto'>Flavour</a>
              <a className='cursor-pointer px-1 border-1 text-blue-300 border-blue-300 rounded-full my-auto'>Variant</a>
              <a className='cursor-pointer px-1 border-1 text-blue-300 border-blue-300 rounded-full my-auto'>Topping's</a>
            </div>
          </div>
          <div data-aos="fade-right" data-aos-duration="1200">
            <button className='w-1/4 mt-5 md:p-1 text-xl rounded-full text-white glassy cursor-pointer button font-semibold'>
              Explore now
            </button>
          </div>
        </div>
        <div className='md:w-5/11 h-auto' data-aos="fade-left" data-aos-duration="1200" data-aos-offset="300">
          <img src='/images/milkshake/header.png' alt='hero' />
        </div>
      </div>
    
    



    </section>
  )
}

export default Hero
