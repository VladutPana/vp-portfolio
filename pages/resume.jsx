import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Vlad | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Vlad Pană</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/vlad-pan%C4%83/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/VladutPana/'
              target='_blank'
              rel='noreferrer'
            >
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
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
        As a highly motivated individual eager to embark on a dynamic career in web development, I possess a unique blend of analytical, innovative, and strategic thinking. I am excited to leverage these skills to contribute to the success of a fast-paced and challenging work environment.

My passion for web development drives me to excel in this field and become a valuable asset to any team. While I may not have direct work experience yet, I am committed to embracing leadership roles and enhancing organizational effectiveness from the very start of my career.

My ability to develop strategies and streamline operations is something I am looking forward to applying in a real-world setting. I believe in the power of diverse analytical skills, collaborative teamwork, and the importance of building strong relationships with colleagues and clients. As I am just beginning my professional journey, I am committed to honing my interpersonal abilities and complex problem-solving skills to thrive in this industry.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span>HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React JS
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind CSS
            <span className='px-2'>|</span>Mongo DB
            <span className='px-2'>|</span>MERN
            <span className='px-2'>|</span>Framer-motion
            <span className='px-2'>|</span>Github
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Education
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Liceul Tehnologic Administrativ Si De Servicii Victor Slăvescu
            </span>
            <span className='px-2'>|</span>Ploiești, RO
          </p>
          <p className='py-1 italic'>Baccalaurette in Mathematics-Informatics profile (2015 - 2019)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Introduction to the programming concepts.
            </li>
            <li>
              Honing my skills throughout the years.
            </li>
            <li>
              Practiced a lot of programming languages.
            </li>
            <li>
              Got a liking to programming and it&apos;s branches.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Universitatea Transilvania din Brașov
            </span>
            <span className='px-2'>|</span>Brașov, RO
          </p>
          <p className='py-1 italic'>Bachelor&apos;s degree in Computer science and Electrical Engineering(2019 - 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Starting in 2019, experienced a lot of new opportunities.
            </li>
            <li>
              Throughout the years, got a sense of what i want to follow in this domain, that is frontend development.
            </li>
            <li>
              Experienced a lot of old and new frameworks and honed my skills during these years.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>IBM Romania</span>
            <span className='px-2'>|</span>Brașov, RO
          </p>
          <p className='py-1 italic'>Academic workshop (07/2022 – 10/2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            The International Business Machines Corporation (doing business as IBM), nicknamed Big Blue, is an American multinational technology corporation headquartered in Armonk, New York and is present in over 175 countries.
            </li>
            <li>
            It specializes in computer hardware, middleware, and software, and provides hosting and consulting services in areas ranging from mainframe computers to nanotechnology.
            </li>
            <li>
             My experience was put to the test in their new and diversed projects.
            </li>
            <li>
             Developed a project based on java and springboot technologies, combined with maven and postman working in teams where communication and leadership roles were necessary to get the project done.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
