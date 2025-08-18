import React, { use, useRef, useState } from 'react'
import { chocolate } from '../constant'

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
        <section className='flex justify-center h-screen chocobg items-center md:mt-20' id='products'>
            <button onClick={() => scroll('left')} className="bg-[#541212] z-10 text-white p-2 mx-5 rounded-full lg:flex hidden cursor-pointer">
                <img src='/images/left.png' alt='left' className='w-4' />
            </button>
            <div ref={scrollRef} className='xl:w-[1000px] flex justify-center flex-col mt-15 xl:flex-row gap-10 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory overflow-y-hidden'>
                {chocolate.map(({ name, desc, imgPath, price }, product) => (
                    <div key={product} onClick={() => setIsClicked(product)} className={`
                            bg-[#d2c1b659] flex items-center flex-col flex-shrink-0 rounded-2xl glassy mt-10 cursor-pointer transition-all duration-500 ease-in-out
                            ${isClicked === product ? "scale-110 w-[12rem] shadow-2xl" : "scale-95 w-[10rem] opacity-80"}
                        `}>
                        <div className='bg-[#f8f3d981] rounded-xl'>
                            <div className='mt-[-3rem]' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
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
                                <a className='mb-[-20px] px-5 py-1 rounded-full cursor-pointer bg-black text-white font-mona text-sm '>
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={() => scroll('?')} className="bg-[#541212] z-10 text-white p-2 mx-5 rounded-full hidden lg:flex cursor-pointer">
                <img src='/images/right.png' alt='left' className='w-4' />
            </button>
        </section>
    )
}

export default ChocolateSection
