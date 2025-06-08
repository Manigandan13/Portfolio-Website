import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaGithub, FaServer } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import projects from "../data/projects";
import "swiper/css";
import "swiper/css/navigation";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../App.css"; 


const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProjectImages, setActiveProjectImages] = useState([]);
  const [startSlide, setStartSlide] = useState(0);

  return (
    <section className="py-24 bg-gray-950 text-white select-none" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-10">
          🚀 Projects
        </h2>
        <p className="text-center text-sm md:text-xl text-red-500 mb-10 font-semibold">
          ⚠️ <strong>Note:</strong> Some projects are hosted on free-tier virtual machines, which automatically shut down when idle
          . As a result, the Full-Stack Projects may take 1–2 minutes to wake up on the first visit — thank you for your patience!
        </p>

        <div className="grid gap-12 sm:grid-cols-1 lg:grid-cols-2 px-2 sm:px-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ boxShadow: "0px 0px 25px rgba(34,211,238,0.3)" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-sm shadow-xl border border-cyan-700 overflow-hidden hover:shadow-cyan-500/50 transition-all duration-500 mb-12"
            >
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: `.swiper-button-next-${index}`,
                  prevEl: `.swiper-button-prev-${index}`,
                }}
                spaceBetween={10}
                slidesPerView={1}
                className="w-full h-60 sm:h-64 md:h-72 relative"
              >
                {project.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <LazyLoadImage
                      src={img}
                      effect="blur"
                      className="w-full h-full object-cover cursor-pointer"
                      alt={`Project ${index + 1} Image ${idx + 1}`}
                      onClick={() => {
                        setActiveProjectImages(project.images);
                        setStartSlide(idx);
                        setModalOpen(true);
                      }}
                    />
                  </SwiperSlide>
                ))}
                {/* Navigation Arrows */}
                <div
                  className={`swiper-button-prev-${index} swiper-nav-btn absolute top-1/2 -translate-y-1/2 left-2 z-10 w-10 h-10 flex items-center justify-center bg-cyan-700 hover:bg-cyan-800 text-white rounded-full shadow-lg transition duration-300 cursor-pointer`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
                <div
                  className={`swiper-button-next-${index} swiper-nav-btn absolute top-1/2 -translate-y-1/2 right-2 z-10 w-10 h-10 flex items-center justify-center bg-cyan-700 hover:bg-cyan-800 text-white rounded-full shadow-lg transition duration-300 cursor-pointer`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Swiper>

              <div className="p-6 sm:p-7 pt-5">
                <h3 className="text-2xl font-semibold text-cyan-300 mb-2 tracking-wide">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-cyan-700 text-white px-3 py-1 rounded-full font-medium shadow shadow-cyan-900/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-gray-800 via-cyan-700 to-cyan-800 hover:from-cyan-800 hover:to-cyan-900 px-5 py-2.5 rounded-md text-sm font-semibold transition duration-300 shadow-lg shadow-cyan-800/40 hover:scale-105 active:scale-95"
                    >
                      <FaGithub /> Frontend
                    </a>
                  )}
                  {project.backend && (
                    <a
                      href={project.backend}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900 px-5 py-2.5 rounded-md text-sm font-semibold transition duration-300 shadow-lg shadow-indigo-800/40 hover:scale-105 active:scale-95"
                    >
                      <FaServer /> Backend
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:to-green-800 px-5 py-2.5 rounded-md text-sm font-semibold transition duration-300 shadow-lg shadow-green-800/40 hover:scale-105 active:scale-95"
                    >
                      🌐 Live
                    </a>
                  )}

                  <button
                    onClick={() => {
                      setActiveProjectImages(project.images);
                      setStartSlide(0);
                      setModalOpen(true);
                    }}
                    className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 px-5 py-2.5 rounded-md text-sm font-semibold transition duration-300 shadow-lg shadow-yellow-800/40 hover:scale-105 active:scale-95"
                  >
                    🔍 Zoom In
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black bg-opacity-90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-full h-full max-w-6xl mx-auto p-4">
              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 z-50 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md transition"
              >
                ✕ Close
              </button>

              {/* Fullscreen Swiper */}
              <Swiper
                modules={[Navigation]}
                navigation
                initialSlide={startSlide}
                spaceBetween={20}
                slidesPerView={1}
                className="w-full h-full"
              >
                {activeProjectImages.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`Fullscreen Image ${idx + 1}`}
                      className="w-full h-[80vh] object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
