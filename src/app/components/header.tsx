import React from 'react';

const Page = () => {
    return (
        <nav className='fixed w-[96vw] mx-4 bg-zinc-900 bg-opacity-100'>
            <div className='p-4 flex justify-between mb-2 mt-2'>
                <div className='text-4xl font-mono'>PORFOLIO</div>
                <div className='flex'>
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
