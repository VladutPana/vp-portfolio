
import { motion} from "framer-motion";
import React from 'react';
import { ParticleBackground } from '../utils/ParticleBackground';
import { zoomIn } from "../utils/motion";

const Main = () => {
  return (
    <motion.div 
    id='home' className='w-full h-screen text-center'
    >
      <motion.div className='max-w-[77.5rem] w-full h-full mx-auto p-2 flex justify-center items-center'>
      <ParticleBackground/>
        <motion.div
        initial="hidden"
        whileInView="show"
        variants={zoomIn(0.2, 1)}>
          <motion.p className='uppercase text-sm tracking-widest text-gray-600'>
           Ploiești / București, RO
          </motion.p>
          <h1 className='py-4 text-gray-700'>
            Hello, i&apos;m <span className='text-[#5651e5] italic'> Vlad</span>
          </h1>
          <h1 className='py-2 text-gray-700'>Welcome to my portfolio !</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I&apos;m focused on building responsive front-end web applications
            using various frameworks like React.js, Next.js with styling frameworks 
            such as tailwind CSS , animation frameworks such as framer-motion 
            and back-end technologies like MongoDB or Firebase.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Main;
