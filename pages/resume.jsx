import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { resumeText, resumeSkills, resumeHighschool, resumeCollege, resumeExperience } from '../public/constants';

const resume = ({darkMode}) => {
  return (
    <>
      <Head>
        <title>Vlad | Resume</title>
        <meta name='description' content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.' />
        <link rel='icon' href='./public/fav.png' />
      </Head>

      <div className='max-w-[59rem] mx-auto p-2 pt-[7.5rem]'>
        <h2 className='text-center'>Resume</h2>
        {/* gray label */}
        <div className={`${darkMode ? "bg-[#0f172a]" : "bg-[#d0d4d6]"} my-4 p-4 w-full flex justify-between items-center`}>
          <h2 className='text-center'>Vlad Pană</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/vlad-pan%C4%83/'
              target='_blank'
              rel='noreferrer'>
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/VladutPana/'
              target='_blank'
              rel='noreferrer'>
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>

        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Excited to learn <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>

         <p>{resumeText}</p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            {resumeSkills.map((item) => (
              <span key={item.id} className='px-2'>{item.title}</span>
            ))}
          </p>
        </div>

        {/* Education */}
        <h5 className='text-center underline text-[18px] py-4'> Education </h5>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Liceul Tehnologic Administrativ Si De Servicii Victor Slăvescu
            </span>
            <span className='px-2'>|</span>Ploiești, RO
          </p>
          <p className='py-1 italic'>Baccalaurette in Mathematics-Informatics profile (2015 - 2019)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            {resumeHighschool.map((item) =>(
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'> Universitatea Transilvania din Brașov </span>
            <span className='px-2'>|</span>Brașov, RO
          </p>
          <p className='py-1 italic'>Bachelor&apos;s degree in Computer science and Electrical Engineering(2019 - 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            {resumeCollege.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>

        {/* Experience */}
        <h5 className='text-center underline text-[18px] py-4'>Professional Experience</h5>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>IBM Romania</span>
            <span className='px-2'>|</span>Brașov, RO
          </p>
          <p className='py-1 italic'>Academic workshop (07/2022 – 10/2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            {resumeExperience.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
