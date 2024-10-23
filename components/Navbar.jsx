import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import NavLogo from '../public/assets/navLogo.png'
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { navItems, socialLinks } from '../public/constants';

const Navbar = () => {
  const [nav, setNav] = useState(false);

const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div style={{ backgroundColor: `#ecf0f3` }} className={ 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'}>
      <motion.div 
       initial="hidden"
       whileInView="show"
       variants={fadeIn('right', 'tween' ,0.2, 1)}
       className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        {/* LEFT DIV */}
        <Link legacyBehavior href='/'>
          <a className='hidden md:block md:w-[14rem]'>
            <Image src={NavLogo} alt='/' width='50' height='50' className='cursor-pointer hover:scale-110 ease-in duration-300'/>
          </a>
        </Link>

          {/* MID DIV */}
        <div>
          <motion.ul style={{ color: `#1f2937` }} className='hidden md:flex'>
            {navItems.map((item) => (
              <li key={item.id} className='ml-10 text-sm uppercase hover:text-blue-400 hover:font-bold hover:scale-150 ease-in duration-300'>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </motion.ul>
          {/* Hamburger Icon */}
          <div style={{ color: `#1f2937` }} onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>

            {/* RIGHT DIV */}
        <div className='flex'>
        {socialLinks.map((link) => (
          link.external ? (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="ml-6 rounded-full shadow-md p-2 cursor-pointer hover:scale-110 hover:shadow-lg ease-in duration-300"
              style={{
                boxShadow: `0 4px 6px ${link.shadowColor}`,
                '--tw-shadow-color': link.shadowColor, // For hover shadow color
              }}> {link.icon}
            </a>
          ) : (
            <Link key={link.id} href={link.href}>
              <div
                className="ml-6 rounded-full shadow-md p-2 cursor-pointer hover:scale-110 hover:shadow-lg ease-in duration-300"
                style={{
                  boxShadow: `0 4px 6px ${link.shadowColor}`,
                  '--tw-shadow-color': link.shadowColor, // For hover shadow color
                }}>{link.icon}
              </div>
            </Link>
        )
      ))}
        </div>
      </motion.div>


      {/* Mobile Menu */}


      {/* Overlay */}
      <div className={ nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : '' }>
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link legacyBehavior href='/'>
                <a>
                  <Image src={NavLogo} width='35' height='35' alt='/'/>
                </a>
              </Link>
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                PLOIEȘTI / BUCUREȘTI ,RO
              </p>
            </div>
          </div>

          <div className='py-4 flex flex-col'> 
            <ul className='uppercase'>
              {navItems.map((item) => (
                <Link key={item.id} href={item.href}>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>{item.label}</li>
                </Link>
              ))}
            </ul>

            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>Let&#39;s Connect </p>
                  <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                    {socialLinks.map((item) => (
                      item.external ? (
                        <a
                         href={item.href}
                         target={item.target}
                         rel={item.rel}>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>{item.icon}</div>
                        </a>
                      ) : (
                        <Link href={item.href}>
                        <div onClick={() => setNav(!nav)} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>{item.icon}</div>
                        </Link>
                          )
                      ))}
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
