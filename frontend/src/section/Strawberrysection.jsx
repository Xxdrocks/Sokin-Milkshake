import React, { use, useRef, useState } from 'react'
import { strawberry } from '../constant'

const ChocolateSection = () => {

    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -200 : 200,
                behavior: 'smooth',
            });
        }
    };

    const [isClicked, setIsClicked] = useState(null);

    return (
        <section className='strawbg' id='products'>
            <div className='flex justify-center items-center text-red-600 font-poppins font-bold text-4xl '>
                <h1>
                    "Strawberry"
                </h1>
            </div>
            <div  className='flex flex-row justify-center h-screen items-center'>
                <button onClick={() => scroll('left')} className="bg-[#FF6363] z-10 text-white p-2 mx-5 rounded-full lg:flex hidden cursor-pointer">
                    <img src='/images/left.png' alt='left' className='w-4' />
                </button>
                <div ref={scrollRef} className='xl:w-[1000px] flex justify-center flex-col mt-15 xl:flex-row gap-10 overflow-x-auto overflow-y-visible scrollbar-hide scroll-smooth snap-x snap-mandatory py-30'>
                    {strawberry.map(({ name, desc, imgPath, price }, product) => (
                        <div key={product} onClick={() => setIsClicked(product)} className={`
                            bg-[#ff969610] flex items-center flex-col flex-shrink-0 rounded-2xl glassy mt-10 cursor-pointer transition-all duration-500 ease-in-out
                            ${isClicked === product ? "scale-110 w-[12rem] shadow-2xl" : "scale-95 w-[10rem] opacity-80"}
                        `}>
                            <div className='bg-[#ff636321] rounded-xl'>
                                <div className='mt-[-3rem]' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                    <img src={imgPath} alt={name} className='w-full h-full object-contain' />
                                </div>
                            </div>
                            <div className=' flex flex-col items-center px-2 mt-5'>
                                <h1 className='font-semibold font-poppins text-sm'>
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
                                    <a className='mb-[-20px] px-6 py-2 rounded-full cursor-pointer bg-black text-white font-mona text-xs '>
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button onClick={() => scroll('?')} className="bg-[#FF6363] z-10 text-white p-2 mx-5 rounded-full hidden lg:flex cursor-pointer">
                    <img src='/images/right.png' alt='left' className='w-4' />
                </button>
            </div>
        </section>
    )
}

export default ChocolateSection
