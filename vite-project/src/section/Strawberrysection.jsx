import React from 'react'
import { strawberry } from '../constant'

const Strawberrysection = () => {
  return (
    <section className='flex justify-center md:h-lvh strawbg items-center ' id='products'>
            <div className='flex justify-center flex-col mt-15 md:flex-row gap-10 left-0'>
                {strawberry.slice(0,3).map(({ name, desc, imgPath, price }) => (
                    <div className='bg-[#fff2eb4b] flex items-center flex-col  w-[10rem] rounded-2xl glassy mt-10'>
                        <div className='bg-[#ffdcdc6b] rounded-xl'>
                            <div className='mt-[-3rem]'>
                                <img src={imgPath} alt={name} className='w-full h-full object-contain' />
                            </div>
                        </div>
                        <div className=' flex flex-col items-center px-2 mt-5'>
                            <h1 className='font-medium font-poppins text-sm'>
                                {name}
                            </h1>
                            <p className='text-xs'>
                                {desc}
                            </p>
                            <p className='mt-7'>
                                <span className='font-bold'>Rp.</span>
                                {price}
                            </p>
                        </div>
                        <div>
                            <div className='mt-4'>
                                <button className='mb-[-20px] px-5 py-1 rounded-full cursor-pointer bg-black text-white font-mona text-sm '>
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
  )
}

export default Strawberrysection
