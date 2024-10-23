import React from 'react';
import ProjectItem from './ProjectItem';
import { fadeIn } from '../utils/motion';
import { motion } from 'framer-motion';
import { projects } from '../public/constants';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[77.5rem] mx-auto px-2 py-16'>

        <motion.p 
         initial="hidden"
         whileInView="show"
         variants={fadeIn('right','tween',0.1,1)}
         className='text-xl tracking-widest uppercase text-[#5651e5]'> Projects
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
             tech={projects.tech}/>
          ))}
        </motion.div>
        
      </div>
    </div>
  );
};

export default Projects;
