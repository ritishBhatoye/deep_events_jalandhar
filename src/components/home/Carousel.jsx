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
    <div className="relative w-full h-full mx-auto">
      <div className="overflow-hidden h-full">
        <div
          className="flex transition-transform duration-500 h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 relative h-[40rem]">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="absolute font-montserrat top-10 left-10 right-10 text-center text-white text-2xl p-2 rounded"
              >
                {index === currentIndex && (
                  <h5 className="text-4xl w-full sm:text-1xl lg:text-2xl text-center tracking-wide">
                    <TypeAnimation
                      sequence={[image.text, 2000, '']}
                      wrapper="span"
                      cursor={true}
                      repeat={Infinity}
                      style={{ display: 'inline-block' }}
                    />
                  </h5>
                )}
                <h3 className="relative top-40 text-4xl sm:text-3xl lg:text-5xl text-center tracking-wide">
                  {image.title}
                  <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                    {" "} for Clients
                  </span>
                </h3>
              </motion.div>
              {image.type === 'image' ? (
                <img
                  src={image.url}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover opacity-25"
                />
              ) : (
                <video
                  src={image.url}
                  className="w-full h-full object-cover opacity-25"
                  autoPlay
                  loop
                  muted
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;