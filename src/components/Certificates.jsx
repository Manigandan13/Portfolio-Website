import React from 'react'
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import certificates from "../data/certificates"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Navigation  } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/autoplay";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";


const Certificates = () => {
  const swiperRef = useRef(null);
  const { ref: sectionRef, inView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="py-20 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-16">
          📜 Certifications
        </h2>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-4 mb-6 px-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-2 rounded-full bg-gray-800 hover:bg-cyan-600 transition-all shadow-md"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="p-2 rounded-full bg-gray-800 hover:bg-cyan-600 transition-all shadow-md"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          speed={1200}
          loop={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          autoplay={
            inView
              ? {
                  delay: 3000,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }
              : false
          }
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full px-2"
        >
          {certificates.map((cert, index) => {
            const isHighlighted = cert.title
              .toLowerCase()
              .includes("java spring boot");

            return (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black border ${
                    isHighlighted
                      ? "border-yellow-500 ring-2 ring-yellow-500"
                      : "border-cyan-700"
                  } rounded-xl shadow-lg hover:shadow-cyan-500/30 transition-all`}
                >
                  {isHighlighted && (
                    <span className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded shadow-lg z-10">
                      🌟 Highlighted
                    </span>
                  )}

                  <div className="relative w-full aspect-video bg-black rounded-t-xl overflow-hidden">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <LazyLoadImage
                        src={cert.image}
                        alt={cert.title}
                        effect="blur"
                        className="w-full h-full object-contain p-2"
                      />
                    </a>
                  </div>

                  <div className="p-4 text-center">
                    <h3 className="text-sm sm:text-base font-medium text-cyan-300 truncate">
                      {cert.title}
                    </h3>
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};



export default Certificates;
