// Project 1: Ramesh Electricals
import re1 from '../assets/images/re1.png';
import re2 from '../assets/images/re2.png';
import re3 from '../assets/images/re3.png';
import re4 from '../assets/images/re4.png';
import re5 from '../assets/images/re5.png';
import re6 from '../assets/images/re6.png';

// Project 2: AbiTrade
import at1 from '../assets/images/at1.png';
import at2 from '../assets/images/at2.png';
import at3 from '../assets/images/at3.png';
import at4 from '../assets/images/at4.png';
import at5 from '../assets/images/at5.png';
import at6 from '../assets/images/at6.png';

// Project 3: SSS College
import sss1 from '../assets/images/sss1.png';
import sss2 from '../assets/images/sss2.png';
import sss3 from '../assets/images/sss3.png';
import sss4 from '../assets/images/sss4.png';
import sss5 from '../assets/images/sss5.png';
import sss6 from '../assets/images/sss6.png';

// Project 4: EMS
import ems1 from '../assets/images/ems1.png';
import ems2 from '../assets/images/ems2.png';
import ems3 from '../assets/images/ems3.png';
import ems4 from '../assets/images/ems4.png';
import ems5 from '../assets/images/ems5.png';
import ems6 from '../assets/images/ems6.png';

// Project 5: E-commerce
import ecom from '../assets/images/ecom.png';

// Project 6: Trading Bot
import bot from '../assets/images/bot.png';


const projects = [
  {
    title: "Ramesh Electricals",
    description: "Responsive business portfolio site for electrical goods and services. Built using HTML, CSS, and JavaScript for a modern web presence.",
    tech: ["HTML", "CSS", "JavaScript"],
    images: [re1, re2, re3, re4, re5, re6],
    github: "https://github.com/Manigandan13/Ramesh_Electricals",
    live: "https://manigandan-j.neocities.org",
  },
  {
    title: "AbiTrade – Crypto Platform",
    description: "A full-stack crypto trading app with real-time prices, authentication, and transaction simulation using Spring Boot and React.",
    tech: ["React", "Tailwind", "Redux", "Spring Boot", "MySQL"],
    images: [at1, at2, at3, at4, at5, at6],
    github: "https://github.com/Manigandan13/crypto",
    backend: "https://github.com/Manigandan13/crypto-server",
    live: "https://crypto-beta-wine.vercel.app",
  },
  {
    title: "SSS College Website",
    description: "Informational portal for SSS College, highlighting courses, campus life, and admissions using Next.js and Tailwind.",
    tech: ["Next.js", "Tailwind CSS"],
    images: [sss1, sss2, sss3, sss4, sss5, sss6],
    github: "https://github.com/Manigandan13/collegeWebsite",
    live: "https://sss-college.netlify.app",
  },
  {
    title: "Employee Management System",
    description: "Fullstack CRUD system to manage employees and attendance, built with Spring Boot and React.",
    tech: ["React", "CSS", "Spring Boot", "MySQL"],
    images: [ems1, ems2, ems3, ems4, ems5, ems6],
    github: "EMS Frontend",
    backend: "EMS Backend",
    live: "Visit App",
  },
  {
    title: "E-commerce Platform",
    description: "Complete online shopping app with user/product/order management and secure backend in Java.",
    tech: ["React", "Tailwind", "Redux", "Spring Boot", "MySQL"],
    images: [ecom],
    github: "https://github.com/Manigandan13/Ecommerce_Frontend",
    backend: "https://github.com/Manigandan13/Ecommerce_Backend",
    live: "https://ecommerce-ui-neon.vercel.app/",
  },
  {
    title: "Automated Trading Bot (WIP)",
    description: "Python-based bot to auto-trade via Telegram signals and MetaTrader 5. Still under development.",
    tech: ["Python", "Telethon", "MetaTrader 5"],
    images: [bot],
    github: null,
    backend: null,
    live: null,
  },
];

export default projects;

