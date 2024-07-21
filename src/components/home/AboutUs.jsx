import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import aboutUsImage from '../../assets/about-us.jpg';
import ThreeJSBackground from '../aboutus/ThreeJSBackground';


const AboutUs = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <section className="relative py-8 sm:py-12 md:py-16">
      <ThreeJSBackground/>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl mb-2 font-light leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Us
            </motion.h2>
            <motion.p
              className="text-gray-500 text-lg sm:text-xl mb-4 sm:mb-6 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Discover our story
            </motion.p>
            <motion.div
              className="text-gray-500 text-base sm:text-lg mb-6 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p>Established in 2013, Deep Catering & Events in Dakoha, Jalandhar is a premier Balloon Decorator serving customers locally and across Thane, Mumbai.</p>
              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mt-4">Our commitment to customer satisfaction and quality service has helped us build a strong client base. We're conveniently located near Dakoha Railway Crossing and open daily from 9:00 AM to 10:00 PM.</p>
                    <p className="mt-4">We accept cash payments and aim to expand our services to cater to an even larger clientele in the future.</p>
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
              {expanded ? 'READ LESS' : 'READ MORE'}
            </motion.button>
          </div>
          <div className="w-full lg:w-1/2">
            <img 
              src={aboutUsImage} 
              alt="About Our Company" 
              className="rounded-lg shadow-md w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;