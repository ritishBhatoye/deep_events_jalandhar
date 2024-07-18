import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
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
    <div ref={ref} className="relative h-full md:w-full md:h-64">
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
          />
          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 right-0 m-2 p-2 bg-gray-800 text-white rounded-md shadow-lg">
            <p className="font-thin text-lg">{event}</p>
            <p className="font-thin text-lg">{year}</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

const OurStory = () => {
  return (
    <section className="flex flex-col md:flex-row py-16 px-8">
      <motion.div 
        className="md:w-1/2"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-600 mb-6">Discover our story</p>
        <p className="text-gray-100">
          Deep Events Jalandhar is your go-to for comprehensive event management, planning, and organization. Whether it's a wedding, corporate event, or a birthday party, we ensure a seamless and memorable experience for you and your guests. Our team of experts takes care of every detail, so you can enjoy your event without any worries.
        </p>
      </motion.div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          className="rounded-lg shadow-lg"
        >
          {images.map((image, index) => (
            <div key={index} className="w-full h-full">
              <LazyImage
                src={image}
                alt={`Our Story ${index + 1}`}
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
