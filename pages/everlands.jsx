import Image from 'next/image';
import React from 'react';
import everlandsIMG from '../public/assets/projects/Everlands.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const everlands = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={everlandsIMG}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Expandable Cards</h2>
          <h3>React JS / Tailwind / FramerMotion</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p className='mt-6'>
          The Expandable Cards App is an interactive web application that showcases a collection of expandable cards built with React, Tailwind CSS, and Framer Motion. This application allows users to click on cards to expand or collapse them, revealing additional information about each card.
          </p>
          <a
            href='https://github.com/VladutPana/vp-expandable-cards'
            target='_blank'
            rel='noreferrer'
          >
            <button type="button" className="py-2 px-8 mr-8 mt-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 shadow-[#5651e5] hover:scale-110 ease-in duration-300">Github</button>
          </a>
          <a
            href='https://vladutpana.github.io/vp-expandable-cards/'
            target='_blank'
            rel='noreferrer'
          >
            <button type="button" className="py-2 px-8 mr-8 mt-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 shadow-[#5651e5] hover:scale-110 ease-in duration-300">Live Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Framer Motion
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default everlands;
