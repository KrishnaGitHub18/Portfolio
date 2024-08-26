import React from 'react';
import img from './about-image.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';

// IMAGES IMPORT
import CPP from './Images/C++.png'
import HTML from './Images/HTML.png';
import CSS from './Images/CSS.png';
import Javascript from './Images/Javacript.png';
import Tailwind from './Images/Tailwind.png';
import Typescript from './Images/Typescript.png';
import NextJS from './Images/next-js.jpeg';
import ReactJS from './Images/react.png';
import Redux from './Images/Redux.png';
import NodeJS from './Images/NodeJS.png';
import ExpressJS from './Images/ExpressJS.png';
import MongoDB from './Images/MongoDB.png';
import MySQL from './Images/MySQL.png';
import Git from './Images/Git.png';
import Postman from './Images/Postman.svg';

const about = () => {
  return (
    <div className='flex justify-center'>
      <div className='h-[80vh] w-[95vw] flex justify-around items-center'>
        <div className='h-[70%] w-[28%] overflow-hidden'>
          <Image src={img} alt="Profile" className='object-cover' />
        </div>
        <div className='h-[70%] w-[49%] p-4'>
          <div className='mb-[30px] text-4xl font-semibold'>About Me</div>
          <div>I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, Typescript, React, Node.js, Express, mySQL, MongoDB, NextJS, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.</div>
          <div className='mt-[50px] text-xl'>Languages and Tools:</div>
          <div className='flex flex-wrap mt-[15px]'>
            <div className='h-[60px] w-[60px] m-1 overflow-hidden'>
              <Image src={CPP} alt="Profile" className='object-cover' />
            </div>
            <div className='h-[60px] w-[60px] m-1 overflow-hidden'>
              <Image src={HTML} alt="Profile" className='object-cover' />
            </div>
            <div className='h-[60px] w-[60px] m-1 overflow-hidden'>
              <Image src={CSS} alt="Profile" className='object-cover' />
            </div>
            <div className='h-[60px] w-[60px] m-1 overflow-hidden'>
              <Image src={Javascript} alt="Profile" className='object-cover' />
            </div>
            <div className='h-[60px] w-[60px] m-1 overflow-hidden'>
              <Image src={Tailwind} alt="Profile" className='object-cover' />
            </div>
            <div className='h-[60px] w-[60px] m-1 overflow-hidden'>
              <Image src={Typescript} alt="Profile" className='object-cover' />
            </div>
            <div className='h-[60px] w-[60px] m-1 overflow-hidden'>
              <Image src={NextJS} alt="Profile" className='object-cover' />
            </div>
            <div className='h-[60px] w-[60px] m-1 overflow-hidden'>
              <Image src={ReactJS} alt="Profile" className='object-cover' />
            </div>
            <div className='h-[60px] w-[60px] m-1 overflow-hidden'>
              <Image src={Redux} alt="Profile" className='object-cover' />
            </div>
            <div className='h-[60px] w-[60px] m-1 overflow-hidden'>
              <Image src={NodeJS} alt="Profile" className='object-cover' />
            </div>
            <div className='h-[60px] w-[60px] m-1 overflow-hidden'>
              <Image src={ExpressJS} alt="Profile" className='object-cover' />
            </div>
            <div className='h-[60px] w-[60px] m-1 overflow-hidden'>
              <Image src={MongoDB} alt="Profile" className='object-cover' />
            </div>
            <div className='h-[60px] w-[60px] m-1 overflow-hidden'>
              <Image src={MySQL} alt="Profile" className='object-cover' />
            </div>
            <div className='h-[60px] w-[60px] m-1 overflow-hidden'>
              <Image src={Git} alt="Profile" className='object-cover' />
            </div>
            <div className='h-[60px] w-[60px] m-1 overflow-hidden'>
              <Image src={Postman} alt="Profile" className='object-cover' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about

{/* <FontAwesomeIcon icon={faHtml5} size="4x" style={{ color: '#FFD43B' }} />
<FontAwesomeIcon icon={faCss3} size="4x" style={{ color: "#FFD43B" }} />
<FontAwesomeIcon icon={faJs} style={{ color: "#F7DF1E", fontSize: "4rem" }} /> */}