
import React from "react";

import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaGithub, FaLinkedin, FaCode,FaEnvelope } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { ReactTyped } from "react-typed";
import myPhoto from '../assets/images/myPhoto.png';

export default function Hero() {


  return (
    <div id="hero" className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden pt-32 px-4 sm:px-6 lg:px-8 select-none">

      {/* Content Section */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-20">

      
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-2">
            Manigandan J
          </h1>
          <h2 className="text-xl md:text-2xl text-cyan-200 mb-6">
            <ReactTyped
              strings={[
                "Java Full Stack Developer",
                "FrontEnd Developer",
                "Web Designer",
                "Java Developer",
                "Backend Developer",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 text-justify md:text-left">
          🚀 I'm a passionate Full Stack Developer who transforms ideas into elegant, responsive, and impactful web experiences using React.js, Tailwind CSS, and Spring Boot.
           With a strong foundation in modern technologies and a sharp eye for design, I craft clean, scalable solutions that leave lasting impressions. Eager to contribute, learn, and grow within innovative teams driving the digital future.
          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-block px-6 py-3 text-lg font-semibold text-black bg-cyan-400 rounded-xl shadow hover:scale-105 transition-transform duration-300"
          >
            📄 Download Resume
          </a>

          <div className="mt-6 flex justify-center md:justify-start space-x-6 text-2xl">
            <a href="https://github.com/Manigandan13" target="_blank" className="hover:text-cyan-400">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mani-gandan-5b8833219" target="_blank" className="hover:text-cyan-400">
              <FaLinkedin />
            </a>
            <a href="mailto:jaiselvi13072005@gmail.com" target="_blank" className="hover:text-cyan-400">
              <FaEnvelope />
            </a>
            <a href="https://leetcode.com/u/jaiselvi13072005/" target="_blank" className="hover:text-cyan-400">
              <FaCode />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 0, y: 15 }}
          animate={{ opacity: 1, x: 0, y: [-15, 15, -10, 10, 0] }}
          transition={{
            duration: 2.5,
            ease: "easeInOut"
          }}
          className="w-96 h-96 md:w-[500px] md:h-[500px] rounded-full overflow-hidden shadow-2xl"
        >
          <LazyLoadImage
            src={myPhoto}
            alt="Profile"
            effect="blur"
            className="object-cover w-full h-full"
          />
        </motion.div>

      </div>
    </div>
  );
}

