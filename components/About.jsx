import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import meImg from '../public/assets/about.jpg';
import { HiOutlineArrowDown } from 'react-icons/hi';
import { fadeIn, slideIn } from '../utils/motion';
import {motion} from 'framer-motion';

const About = () => {
  return (
    <motion.div
    id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <motion.div 
      className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <motion.div 
         initial="hidden"
         whileInView="show"
         variants={fadeIn('right','tween',0.1,1)}
         className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>This is me</h2>
          <p className='py-2 text-gray-600'>
          I have recently graduated from the Electrical Engineering and Computer Science program at Transilvania University in Brasov. As a junior front-end developer, I am enthusiastic about the world of web development and have been involved in various projects that have allowed me to expand my skill set and knowledge base.
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li className='cursor-text'>
            Junior Front-End Developer with a strong passion for web development.
            </li>
            <li className='cursor-text'>
            Engaged in diverse personal projects, which have honed my coding skills and knowledge.
            </li>
            <li className='cursor-text'>
            Familiar with the latest web technologies and frameworks, and eager to stay up-to-date with emerging trends.
            </li>
            <li className='cursor-text'>
            Although I lack professional experience, I am highly motivated and quick to adapt to new challenges.
            </li>
          </ul>
          <Link href='/#projects'>
            <p className='flex py-2 text-gray-600 underline cursor-pointer text-2xl'>
              Check out some of my latest projects.
            <HiOutlineArrowDown
                  className='flex-auto text-gray-600 cursor-pointer hover:scale-150 ease-in duration-300'
                  size={30}
                  />
                  </p>
          </Link>
        </motion.div>
        <motion.div
         initial="hidden"
         whileInView="show"
         variants={fadeIn('right','tween',0.1,1)}
         className='w-full h-auto m-auto shadow-2xl shadow-[#5651e5] rounded-xl flex items-center justify-center p-4 hover:scale-105'>
          <Image src={meImg} className='rounded-xl' alt='/' />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
