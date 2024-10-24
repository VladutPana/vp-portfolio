import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { contact, contactSocialLinks } from '../public/constants';


const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-full'>
      <motion.div initial="hidden" whileInView="show"  variants={fadeIn('right','tween',0.1,1)} className='max-w-[77.5rem] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'> Contact</p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-[#5651e5] rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image className='rounded-xl hover:scale-105 ease-in duration-300'  src={ContactImg} alt='/'/>
              </div>
              <div>
                {/* mapping constants */}
                {contact.map((item) => (
                  <>
                  <h2 className='py-2'>{item.name}</h2>
                <p>{item.occupation}</p>
                <p className='py-4'>{item.text}</p>
                <p className='pt-8'>{item.text2}</p>
                </>
                ))}
              </div>
              <div>
                {/* maaping socials */}
                <div className='flex items-center justify-between py-4'>
                  {contactSocialLinks.map((item) => (
                    item.external ? (
                  <a
                    href={item.href}
                    target={item.target}
                    rel={item.rel}>
                      <div className='rounded-full shadow-md p-6 cursor-pointer hover:scale-110 hover:shadow-lg  ease-in duration-300'
                      style={{ boxShadow: `0 4px 6px ${item.shadowColor}`}}>
                        {item.icon} 
                      </div>
                  </a>
                    ) : (
                      <Link legacyBehavior href={item.href}>
                    <a>
                      <div className='rounded-full shadow-md shadow-[#2E8B57] p-6 cursor-pointer hover:scale-110 hover:shadow-lg ease-in duration-300'
                      style={{ boxShadow: `0 4px 6px ${item.shadowColor}`}}>
                        {item.icon}
                      </div>
                    </a>
                  </Link>
                        )
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-md shadow-[#5651e5] rounded-xl lg:p-4'>
            <div className='p-4'>

            <form action="https://submit-form.com/oyeMtM993" method="POST">


                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      required
                      placeholder='Your name'
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input
                      placeholder='Your phone number (optional)'
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    required
                    placeholder='example@example.com'
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    placeholder='Title of subject'
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    required
                    placeholder='If there is an unexpected error you can always contact me by clicking the buttons on the left of this form !'
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 shadow-md shadow-[#5651e5] mt-4 lg:hover:scale-105 ease-in duration-300'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* arrow button */}
        <div className='flex justify-center py-12'>
          <Link legacyBehavior href='/'>
              <div className='rounded-full shadow-md shadow-[#5651e5] p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineArrowUp className='text-[#5651e5]' size={30}/>
              </div>
          </Link>
        </div>

      </motion.div>
    </div>
  );
};

export default Contact;
