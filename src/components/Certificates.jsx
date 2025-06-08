import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import certificates from '../data/certificates';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useInView } from 'react-intersection-observer';

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
          spaceBetween={30}
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
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full px-2"
        >
          {certificates.map((cert, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center justify-center bg-black border border-cyan-700 rounded-xl shadow-md hover:shadow-cyan-500/20 transition-all p-2"
              >
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <LazyLoadImage
                    src={cert.image}
                    alt={`Certificate ${index + 1}`}
                    effect="blur"
                    className="w-full h-auto max-h-[600px] object-contain rounded"
                  />
                </a>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Certificates;