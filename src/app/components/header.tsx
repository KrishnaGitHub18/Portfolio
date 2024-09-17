import React from 'react';

const Page = () => {
    return (
        <nav className='fixed w-[97vw] mx-4 bg-zinc-900 bg-opacity-100 z-50 top-0 mr-[1vw]'>
            <div className='p-4 flex md:justify-between mb-2 mt-2 justify-center items-center'>
                <div className='text-4xl font-mono font-semibold'>PORTFOLIO</div>
                <div className='hidden md:flex'>
                    <div className='p-3 text-slate-400 hover:text-white cursor-pointer'>About</div>
                    <div className='p-3 text-slate-400 hover:text-white cursor-pointer'>Projects</div>
                    <div className='p-3 text-slate-400 hover:text-white cursor-pointer'>Contact</div>
                </div>
            </div>
            <hr className='border-slate-400'/>
        </nav>
    );
}

export default Page;
