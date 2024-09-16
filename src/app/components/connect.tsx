import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const connect = () => {
  return (
    <div className='flex justify-center mb-[100px] sm:mb-0'>
      <div className='h-[60vh] w-[90%] flex flex-col justify-center items-center'>
        <div className='text-4xl mb-8'>Lets Connect</div>
        <div className='text-sm text-slate-400 md:text-left text-center'>As a passionate and dedicated professional, I'm always eager to take on new challenges and contribute to exciting projects. Whether you're looking for a skilled developer, a creative thinker, or a collaborative team member, I'm ready to bring my expertise to your next venture. My inbox is always open, and I'm enthusiastic about connecting with like-minded individuals and companies. Let's explore how we can work together to create something extraordinary!</div>
        <div>
            <div className='flex justify-center items-center gap-[10px] mt-8 cursor-pointer'>
                <FontAwesomeIcon icon={faEnvelope} style={{ color: '#74C0FC' }} size="2x" />
                <p className='text-sm'>d_kjeevanlal@es.iitr.ac.in</p>
            </div>
            <div className='flex justify-center items-center gap-[10px] mt-2 cursor-pointer'>
                <FontAwesomeIcon icon={faPhone} style={{ color: '#74C0FC' }} size="2x" />
                <p className='text-sm'>+91 9423266837</p>
            </div>
        </div>
        <div className='mt-8 w-full flex justify-center items-center gap-[20px]'>
            <a href="https://github.com/KrishnaGitHub18" target="_blank">
                <FontAwesomeIcon icon={faGithub} style={{ color: '#74C0FC' }} size="2x" />
            </a>
            <a href="https://in.linkedin.com/in/krishna-deheriya-ba2393224" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} style={{ color: '#74C0FC' }} size="2x" />
            </a>
        </div>
      </div>
    </div>
  )
}

export default connect
