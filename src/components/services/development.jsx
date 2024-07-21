// src/components/services/development.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaGlassCheers, FaCalendarAlt, FaUtensils } from 'react-icons/fa';

const EventCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg rounded-lg overflow-hidden p-4 sm:p-6 text-white">
    <div className="flex items-center justify-center mb-3 sm:mb-4">
      <Icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" aria-hidden="true" />
    </div>
    <h3 className="text-sm sm:text-base md:text-lg font-medium">{title}</h3>
    <p className="mt-2 text-xs sm:text-sm md:text-base font-light">{description}</p>
    <div className="mt-3 sm:mt-4">
      <a href="#" className="text-xs sm:text-sm md:text-base text-white underline hover:text-gray-300">Learn more</a>
    </div>
  </div>
);

const EventServicesSection = () => {
  const services = [
    {
      icon: FaGlassCheers,
      title: "EVENT PLANNING",
      description: "From intimate gatherings to grand galas, we craft unforgettable experiences tailored to your vision and budget."
    },
    {
      icon: FaCalendarAlt,
      title: "EVENT ORGANIZING",
      description: "Our expert team handles every detail, ensuring your event runs smoothly from concept to execution."
    },
    {
      icon: FaUtensils,
      title: "CATERING SERVICES",
      description: "Delight your guests with our exquisite cuisine, featuring a diverse menu of flavors to suit any palate or dietary need."
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16" aria-labelledby="event-services-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 id="event-services-title" className="text-xs sm:text-sm md:text-base font-semibold text-gray-100 tracking-wide uppercase">Our Services</h2>
          <p className="mt-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-200 sm:tracking-tight">
            Crafting Memorable Moments for Every Occasion
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="shadow-lg rounded-lg overflow-hidden"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <EventCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventServicesSection;