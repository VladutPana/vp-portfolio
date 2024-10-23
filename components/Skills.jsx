import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { technologies } from '../public/constants';


const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 '>
      <div className='max-w-[77.5rem] mx-auto flex flex-col justify-center h-full'>

        <motion.p 
         initial="hidden"
         whileInView="show"
         variants={fadeIn('right','tween',0.1,1)}
         className='text-xl tracking-widest uppercase text-[#5651e5]'> Skills 
        </motion.p>

        <motion.h2
         initial="hidden"
         whileInView="show"
         variants={fadeIn('right','tween',0.1,1)}
         className='py-4'>What technologies i&apos;m familiar with
        </motion.h2>

        <motion.div 
         initial="hidden"
         whileInView="show"
         variants={fadeIn('right','tween',0.1,1)}
         className='grid grid-cols-2 lg:grid-cols-4 gap-8'>

          {technologies.map((tech) => (
              <div key={tech.id} className='p-6 shadow-md shadow-[#5651e5] rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-[#5651e5] ease-in duration-300 lg:cursor-pointer'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={tech.imageSrc} width='64px' height='64px' alt={tech.name} />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>{tech.name}</h3>
                  </div>
                </div>
              </div>
            ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Skills;
