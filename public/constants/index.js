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
]

export const ulText = [
    {id:1, text:"Junior Front-End Developer with a strong passion for web development."},
    {id:2, text:"Engaged in diverse personal projects, which have honed my coding skills and knowledge."},
    {id:3, text:"Familiar with the latest web technologies and frameworks, and eager to stay up-to-date with emerging trends."},
    {id:4, text:" Although I lack professional experience, I am highly motivated and quick to adapt to new challenges."}
  ]

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