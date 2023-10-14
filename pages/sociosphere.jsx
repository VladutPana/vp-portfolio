import Image from 'next/image';
import React from 'react';
import sociosphereIMG from '../public/assets/projects/sociosphere.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const sociosphere = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={sociosphereIMG}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Sociosphere Social Media</h2>
          <h3>MERN stack</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p className='mt-6'>
            This appplication was built using the MERN stack. 
            It was my university's license project. It features a social media clone using Mongo database and Redux for state control.
            This is my most worked on project, spending over months of time to get it done. A lot of external technologies used, like yup & formik for form and form control, jwebtoken for authentification purposes and many others like multer, react router, material UI, mongoose etc.
            It has a dark mode, i took inspiration from Twitter's design, tried to recreate it as best as i could. It can be improved a lot by adding more logic and algorithms and adding new features.
          </p>
          <a
            href='https://github.com/'
            target='_blank'
            rel='noreferrer'
          >
             <button type="button" class="py-2 px-8 mr-8 mt-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 shadow-[#5651e5] hover:scale-110 ease-in duration-300">Github</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Mongo DB
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Express JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Node JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Redux
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Yup & Formik
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

export default sociosphere;
