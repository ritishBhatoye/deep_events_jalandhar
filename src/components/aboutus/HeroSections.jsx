import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import v2 from '../../assets/v2.mp4';
import { TypeAnimation } from 'react-type-animation';

const splashEffect = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: 'easeOut' }
};

const HeroSections = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative bg-cover bg-center p-4 sm:p-6 text-white w-full  h-[57rem] flex flex-col items-center justify-center font-extralight"
    >
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src={v2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative p-4 sm:p-6 text-center z-20 w-full h-full flex flex-col justify-between">
        <motion.h1
          initial="initial"
          animate="animate"
          transition="transition"
          variants={splashEffect}
          className="text-xl sm:text-2xl md:text-3xl font-montserrat font-extralight absolute top-4 w-full text-center"
        >
          Deep Catering & Events Jalandhar
        </motion.h1>
        <div className="flex-grow flex items-center justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide font-extralight">
            <TypeAnimation
              sequence={[
                "Take the guesswork out of your next function. Call Deep Catering & Events for:",
                2000,
                "Weddings, Parties, House Parties, Birthdays, Business Meetings and More!",
              ]}
              wrapper="span"
              speed={50}
              className="bg-gradient-to-r from-orange-300 to-red-600 text-transparent bg-clip-text"
              repeat={Infinity}
            />
          </h2>
        </div>
        <div className="mb-4 sm:mb-8 text-center">
          <p className="text-white text-base sm:text-lg font-extralight">Swipe up for more</p>
          <div className="mt-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-4 w-4 sm:h-6 sm:w-6 mx-auto transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSections;