import React from 'react'
import { products } from '../constant'

const ChocolateSection = () => {
    return (
        <section className='flex justify-center h-lvh chocobg items-center mt-20' id='products'>
            <div className='flex justify-center flex-wrap gap-10 left-0'>
                {products.slice(0,3).map(({ name, desc, imgPath, price }) => (
                    <div className='bg-[#d2c1b659] flex items-center flex-col  w-[10rem] rounded-2xl glassy'>
                        <div className='bg-[#f8f3d981] rounded-xl'>
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

export default ChocolateSection
