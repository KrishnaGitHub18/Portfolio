"use client";

import React from 'react';
import Typewriter from 'typewriter-effect';
import img from './profileimg.png';
import Image from 'next/image';

function mainScreen() {
    return (
        <>
            <div className='flex m-[5px] pt-[100px]'>
                {/* CONTENT */}
                <div className='h-[85vh] w-[60vw] pl-4 justify-center'>
                    <div className='mt-[15%]'>
                        <div className='text-8xl m-4 font-black  bg-gradient-to-r from-[#3d36b8] via-[#096f79] to-[#00d4ff] bg-clip-text text-transparent'>Hello, I'm</div>
                        <div className='flex text-6xl m-4 font-black'>
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

                    <div className='flex mt-[12%]'>
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
                <div className='h-[80vh] w-[40vw] flex flex-col justify-center items-center'>
                    <div className='h-[400px] w-[400px] rounded-full bg-zinc-900 overflow-hidden flex justify-center items-center'>
                        <Image src={img} alt="Profile" className='h-[70%] w-[70%] object-cover' />
                    </div>
                    <div className='text-3xl font-medium mt-4'>KRISHNA DEHERIYA</div>
                </div>
            </div>
        </>
    );
}

export default mainScreen
