import React, { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';
import ContactUsHeader from '../components/contactUs/contactUsHeader';
import ContactForm from '../components/contactUs/contactForm';
import ThreeJSBackground from '../components/ThreeJSBackground'; // Add this import

const Contact = () => {
  useEffect(() => {
    const handleScroll = () => {
      scroll.scrollTo(window.scrollY, {
        duration: 500,
        smooth: true,
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (



    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        {/* <ThreeJSBackground /> */}
      </motion.div>
      <motion.div
        variants={variants}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <ContactUsHeader />
      </motion.div>
      <motion.div
        variants={variants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
       {/* <ThreeJSBackground /> */}
        <ContactForm />
      </motion.div>
    </motion.div>
  );
}

export default Contact;