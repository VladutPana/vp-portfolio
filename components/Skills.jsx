import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png'
import AWS from '../public/assets/skills/aws.png';
import Mongo from '../public/assets/skills/mongo.png'
import Node from '../public/assets/skills/node.png'
import framermotion from '../public/assets/skills/framermotion.png'
import {motion} from 'framer-motion';
import { fadeIn, zoomIn } from '../utils/motion';


const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 '>
      <div
        className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <motion.p 
        initial="hidden"
        whileInView="show"
        variants={fadeIn('right','tween',0.1,1)}
         className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </motion.p>
        <motion.h2
         initial="hidden"
         whileInView="show"
         variants={fadeIn('right','tween',0.1,1)}
          className='py-4'>What technologies i can use</motion.h2>
        <motion.div 
        initial="hidden"
        whileInView="show"
        variants={fadeIn('right','tween',0.1,1)}
         className='grid grid-cols-2 lg:grid-cols-4 gap-8'>

          <div className='p-6 shadow-md shadow-[#5651e5] rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-[#5651e5] ease-in duration-300 lg:cursor-pointer'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Html} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md shadow-[#5651e5] rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-[#5651e5] ease-in duration-300 lg:cursor-pointer'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Css} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md shadow-[#5651e5] rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-[#5651e5] ease-in duration-300 lg:cursor-pointer'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Javascript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md shadow-[#5651e5] rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-[#5651e5] ease-in duration-300 lg:cursor-pointer'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ReactImg} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md shadow-[#5651e5] rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-[#5651e5] ease-in duration-300 lg:cursor-pointer'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Tailwind} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md shadow-[#5651e5] rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-[#5651e5] ease-in duration-300 lg:cursor-pointer'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Mongo} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Mongo</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md shadow-[#5651e5] rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-[#5651e5] ease-in duration-300 lg:cursor-pointer'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Node} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Node</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md shadow-[#5651e5] rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-[#5651e5] ease-in duration-300 lg:cursor-pointer'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Github} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md shadow-[#5651e5] rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-[#5651e5] ease-in duration-300 lg:cursor-pointer'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={NextJS} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next</h3>
              </div>
            </div>
          </div>
          
          <div className='p-6 shadow-md shadow-[#5651e5] rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-[#5651e5] ease-in duration-300 lg:cursor-pointer'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={framermotion} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Framer Motion</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md shadow-[#5651e5] rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-[#5651e5] ease-in duration-300 lg:cursor-pointer'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Firebase} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Firebase</h3>
              </div>
            </div>
          </div>


        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
