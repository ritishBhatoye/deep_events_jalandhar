import React from 'react';
import HeroSection from '../components/home/HeroSection';
// import FeatureSection from '../components/home/FeatureSection';
import Pricing from '../components/home/Pricing';
import Testimonials from '../components/home/Testimonials';
import Footer from '../components/home/Footer';
import Carousel from '../components/home/Carousel';
import AboutUs from '../components/home/AboutUs';
import ServicesSection from '../components/home/services';
import FeatureSection from '../components/home/featureSection';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'react-loading-skeleton/dist/skeleton.css';
import ThreeJSBackground from '../components/ThreeJSBackground';

const Home = () => {
    const [carouselRef, carouselInView] = useInView({ triggerOnce: true });
    const [aboutUsRef, aboutUsInView] = useInView({ triggerOnce: true });
    const [heroSectionRef, heroSectionInView] = useInView({ triggerOnce: true });
    const [featureSectionRef, featureSectionInView] = useInView({ triggerOnce: true });
    const [servicesSectionRef, servicesSectionInView] = useInView({ triggerOnce: true });
    const [pricingRef, pricingInView] = useInView({ triggerOnce: true });
    const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true });
  
    return (
      <>
        <ThreeJSBackground />
        <motion.div
          ref={carouselRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: carouselInView ? 1 : 0, y: carouselInView ? 0 : 20 }}
          transition={{ duration: 0.75 }}
        >
          <Carousel />
        </motion.div>
        <motion.div
          ref={aboutUsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: aboutUsInView ? 1 : 0, y: aboutUsInView ? 0 : 20 }}
          transition={{ duration: 0.75 }}
        >
            <ThreeJSBackground />
          <AboutUs />
        </motion.div>
        <div className='max-w-7xl  mx-auto pt-8 '>

          <motion.div
            ref={featureSectionRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: featureSectionInView ? 1 : 0, y: featureSectionInView ? 0 : 20 }}
            transition={{ duration: 0.75 }}
          >
              <ThreeJSBackground />
            <FeatureSection />
          </motion.div>
          <motion.div
            ref={servicesSectionRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: servicesSectionInView ? 1 : 0, y: servicesSectionInView ? 0 : 20 }}
            transition={{ duration: 0.75 }}
          >
            <ServicesSection />
          </motion.div>

          <motion.div
            ref={testimonialsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: testimonialsInView ? 1 : 0, y: testimonialsInView ? 0 : 20 }}
            transition={{ duration: 1 }}
          >
            <Testimonials />
          </motion.div>
 
        </div>
      
      </>
    );
  };
  
  export default Home;