import Image from 'next/image';
import Link from 'next/link';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineArrowUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg';
import {motion} from 'framer-motion';
import { fadeIn } from '../utils/motion';


const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <motion.div
      initial="hidden"
      whileInView="show"
      variants={fadeIn('right','tween',0.1,1)}
       className='max-w-[77.5rem] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Vlăduț Pană</h2>
                <p>Junior Front-End Developer</p>
                <p className='py-4'>
                I am driven by my passion for creating user-friendly and visually appealing websites. I thrive on the opportunity to learn and explore new technologies, and I&apos;m excited about the endless possibilities of web development. My goal is to secure a position where I can contribute to innovative web solutions and grow as a professional developer.
                </p>
              </div>
              <div>
                <p className='pt-8'>Feel free to contact me for collaborations or opportunities in web development. Let&apos;s work together to bring digital ideas to life!</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/vlad-pan%C4%83/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-md shadow-[#5651e5] p-6 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-[#5651e5] ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/VladutPana/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-md shadow-[#FFA500]  p-6 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-[#FFA500] ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>

                  {/* <div className='rounded-full shadow-md shadow-[#8B008B] p-6 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-[#8B008B] ease-in duration-300'>
                    <AiOutlineMail />
                  </div> */}
                  <Link legacyBehavior href='/resume'>
                    <a>
                      <div className='rounded-full shadow-md shadow-[#2E8B57] p-6 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-[#2E8B57] ease-in duration-300'>
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link legacyBehavior href='/'>
            <a>
              <div className='rounded-full shadow-md shadow-[#5651e5] p-4 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-[#5651e5] ease-in duration-300'>
                <HiOutlineArrowUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
