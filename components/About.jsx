import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import meImg from '../public/assets/about.jpg';
import { HiOutlineArrowDown } from 'react-icons/hi';
import { fadeIn } from '../utils/motion';
import {motion} from 'framer-motion';
import { ulText } from '../public/constants';

const About = () => {
  return (
    <motion.div
    id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <motion.div 
      className='max-w-[77.5rem] m-auto md:grid grid-cols-3 gap-8'>
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
            {ulText.map((item) => (
              <li key={item.id} className='cursor-text'>
            {item.text}
            </li>
            ))}
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
