import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

import Html from '../assets/skills/html.png';
import Css from '../assets/skills/css.png';
import Javascript from '../assets/skills/javascript.png';
import ReactJS from '../assets/skills/react.png';
import Tailwind from '../assets/skills/tailwind.png';
import Github from '../assets/skills/github1.png';
import Firebase from '../assets/skills/firebase.png';
import NextJS from '../assets/skills/nextjs.png'
import Mongo from '../assets/skills/mongo.png'
import Node from '../assets/skills/node.png'
import Framermotion from '../assets/skills/framermotion.png'

import breathe from '../assets/projects/Breathe.png';
import toDoList from '../assets/projects/ToDoList2.png';
import expandableCards from '../assets/projects/ExpandableCards.png';
import carousel from '../assets/projects/Carousel.png';
import quotes from '../assets/projects/Quote.png';
import ezential from '../assets/projects/ezential.png';


export const navItems = [
    { id: 1, label: 'Home', href: '/' },
    { id: 2, label: 'About', href: '/#about' },
    { id: 3, label: 'Skills', href: '/#skills' },
    { id: 4, label: 'Projects', href: '/#projects' },
    { id: 5, label: 'Contact', href: '/#contact' },
    { id: 6, label: 'Resume', href: '/resume' },
];

export const socialLinks = [
{
  id:1,
  href:'https://www.linkedin.com/in/vlad-pan%C4%83/',
  target:"_blank",
  rel:"noreferrer",
  icon: <FaLinkedinIn /> ,
  shadowColor:"#5651e5",
  external: true,
},
 {
  id:2,
  href:'https://github.com/VladutPana',
  target:"_blank",
  rel:"noreferrer",
  icon: <FaGithub /> ,
  shadowColor:"#FFA500",
  external: true,
},
{
  id:3,
  href:'/#contact',
  target:"_blank",
  rel:"noreferrer",
  icon: <AiOutlineMail /> ,
  shadowColor:"#8B008B",
  external: false, // internal Next.js Link
},
{
  id:4,
  href:'/resume',
  target:"_blank",
  rel:"noreferrer",
  icon: <BsFillPersonLinesFill /> ,
  shadowColor:"#2E8B57",
  external: false, // internal Next.js Link
  },
];

export const mainText = [
  {
    location: "Ploiești / București, RO",
    introduction:"Hello, i'm",
    name:"Vlad",
    welcome:"Welcome to my portfolio !",
    aboutMe:"I'm focused on building responsive front-end web applications using various frameworks like React.js, Next.js with styling frameworks such as tailwind CSS , animation frameworks such as framer-motion and back-end technologies like MongoDB or Firebase."
  }
];

export const ulText = [
    {id:1, text:"Junior Front-End Developer with a strong passion for web development."},
    {id:2, text:"Engaged in diverse personal projects, which have honed my coding skills and knowledge."},
    {id:3, text:"Familiar with the latest web technologies and frameworks, and eager to stay up-to-date with emerging trends."},
    {id:4, text:"Although I lack professional experience, I am highly motivated and quick to adapt to new challenges."}
];

