import Image from 'next/image';
import React from 'react';
import breatheIMG from '../public/assets/projects/Breathe.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const breathe = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={breatheIMG}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[77.5rem] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Breathing App</h2>
          <h3>HTML / CSS / JAVASCRIPT</h3>
        </div>
      </div>

      <div className='max-w-[77.5rem] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p className='mt-6'>
          Developing a breathing app in JavaScript presents a versatile and valuable project with numerous advantages. This overview highlights the key reasons to undertake such an endeavor:
          Breathing exercises are well-established stress and anxiety management tools.
          A JavaScript-based breathing app offers users a practical means of practicing controlled breathing for relaxation and stress reduction.
          This app includes user-friendly interfaces with animations and guided breathing exercises, enhancing the overall user experience.
          </p>
          <a
            href='https://github.com/VladutPana/vp-breathing-app-repo'
            target='_blank'
            rel='noreferrer'
          >
            <button type="button" className="py-2 px-8 mr-8 mt-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 shadow-[#5651e5] hover:scale-110 ease-in duration-300">Github</button>
          </a>
          <a
            href='https://vladutpana.github.io/vp-breathing-app-repo/'
            target='_blank'
            rel='noreferrer'
          >
            <button type="button" className="py-2 px-8 mr-8 mt-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 shadow-[#5651e5] hover:scale-110 ease-in duration-300">Live Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HTML
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
            </div>
          </div>
        </div>
        <Link className='col-span-4 lg:text-2xl lg:my-10 lg:hover:scale-125 duration-300 text-center lg:max-w-[5rem]' href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default breathe;