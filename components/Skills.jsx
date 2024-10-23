import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactJS from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png'
import Mongo from '../public/assets/skills/mongo.png'
import Node from '../public/assets/skills/node.png'
import Framermotion from '../public/assets/skills/framermotion.png'
import {motion} from 'framer-motion';
import { fadeIn } from '../utils/motion';


const technologies = [
  { id: 1, name: 'HTML', imageSrc: Html },
  { id: 2, name: 'CSS', imageSrc: Css },
  { id: 3, name: 'Javascript', imageSrc: Javascript },
  { id: 4, name: 'React', imageSrc: ReactJS },
  { id: 5, name: 'Tailwind', imageSrc: Tailwind },
  { id: 6, name: 'Mongo', imageSrc: Mongo },
  { id: 7, name: 'Node', imageSrc: Node },
  { id: 8, name: 'Github', imageSrc: Github },
  { id: 9, name: 'Next', imageSrc: NextJS },
  { id: 10, name: 'FramerMotion', imageSrc: Framermotion },
  { id: 11, name: 'Firebase', imageSrc: Firebase },
];

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 '>
      <div
        className='max-w-[77.5rem] mx-auto flex flex-col justify-center h-full'>
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
          className='py-4'>What technologies i'm familiar with
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
