import React from 'react';
import { features } from '../../constants';

const FeatureSection = () => {
  return (
    <section className='relative py-16 sm:py-20 lg:py-24 border-b border-neutral-800'>
      <div className='container mx-auto px-4'>
        <header className='text-center mb-12 sm:mb-16 lg:mb-20'>
          <span className='inline-block bg-neutral-900 text-orange-500 rounded-full text-xs sm:text-sm font-medium px-3 py-1 uppercase'>
            Feature
          </span>
          <h2 className='text-2xl sm:text-4xl lg:text-5xl mt-6 sm:mt-8 tracking-wide font-light'>
            Why
            <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>
              {" "}
              Us
            </span>
          </h2>
        </header>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12'>
          {features.map((feature, index) => (
            <article key={index} className='flex flex-col sm:flex-row items-center sm:items-start'>
              <div className='flex-shrink-0 mb-4 sm:mb-0 sm:mr-6'>
                <div className='flex h-20 w-20 sm:h-24 sm:w-24 p-4 transition duration-200 ease-in-out cursor-pointer bg-orange-300 hover:bg-orange-700 text-orange-700 justify-center items-center rounded-full'>
                  <img src={feature.icon} alt="" className="w-full h-full object-contain icon-white" />
                </div>
              </div>
              <div className='text-center sm:text-left'>
                <h3 className='text-lg sm:text-xl mb-2 font-light'>
                  {feature.title}
                </h3>
                <p className='text-sm sm:text-base text-neutral-500 font-light'>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;