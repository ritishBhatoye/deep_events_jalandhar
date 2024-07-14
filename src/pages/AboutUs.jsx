import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import OurStory from '../components/aboutus/ourStory';
import SpecialEvent from '../components/aboutus/specialEvent';
import BestParties from '../components/aboutus/bestParties';

const AboutUs = () => {
  const [loadedSections, setLoadedSections] = useState({
    ourStory: false,
    specialEvent: false,
    bestParties: false,
  });

  const ourStoryRef = useRef();
  const specialEventRef = useRef();
  const bestPartiesRef = useRef();

  const controlsOurStory = useAnimation();
  const controlsSpecialEvent = useAnimation();
  const controlsBestParties = useAnimation();

  const handleScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        if (target.id === 'ourStory' && !loadedSections.ourStory) {
          setLoadedSections(prev => ({ ...prev, ourStory: true }));
          controlsOurStory.start({ opacity: 1, y: 0 });
        }
        if (target.id === 'specialEvent' && !loadedSections.specialEvent) {
          setLoadedSections(prev => ({ ...prev, specialEvent: true }));
          controlsSpecialEvent.start({ opacity: 1, y: 0 });
        }
        if (target.id === 'bestParties' && !loadedSections.bestParties) {
          setLoadedSections(prev => ({ ...prev, bestParties: true }));
          controlsBestParties.start({ opacity: 1, y: 0 });
        }
      }
    });
  };

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
      <motion.div
        ref={ourStoryRef}
        id="ourStory"
        initial={{ opacity: 0, y: 50 }}
        animate={controlsOurStory}
        transition={{ duration: 1.8 }}
      >
        <OurStory />
      </motion.div>
      <motion.div
        ref={specialEventRef}
        id="specialEvent"
        initial={{ opacity: 0, y: 50 }}
        animate={controlsSpecialEvent}
        transition={{ duration: 1.8 }}
      >
        <SpecialEvent />
      </motion.div>
      <motion.div
        ref={bestPartiesRef}
        id="bestParties"
        initial={{ opacity: 0, y: 50 }}
        animate={controlsBestParties}
        transition={{ duration: 1.8 }}
      >
        <BestParties />
      </motion.div>
    </div>
  );
};

export default AboutUs;
