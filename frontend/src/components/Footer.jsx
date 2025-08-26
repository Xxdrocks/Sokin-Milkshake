import React from 'react'

const Footer = () => {
    return (
        <section>
            <div className='items-center flex flex-row justify-center font-poppins bg-gradient-to-r from-[#235599] to-[#9db9ff] p-5'>
                <img src='/images/logo.png' alt='logo' className='w-40 h-auto' />
                <div className='flex flex-row gap-5'>
                    <div className='flex flex-col text-white mx-10'>
                        <h1 className='font-semibold'>
                            About Our Milkshake
                        </h1>
                        <div className='text-[#BBDCE5] flex flex-col cursor-pointer'>
                            <a href='#home'>
                                Home
                            </a>
                            <a href='#about'>
                                About us
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col text-white mx-10'>
                        <h1 className='font-semibold'>
                            Legal
                        </h1>
                        <div className='text-[#BBDCE5] flex flex-col cursor-pointer'>
                            <a href='#'>
                                Terms of Service
                            </a>
                            <a href='#'>
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col text-white mx-10'>
                        <h1 className='font-semibold'>
                            Follow Us
                        </h1>
                        <div className='text-[#BBDCE5] flex flex-col cursor-pointer'>
                            <a href='#'>
                                Instagram
                            </a>
                            <a href='#'>
                                Tiktok
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
