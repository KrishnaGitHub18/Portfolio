"use client";

import React from 'react';
import Typewriter from 'typewriter-effect';
import img from '../../../public/Images/profileimg.png';
import Image from 'next/image';

function mainScreen() {
    return (
        <>
            <div className='flex flex-col md:flex-row m-[5px] pt-[100px]'>


                <div className='h-[40vh] w-[97vw] flex flex-col justify-center items-center block md:hidden'>
                    <div className='h-[300px] w-[300px] rounded-full bg-zinc-900 overflow-hidden flex justify-center items-center'>
                        <Image src={img} alt="Profile" className='h-[70%] w-[70%] object-cover' />
                    </div>
                    {/* <div className='text-3xl font-medium mt-4'>KRISHNA DEHERIYA</div> */}
                </div>


                {/* CONTENT */}
                <div className='h-[85vh] md:w-[60vw] w-[97vw] pl-4 justify-center '>
                    <div className='mt-[15%] flex flex-col justify-center md:justify-start items-center md:items-start'>
                        <div className='lg:text-8xl md:text-7xl text-5xl  m-4 font-black  bg-gradient-to-r from-[#3d36b8] via-[#096f79] to-[#00d4ff] bg-clip-text text-transparent'>Hello, I'm</div>
                        <div className='flex lg:text-6xl md:text-5xl text-3xl m-4 font-black'>
                            F<Typewriter
                                options={{
                                    strings: ["ull Stack Web Developer"],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100,
                                    deleteSpeed: 30
                                }}
                            />
                        </div>
                    </div>

                    <div className='flex mt-[12%] justify-center md:justify-start items-center md:items-star'>
                        <div className='p-[15px] mx-[10px] border-4 rounded-3xl border-sky-500 cursor-pointer text-slate-400 hover:text-white'>
                            Contact
                        </div>
                        <a
                            className='p-[15px] mx-[10px] border-4 rounded-3xl border-sky-500 cursor-pointer text-slate-400 hover:text-white'
                            href='https://drive.google.com/uc?export=download&id=18U0YC0wbDzvUwBCndUe2dcTIoTpe5as0'
                            target="_blank"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                {/* IMAGE */}
                <div className='h-[80vh] w-[40vw] flex flex-col justify-center items-center md:flex hidden'>
                    <div className='xl:h-[400px] xl:w-[400px] lg:h-[340px] lg:w-[340px] md:h-[280px] md:w-[280px] rounded-full bg-zinc-900 overflow-hidden flex justify-center items-center'>
                        <Image src={img} alt="Profile" className='h-[70%] w-[70%] object-cover' />
                    </div>
                    <div className='text-3xl font-medium mt-4'>KRISHNA DEHERIYA</div>
                </div>
            </div>
        </>
    );
}

export default mainScreen
