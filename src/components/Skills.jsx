import React from 'react'

import { motion } from "framer-motion";
import skills from "../data/skills";
import Tilt from 'react-parallax-tilt';

const Skills = () => {
  return (
    <section className="py-20 bg-gray-950 text-white" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          ⚙️ Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.3}
                scale={1.05}
                transitionSpeed={1000}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                className="bg-gray-900 rounded-xl p-5 shadow-xl border border-cyan-700 w-28 h-28 flex items-center justify-center hover:scale-110 transform transition-transform duration-300"
              >
                <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
              </Tilt>
              <p className="text-center mt-2 text-sm text-cyan-300">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
