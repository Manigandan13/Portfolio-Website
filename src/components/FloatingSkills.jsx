import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import skills from "../data/skills"; // Update path if needed

// Generate a slightly randomized floating variant per skill
const generateFloatVariant = () => ({
  animate: {
    y: [0, -6, 4, -2, 0],
    x: [0, Math.random() * 4 - 2, Math.random() * 4 - 2, 0],
    rotate: [0, 3 + Math.random() * 4, -3 - Math.random() * 4, 0],
    transition: {
      duration: 6 + Math.random() * 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
});

const FloatingSkills = () => {
  return (
    <section className="py-20 bg-gray-950 text-white" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          ⚙️ Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {skills.map((skill, index) => {
            const floatVariant = generateFloatVariant();

            return (
              <motion.div
                key={index}
                variants={floatVariant}
                whileInView="animate"
                initial={{ opacity: 1, scale: 0.85 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Tilt
                  glareEnable
                  glareMaxOpacity={0.3}
                  scale={1.05}
                  transitionSpeed={1500}
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  className="bg-gray-900 rounded-xl p-5 shadow-xl border border-cyan-700 w-28 h-28 flex items-center justify-center hover:scale-110 transform transition-transform duration-300"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    title={skill.name}
                    className="w-12 h-12 object-contain"
                  />
                </Tilt>
                <p className="text-center mt-2 text-sm text-cyan-300">
                  {skill.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FloatingSkills;
