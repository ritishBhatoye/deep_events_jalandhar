import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import OurStory from '../components/aboutus/ourStory';
import SpecialEvent from '../components/aboutus/specialEvent';
import BestParties from '../components/aboutus/bestParties';


import HeroSections from '../components/aboutus/HeroSections';
const AboutUs = () => {
  const [loadedSections, setLoadedSections] = useState({
    ourStory: false,
    specialEvent: false,
    bestParties: false,
  });

  const [scrollDirection, setScrollDirection] = useState(null);
  const lastScrollTop = useRef(0);

  const ourStoryRef = useRef();
  const hereSections = useRef();

  const specialEventRef = useRef();
  const bestPartiesRef = useRef();

  const controlsOurStory = useAnimation();
  const controlsHeroSection = useAnimation();

  const controlsSpecialEvent = useAnimation();
  const controlsBestParties = useAnimation();

  const handleScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const animation = { opacity: 1, y: 0 };

        if (scrollDirection === 'up') {
          animation.y = -50;
        } else if (scrollDirection === 'down') {
          animation.y = 50;
        }

        if (target.id === 'ourStory' && !loadedSections.ourStory) {
          setLoadedSections(prev => ({ ...prev, ourStory: true }));
          controlsOurStory.start(animation);
        }
        if (target.id === 'specialEvent' && !loadedSections.specialEvent) {
          setLoadedSections(prev => ({ ...prev, specialEvent: true }));
          controlsSpecialEvent.start(animation);
        }
        if (target.id === 'bestParties' && !loadedSections.bestParties) {
          setLoadedSections(prev => ({ ...prev, bestParties: true }));
          controlsBestParties.start(animation);
        }
      }
    });
  };

  useEffect(() => {
    const handleScrollDirection = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop.current) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScrollDirection);
    return () => {
      window.removeEventListener('scroll', handleScrollDirection);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, { threshold: 0.1 });

    if (ourStoryRef.current) {
      observer.observe(ourStoryRef.current);
    }
    if (specialEventRef.current) {
      observer.observe(specialEventRef.current);
    }
    if (bestPartiesRef.current) {
      observer.observe(bestPartiesRef.current);
    }

    return () => {
      if (ourStoryRef.current) {
        observer.unobserve(ourStoryRef.current);
      }
      if (specialEventRef.current) {
        observer.unobserve(specialEventRef.current);
      }
      if (bestPartiesRef.current) {
        observer.unobserve(bestPartiesRef.current);
      }
    };
  }, [loadedSections]);

  return (
    <div>
        
    
        <HeroSections />

      <motion.div
        ref={ourStoryRef}
        id="ourStory"
        initial={{ opacity: 0, y: 50 }}
        animate={controlsOurStory}
        transition={{ duration: 1.5 }}
      >
        <OurStory />
      </motion.div>
      <motion.div
        ref={specialEventRef}
        id="specialEvent"
        initial={{ opacity: 0, y: 50 }}
        animate={controlsSpecialEvent}
        transition={{ duration: 1.5 }}
      >
        <SpecialEvent />
      </motion.div>
      <motion.div
        ref={bestPartiesRef}
        id="bestParties"
        initial={{ opacity: 0, y: 50 }}
        animate={controlsBestParties}
        transition={{ duration: 1.5 }}
      >
        <BestParties />
      </motion.div>
    </div>
  );
};

export default AboutUs;