export const technologies = [
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

export const projects = [
    {
      id: 1,
      title: 'To-Do List',
      backgroundImg: toDoList,
      projectUrl: '/todoApp',
      tech: 'Javascript',
    },
    {
      id: 2,
      title: 'Breathing app',
      backgroundImg: breathe,
      projectUrl: '/breatheApp',
      tech: 'Javascript',
    },
    {
      id: 3,
      title: 'Expandable cards',
      backgroundImg: expandableCards,
      projectUrl: '/expandableCardsApp',
      tech: 'React',
    },
    {
      id: 4,
      title: 'Image Carousel',
      backgroundImg: carousel,
      projectUrl: '/carouselApp',
      tech: 'React',
    },
    {
      id: 5,
      title: 'Random Advices',
      backgroundImg: quotes,
      projectUrl: '/quotesApp',
      tech: 'React',
    },
    {
      id: 6,
      title: 'Ezential app',
      backgroundImg: ezential,
      projectUrl: '/ezentialApp',
      tech: 'React',
    },
  ];

export const contact =[
{
  name:"Vlăduț Pană",
  occupation:"Junior Front-End Developer",
  text:" I am driven by my passion for creating user-friendly and visually appealing websites. I thrive on the opportunity to learn and explore new technologies, and I'm excited about the endless possibilities of web development. My goal is to secure a position where I can contribute to innovative web solutions and grow as a professional developer.",
  text2:"Feel free to contact me for collaborations or opportunities in web development. Let's work together to bring digital ideas to life!"
}
];

export const contactSocialLinks = [
    {
      id:1,
      href:'https://www.linkedin.com/in/vlad-pan%C4%83/',
      target:"_blank",
      rel:"noreferrer",
      icon: <FaLinkedinIn size={20} /> ,
      shadowColor:"#5651e5",
      external: true,
    },
     {
      id:2,
      href:'https://github.com/VladutPana',
      target:"_blank",
      rel:"noreferrer",
      icon: <FaGithub size={20}/> ,
      shadowColor:"#FFA500",
      external: true,
    },
    {
      id:3,
      href:'/resume',
      target:"_blank",
      rel:"noreferrer",
      icon: <BsFillPersonLinesFill size={20}/> ,
      shadowColor:"#2E8B57",
      external: false, // internal Next.js Link
      },
];

export const resumeText = [
    "As a highly motivated individual eager to embark on a dynamic career in web development, I possess a unique blend of analytical, innovative, and strategic thinking. I am excited to leverage these skills to contribute to the success of a fast-paced and challenging work environment.My passion for web development drives me to excel in this field and become a valuable asset to any team. While I may not have direct work experience yet, I am committed to embracing leadership roles and enhancing organizational effectiveness from the very start of my career.My ability to develop strategies and streamline operations is something I am looking forward to applying in a real-world setting. I believe in the power of diverse analytical skills, collaborative teamwork, and the importance of building strong relationships with colleagues and clients. As I am just beginning my professional journey, I am committed to honing my interpersonal abilities and complex problem-solving skills to thrive in this industry."
];

export const resumeSkills =[
    {id:1, span:"|", title:"HTML"},
    {id:2, span:"|", title:"CSS"},
    {id:3, span:"|", title:"JAVASCRIPT"},
    {id:4, span:"|", title:"REACT.JS"},
    {id:5, span:"|", title:"NEXT.JS"},
    {id:6, span:"|", title:"TAILWINDCSS"},
    {id:7, span:"|", title:"MONGO"},
    {id:8, span:"|", title:"FIREBASE"},
    {id:9, span:"|", title:"MYSQL"},
    {id:10, span:"|", title:"FRAMER-MOTION"},
    {id:11, span:"|", title:"GITHUB"},
    {id:12, span:"|", title:"MERN"},
];

export const resumeHighschool = [
    {id:1, text:"Introduction to the programming concepts."},
    {id:2, text:"Honing my skills throughout the years."},
    {id:3, text:"Practiced a lot of programming languages."},
    {id:4, text:"Got a liking to programming and it's branches."},
];

export const resumeCollege = [
    {id:1, text:"Starting in 2019, experienced a lot of new opportunities."},
    {id:2, text:"Throughout the years, got a sense of what i want to follow in this domain, that is frontend development."},
    {id:3, text:"Experienced a lot of old and new frameworks and honed my skills during these years."},
];

export const resumeExperience = [
    {id:1, text:"The International Business Machines Corporation (doing business as IBM), nicknamed Big Blue, is an American multinational technology corporation headquartered in Armonk, New York and is present in over 175 countries."},
    {id:2, text:"It specializes in computer hardware, middleware, and software, and provides hosting and consulting services in areas ranging from mainframe computers to nanotechnology."},
    {id:3, text:"My experience was put to the test in their new and diversed projects."},
    {id:4, text:"Developed a project based on java and springboot technologies, combined with maven and postman working in teams where communication and leadership roles were necessary to get the project done."},
];