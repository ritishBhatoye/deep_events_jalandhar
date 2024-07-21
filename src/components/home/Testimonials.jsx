import React, { useState } from 'react';
import { testimonials } from '../../constants';
import { motion } from 'framer-motion';
import anime from 'animejs';
import ThreeJSBackground from '../ThreeJSBackground'; // Add this import

const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(10);

  const showMoreTestimonials = () => {
    anime({
      targets: '.testimonial-card',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 500,
      delay: anime.stagger(100),
    });
    setVisibleCount(prevCount => prevCount + 10);
  };

  return (
    <div className='mt-20 tracking-wide'>
      <ThreeJSBackground /> {/* Add this line */}
      <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20'> What people are saying</h2>
      <div className='flex flex-wrap justify-center'>
        {testimonials.slice(0, visibleCount).map((testimonial, index) => (
          <motion.div
            key={index}
            className='testimonial-card w-full sm:w-1/2 lg:w-1/3 px-4 py-2'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className='bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin'>
              <p>{testimonial.text}</p>
              <div className='flex mt-8 items-start'>
                <img
                  className='w-12 h-12 mr-6 rounded-full border border-neutral-300'
                  src={testimonial.image}
                  alt={testimonial.user}
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className='text-sm font-normal italic text-neutral-600'>{testimonial.eventPurpose}</span>
                  <span className='text-sm font-normal italic text-neutral-600 block'>{testimonial.location}</span>
                  <div className='flex mt-1'>
                    {[...Array(testimonial.rating)].map((star, i) => (
                      <svg
                        key={i}
                        className='w-4 h-4 text-yellow-500 fill-current'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M12 .288l2.833 8.718H24l-7.2 5.22 2.8 8.718-7.2-5.218-7.2 5.218L7.2 14.226.001 8.996h8.168z' />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {visibleCount < testimonials.length && (
        <div className='text-center mt-10'>
          <motion.button
            onClick={showMoreTestimonials}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='px-4 py-2 bg-blue-500 text-white rounded'
          >
            More
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default Testimonials;