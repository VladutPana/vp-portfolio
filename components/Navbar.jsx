import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import NavLogo from '../public/assets/navLogo.png'
import { motion } from "framer-motion";
import { fadeIn, slideIn, zoomIn } from "../utils/motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);


  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <div
      style={{ backgroundColor: `#ecf0f3` }}
      className={ 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'}
    >
      <motion.div 
      initial="hidden"
      whileInView="show"
      variants={fadeIn('right', 'tween' ,0.2, 1)}
      className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link legacyBehavior href='/'>
          <a className='hidden md:block md:w-[14rem]'>
            <Image
              src={NavLogo}
              alt='/'
              width='50'
              height='50'
              className='cursor-pointer hover:scale-110 ease-in duration-300'
            />
          </a>
        </Link>
        <div>
          <motion.ul style={{ color: `#1f2937` }} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:text-blue-400 hover:font-bold hover:scale-150 ease-in duration-300'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:text-blue-400 hover:font-bold hover:scale-150 ease-in duration-300'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:text-blue-400 hover:font-bold hover:scale-150 ease-in duration-300'>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:text-blue-400 hover:font-bold hover:scale-150 ease-in duration-300'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:text-blue-400 hover:font-bold hover:scale-150 ease-in duration-300'>
              <Link href='/#contact'>Contact</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:text-blue-400 hover:font-bold hover:scale-150 ease-in duration-300'>
              <Link href='/resume'>Resume</Link>
            </li>
            
          </motion.ul>

          
          
          {/* Hamburger Icon */}
          <div
            style={{ color: `#1f2937` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <div className='flex'>
      <a
              href='https://www.linkedin.com/in/vlad-pan%C4%83/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='ml-6 rounded-full shadow-md shadow-[#5651e5] p-2 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-[#5651e5]    ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/VladutPana'
              target='_blank'
              rel='noreferrer'
            >
              <div className='ml-6 rounded-full shadow-md shadow-[#FFA500]  p-2 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-[#FFA500]  ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='ml-6 rounded-full shadow-md shadow-[#8B008B] p-2 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-[#8B008B] ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='ml-6 rounded-full shadow-md shadow-[#2E8B57] p-2 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-[#2E8B57] ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
            </div>
      </motion.div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link legacyBehavior href='/'>
                <a>
                  <Image
                    src={NavLogo}
                    width='35'
                    height='35'
                    alt='/'
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                PLOIEȘTI / BRAȘOV ,RO
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              <Link href='/resume'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Resume
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/vlad-pan%C4%83/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/VladutPana'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
