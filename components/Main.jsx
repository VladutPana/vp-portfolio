
import { motion} from "framer-motion";
import React from 'react';
import { ParticleBackground } from '../utils/ParticleBackground';
import { zoomIn } from "../utils/motion";
import { mainText } from "../public/constants";

const Main = () => {
  return (
    <motion.div id='home' className='w-full h-screen text-center'>
      <motion.div className='max-w-[77.5rem] w-full h-full mx-auto p-2 flex justify-center items-center'>
        {/* parralax-like particle effect */}
      <ParticleBackground/>

        <motion.div
        initial="hidden"
        whileInView="show"
        variants={zoomIn(0.2, 1)}>
          {mainText.map((item) =>(
          <>
          <motion.p className='uppercase text-sm tracking-widest'>{item.location}</motion.p>
          <h1 className='py-4  '> {item.introduction}<span className='text-[#5651e5] italic px-2'>{item.name}</span></h1>
          <h1 className='py-2 '>{item.welcome}</h1>
          <p className='py-4 sm:max-w-[70%] m-auto'> {item.aboutMe}</p>
          </>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Main;
