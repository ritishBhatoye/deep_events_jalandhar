import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { Image } from 'lucide-react';
import aboutUsImage from '../../assets/about-us.jpg';
import ThreeJSBackground from '../aboutus/ThreeJSBackground';

const AboutUs= () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <section className="relative py-8 sm:py-12 md:py-16">
      <ThreeJSBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-4xl mb-2 font-light leading-tight text-orange-600"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Transforming Events into Unforgettable Experiences
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg sm:text-xl mb-4 sm:mb-6 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Your Premier Event Partner in Jalandhar and Beyond
            </motion.p>
            <motion.div
              className="text-gray-400 text-base sm:text-lg mb-6 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p>Since 2013, Deep Catering & Events has been the heartbeat of celebrations in Dakoha, Jalandhar, crafting magical moments that resonate with the vibrant spirit of India.</p>
              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mt-4">From lavish weddings to corporate gatherings, we offer a complete suite of services including exquisite catering, stunning balloon decorations, state-of-the-art sound systems, and meticulous event management. Our team blends traditional Indian hospitality with modern expertise to create events that are truly unforgettable.</p>
                    <p className="mt-4">Conveniently located near Dakoha Railway Crossing, we're your local experts with a reach extending to Thane and Mumbai. Open daily from 9:00 AM to 10:00 PM, we're always ready to turn your vision into reality. Join our growing family of satisfied clients and let us add the Deep touch to your next celebration!</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.button
              className="bg-gradient-to-r from-orange-500 to-orange-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:bg-red-600 transition duration-300 font-light text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              onClick={toggleExpanded}
            >
              {expanded ? 'READ LESS' : 'DISCOVER MORE'}
            </motion.button>
          </div>
          <div className="w-full lg:w-1/2">
            <img 
              src={aboutUsImage} 
              alt="Celebrating Indian Traditions with Deep Catering & Events" 
              className="rounded-lg shadow-md w-full h-auto"
              width={500}
              height={300}
              layout="responsive"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;