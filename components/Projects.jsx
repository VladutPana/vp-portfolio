
import React from 'react';
import ToDoList from '../public/assets/projects/ToDoList2.png';
import breathe from '../public/assets/projects/Breathe.png';
import expandableCards from '../public/assets/projects/ExpandableCards.png';
import carousel from '../public/assets/projects/Carousel.png';
import quotes from '../public/assets/projects/Quote.png';
import ezential from '../public/assets/projects/ezential.png';
import sociosphere from '../public/assets/projects/Sociosphere.png';
import ProjectItem from './ProjectItem';
import { fadeIn } from '../utils/motion';
import {motion} from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'To-Do List',
    backgroundImg: ToDoList,
    projectUrl: '/todoApp',
    tech: 'Javascript',
  },
  {
    id: 2,
    title: 'Breathing app',
    backgroundImg: breathe,
    projectUrl: '/breatheApp',
    tech: 'Javascript',
  },
  {
    id: 3,
    title: 'Expandable cards',
    backgroundImg: expandableCards,
    projectUrl: '/expandableCardsApp',
    tech: 'React',
  },
  {
    id: 4,
    title: 'Image Carousel',
    backgroundImg: carousel,
    projectUrl: '/carouselApp',
    tech: 'React',
  },
  {
    id: 5,
    title: 'Random Advices',
    backgroundImg: quotes,
    projectUrl: '/quotesApp',
    tech: 'React',
  },
  {
    id: 6,
    title: 'Ezential app',
    backgroundImg: ezential,
    projectUrl: '/ezentialApp',
    tech: 'React',
  },
];


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[77.5rem] mx-auto px-2 py-16'>
        <motion.p 
        initial="hidden"
        whileInView="show"
        variants={fadeIn('right','tween',0.1,1)}
        className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </motion.p>
        <motion.h2 
          initial="hidden"
          whileInView="show"
          variants={fadeIn('right','tween',0.1,1)}
         className='py-4'>Check out my latest projects !
         </motion.h2>
        <motion.div 
         initial="hidden"
         whileInView="show"
         variants={fadeIn('right','tween',0.1,1)}
         className='grid md:grid-cols-2 gap-8'>

          {projects.map((projects) => (
            <ProjectItem
            key = {projects.id}
            title={projects.title}
            backgroundImg={projects.backgroundImg}
            projectUrl={projects.projectUrl}
            tech={projects.tech}
            />
          ))}
          
            </motion.div>
      </div>
    </div>
  );
};

export default Projects;
