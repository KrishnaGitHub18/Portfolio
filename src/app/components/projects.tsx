import React from 'react';
import Image from 'next/image';
import foodway from '../../../public/Images/foodway.png';
import quizapp from '../../../public/Images/Group 2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const projects = () => {
    return (
        <div className='flex flex-col justify-center items-center pt-[100px] h-[100vh] w-[96vw] mx-4 mb-[120px] mt-[70px] sm:mb-0 sm:mt-0'>

            <div className='text-4xl font-semibold w-[90%] h-[10%] flex justify-center items-center'>My Projects</div>

            <div className='w-[90%] h-[160%] sm:h-[80%] flex flex-col sm:flex-row justify-around items-center mt-[30px] sm:mt-0'>

                <div className='h-[90%] w-[80%] sm:w-[40%] '>
                    <div className='relative h-[70%] overflow-hidden rounded-xl'>
                        <div className='absolute bottom-0 left-0 h-[60px] w-full flex justify-center items-center mb-[10px] gap-[20px] z-10 backdrop-blur-lg'>
                            <a href="https://github.com/KrishnaGitHub18/Food-Site---Frontend" target="_blank">
                                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: "#000000" }} />
                            </a>
                            <a href="https://food-way.vercel.app/" target="_blank">
                                <FontAwesomeIcon icon={faEye} size="2x" style={{ color: "#000000" }} />
                            </a>
                        </div>
                        <Image src={foodway} alt="Profile" className='object-cover w-full h-full' />
                    </div>

                    <div className='mt-[10px] flex justify-center items-center text-md sm:text-2xl'>FoodWay</div>
                    <div className='flex justify-center items-center text-sm sm:text-md'>Online food odering website</div>
                </div>

                <div className='h-[90%] w-[80%] sm:w-[40%]'>
                    <div className='relative h-[70%] overflow-hidden rounded-xl'>
                        <div className='absolute bottom-0 left-0 h-[60px] w-[90%] mx-[5%] sm:w-full sm:mx-0 flex justify-center items-center mb-[10px] gap-[20px] z-10 backdrop-blur-lg'>
                            <a href="https://github.com/KrishnaGitHub18/FlashCards-frontend-" target="_blank">
                                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: "#000000" }} />
                            </a>
                            <a href="https://flash-cards-frontend-taupe.vercel.app/" target="_blank">
                                <FontAwesomeIcon icon={faEye} size="2x" style={{ color: "#000000" }} />
                            </a>
                        </div>
                        <Image src={quizapp} alt="Profile" className='object-cover w-full h-full' />
                    </div>

                    <div className='mt-[10px] flex justify-center items-center text-md sm:text-2xl'>Quiz App</div>
                    <div className='flex justify-center items-center text-sm sm:text-md'>Flashcard learning app</div>
                </div>

            </div>

        </div>
    )
}

export default projects
