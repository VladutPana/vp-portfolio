import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ToDoList from '../public/assets/projects/ToDoList2.png';
import breathe from '../public/assets/projects/Breathe.png';
import everlands from '../public/assets/projects/Everlands.png';
import carousel from '../public/assets/projects/Carousel.png';
import quotes from '../public/assets/projects/Quote.png';
import sociosphere from '../public/assets/projects/Sociosphere.png';
import ProjectItem from './ProjectItem';
import { fadeIn } from '../utils/motion';
import {motion} from 'framer-motion';


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <motion.p 
        initial="hidden"
        whileInView="show"
        variants={fadeIn('left', 'tween', 0.2, 1.5)}
        className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </motion.p>
        <motion.h2 
         initial="hidden"
         whileInView="show"
         variants={fadeIn('left', 'tween', 0.2, 1.5)}
         className='py-4'>Check out my latest projects !</motion.h2>
        <motion.div 
         initial="hidden"
         whileInView="show"
         variants={fadeIn('right', 'tween', 0.2, 1.5)}
         className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='To-Do List'
            backgroundImg={ToDoList}
            projectUrl='/todo'
            tech='Javascript'
          />
          <ProjectItem
            title='Breathing app'
            backgroundImg={breathe}
            projectUrl='/breathe'
            tech='Javascript'

          />
          <ProjectItem
            title='Everlands'
            backgroundImg={everlands}
            projectUrl='/everlands'
            tech='React'

          />
          <ProjectItem
            title='Image Carousel'
            backgroundImg={carousel}
            projectUrl='/carousel'
            tech='REACT'

          />
          <ProjectItem
            title='Random Advices'
            backgroundImg={quotes}
            projectUrl='/quotes'
            tech='REACT'
            
            />
          {/* <ProjectItem
            title='Sociosphere Social Media'
            backgroundImg={sociosphere}
            projectUrl='/sociosphere'
            tech='MERN'
            
            /> */}
            </motion.div>
      </div>
    </div>
  );
};

export default Projects;
