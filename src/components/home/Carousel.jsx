import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import img1 from '../../assets/img-1.jpg';
import img2 from '../../assets/img-2.jpg';
import img3 from '../../assets/img-3.jpg';
import img4 from '../../assets/img-4.jpg';
import img5 from '../../assets/img-5.jpg';
import img6 from '../../assets/img-6.jpg';
import img7 from '../../assets/img-7.jpg';
import img8 from '../../assets/img-8.jpg';
import img9 from '../../assets/img-9.jpg';

import v1 from '../../assets/v1.mp4';
import v2 from '../../assets/v2.mp4';
import v3 from '../../assets/v3.mp4';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { url: img1, type: 'image', text: 'Event Planning Made Easy', title: 'Effortless and Professional Event Planning Solutions for Any Occasion, Ensuring a Memorable and Flawless Experience from Start to Finish' },
    { url: v1, type: 'video', text: 'Memories to Last a Lifetime', title: 'Capture and Cherish Every Precious Moment of Your Special Event, Creating Memories That Will Last a Lifetime' },
    { url: img2, type: 'image', text: 'Your Dream Event Awaits', title: 'Transforming Your Dream Event into a Stunning Reality with Our Expert Planning and Execution Services' },
    { url: v2, type: 'video', text: 'Memories to Last a Lifetime', title: 'Create Unforgettable Memories with Every Special Event, Preserving Moments That You Will Treasure Forever' },
    { url: img3, type: 'image', text: 'Memories to Last a Lifetime', title: 'Preserve Every Precious Moment of Your Event, Ensuring Memories That Will Be Cherished for Years to Come' },
    { url: v3, type: 'video', text: 'Memories to Last a Lifetime', title: 'Relive the Best Moments of Your Event Through Beautifully Captured Videos, Creating Everlasting Memories' },
    { url: img4, type: 'image', text: 'Event Planning Made Easy', title: 'Simplifying the Art of Event Planning for You, Ensuring a Seamless and Enjoyable Experience from Start to Finish' },
    { url: img5, type: 'image', text: 'Your Dream Event Awaits', title: 'Make Your Dream Event Come True with Our Professional Planning Services, Tailored to Your Unique Vision and Needs' },
    { url: img7, type: 'image', text: 'Memories to Last a Lifetime', title: 'Hold Onto Your Special Memories Forever with Our Expert Event Documentation and Preservation Services' },
    { url: img8, type: 'image', text: 'Memories to Last a Lifetime', title: 'Hold Onto Your Special Memories Forever with Our Expert Event Documentation and Preservation Services' },
    { url: img9, type: 'image', text: 'Memories to Last a Lifetime', title: 'Hold Onto Your Special Memories Forever with Our Expert Event Documentation and Preservation Services' },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section aria-label="Image and Video Carousel" className="relative w-full h-[40rem] md:h-[40rem] lg:h-[40rem] mx-auto">
      <div className="overflow-hidden h-full">
        <div
          className="flex transition-transform duration-500 h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <article key={index} className="w-full flex-shrink-0 relative h-[40rem] md:h-[50rem] lg:h-[60rem]">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="absolute font-montserrat top-4 sm:top-6 md:top-8 lg:top-10 left-4 sm:left-6 md:left-8 lg:left-10 right-4 sm:right-6 md:right-8 lg:right-10 text-center text-white p-2 rounded"
              >
                {index === currentIndex && (
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-full text-center tracking-wide font-light">
                    <TypeAnimation
                      sequence={[image.text, 2000, '']}
                      wrapper="span"
                      cursor={true}
                      repeat={Infinity}
                      style={{ display: 'inline-block' }}
                    />
                  </h2>
                )}
                <h3 className="relative top-20 sm:top-24 md:top-32 lg:top-40 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center tracking-wide font-light">
                  {image.title}
                  <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                    {" "} for Clients
                  </span>
                </h3>
              </motion.div>
              {image.type === 'image' ? (
                <img
                  src={image.url}
                  alt={`${image.text} - ${image.title}`}
                  className="w-full h-full object-cover opacity-25"
                  loading="lazy"
                />
              ) : (
                <video
                  src={image.url}
                  className="w-full h-full object-cover opacity-25"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </article>
          ))}
        </div>
      </div>

      {/* Navigation buttons for mobile/small format */}
      <div className="absolute inset-0 flex items-center justify-between p-4 sm:hidden">
        <button
          onClick={prevSlide}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <nav className="absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </nav>
    </section>
  );
};

export default Carousel;