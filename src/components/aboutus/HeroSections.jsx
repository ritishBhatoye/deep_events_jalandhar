import { motion } from 'framer-motion';
import { useEffect } from 'react';
import v2 from '../../assets/v2.mp4';
import { TypeAnimation } from 'react-type-animation';

const splashEffect = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: 'easeOut' }
};

const HeroSections = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      // Implement blinking effect for the arrow/swipe-up indicator
      // Toggle visibility or style here
    }, 500); // Adjust blinking speed as needed

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative bg-cover bg-center p-6 text-white w-full h-screen flex flex-col items-center justify-center"
    >
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover z-0">
        <source src={v2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative p-6 text-center z-20 w-full h-full flex flex-col justify-between">
        <motion.h2
          initial="initial"
          animate="animate"
          transition="transition"
          variants={splashEffect}
          className="text-3xl font-montserrat font-thin absolute top-4 w-full text-center"
        >
          Deep Catering & Events Jalandhar
        </motion.h2>
        <div className="flex-grow flex items-center justify-center">
          <h1 className="text-4xl sm:text-2xl lg:text-5xl tracking-wide">
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
          </h1>
        </div>
        <div className="mb-8 text-center">
          <p className="text-white text-lg font-thin">Swipe up for more</p>
          <div className="mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce mx-auto font-thin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSections;
