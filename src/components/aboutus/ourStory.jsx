import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { motion, useAnimation } from 'framer-motion';
import anime from 'animejs';
import ourStory from '../../assets/aboutus/ourstory.jpg'; 
import ourStory1 from '../../assets/aboutus/ourStory1.jpg'; 
import ourStory2 from '../../assets/aboutus/ourStory2.jpg'; 
import ourStory3 from '../../assets/aboutus/ourStory3.jpg'; 
import ourStory4 from '../../assets/aboutus/ourStory4.jpg'; 
import event1 from '../../assets/events/Event-1.MP4'; 
import event2 from '../../assets/events/EVENT-2.MP4'; 
import event3 from '../../assets/events/EVENT-3.MP4'; 
import event4 from '../../assets/events/EVENT-4.MP4'; 
import event5 from '../../assets/events/EVENT-5.MP4'; 
import ThreeJSBackground from './ThreeJSBackground';

const images = [ourStory, ourStory1, ourStory2, ourStory3, ourStory4];
const events = ['wedding', 'birthday', 'party', 'haldi', 'jaggo'];
const years = Array.from({ length: 11 }, (_, i) => 2014 + i);

const getRandomEvent = () => events[Math.floor(Math.random() * events.length)];
const getRandomYear = () => years[Math.floor(Math.random() * years.length)];

const LazyImage = ({ src, alt, event, year }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '50px 0px',
  });

  return (
    <div ref={ref} className="relative h-full w-full">
      {inView && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center w-full h-full"
        >
          <img
            src={src}
            alt={alt}
            className="rounded-lg w-full h-full object-cover"
            loading="lazy"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 right-0 m-2 p-2 bg-gray-800 bg-opacity-75 text-white rounded-md shadow-lg"
          >
            <p className="text-sm sm:text-base font-light">{event}</p>
            <p className="text-sm sm:text-base font-light">{year}</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

const OurStory = () => {
  const [showMore, setShowMore] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      anime({
        targets: '.anime-text',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(100),
        easing: 'easeOutQuad',
      });
    }
  }, [controls, inView]);

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative flex flex-col lg:flex-row py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <ThreeJSBackground />
      <motion.div 
        className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4">Our Story</h1>
        <p className="text-gray-400 mb-6 text-sm sm:text-base anime-text">Discover the journey of Deep Events Jalandhar</p>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={contentVariants}
        >
          <p className="text-gray-100 text-sm sm:text-base font-light leading-relaxed anime-text">
            Deep Events Jalandhar is your premier destination for comprehensive event management, planning, and organization. From weddings to corporate events and birthday parties, we ensure a seamless and memorable experience for you and your guests. Our expert team meticulously handles every detail, allowing you to fully enjoy your special moments without any concerns.
          </p>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: showMore ? 1 : 0, height: showMore ? 'auto' : 0 }}
            transition={{ duration: 0.5 }}
          >
            {showMore && (
              <div className="mt-4 anime-text">
                <p className="text-gray-100 text-sm sm:text-base font-light leading-relaxed mb-2">
                  Established in 2013, Deep Catering & Events in Dakoha, Jalandhar is one of the best Balloon Decorators in Jalandhar. We've built a strong reputation as a one-stop destination for all your event needs, serving customers both locally and from other parts of Thane, Mumbai.
                </p>
                <p className="text-gray-100 text-sm sm:text-base font-light leading-relaxed mb-2">
                  Our commitment to customer satisfaction and quality service has helped us build a vast and growing customer base. Our dedicated team works tirelessly to achieve our common vision and goals.
                </p>
                <p className="text-gray-100 text-sm sm:text-base font-light leading-relaxed mb-2">
                  Over the course of our journey, we have established a firm foothold in the industry. We believe that customer satisfaction is as important as our products and services, which has helped us garner a vast base of customers that continues to grow by the day.
                </p>
                <p className="text-gray-100 text-sm sm:text-base font-light leading-relaxed mb-2">
                  Our business employs individuals who are dedicated to their respective roles and put in a lot of effort to achieve the common vision and larger goals of the company. In the near future, we aim to expand our line of products and services and cater to an even larger client base.
                </p>
                <p className="text-gray-100 text-sm sm:text-base font-light leading-relaxed mb-4">
                  Located prominently in Dakoha, Jalandhar, our establishment is easily accessible with various modes of transport readily available.
                </p>
                <h3 className="text-lg font-semibold mt-4 mb-2">Frequently Asked Questions</h3>
                <ul className="list-disc list-inside text-gray-100 text-sm sm:text-base font-light">
                  <li>Payment accepted: Cash</li>
                  <li>Nearest landmark: Dakoha Railway Crossing</li>
                  <li>Hours of operation: 9:00 AM - 10:00 PM (All days)</li>
                  <li>Location: Main Road Dakoha, Near Baba Budha Ji Gurudwara, Dakoha, Jalandhar - 144023</li>
                </ul>
              </div>
            )}
          </motion.div>
          <motion.button
            className="mt-4 text-orange-500 hover:text-orange-600 transition-colors duration-300"
            onClick={() => setShowMore(!showMore)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showMore ? 'Read Less' : 'Read More'}
          </motion.button>
        </motion.div>
      </motion.div>
      <div className="lg:w-1/2">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          className="rounded-lg shadow-lg"
        >
          {images.map((image, index) => (
            <div key={index} className="w-full h-48 sm:h-64 md:h-80 lg:h-96">
              <LazyImage
                src={image}
                alt={`Deep Events Jalandhar - Our Story ${index + 1}`}
                event={getRandomEvent()}
                year={getRandomYear()}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default OurStory;