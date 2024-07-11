import React from 'react';
import { motion } from 'framer-motion';
import corporate from '../../assets/services/corporate_image.png';
import planning from '../../assets/services/planning_image.png';
import wedding from '../../assets/services/wedding_image.png';

const services = [
  {
    id: 1,
    title: 'Corporate',
    description: 'Apparently we had reached a great height in the atmosphere',
    image: corporate, 
  },
  {
    id: 2,
    title: 'Wedding',
    description: 'Apparently we had reached a great height in the atmosphere',
    image: wedding,
  },
  {
    id: 3,
    title: 'Event Planning',
    description: 'Apparently we had reached a great height in the atmosphere',
    image: planning, 
  },
];

const ServiceCard = ({ title, description, image }) => (
  <motion.div 
    className="flex shadow-lg hover:shadow-orange-500/20 flex-col items-center text-center" 
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <motion.img 
      src={image} 
      alt={title} 
      className="w-full h-auto mb-4" 
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    />
    <motion.h3 
      className="text-xl font-semibold mb-2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {title}
    </motion.h3>
    <motion.p 
      className="text-gray-500"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {description}
    </motion.p>
  </motion.div>
);

const ServicesSection = () => (
  <div className="py-12 px-6">
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl mb-4">Let's Plan Your Perfect Wedding</h2>
      <p className="text-gray-500">for all your catering needs</p>
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service) => (
        <div key={service.id} className="space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-lg text-gray-600">
              {service.id < 10 ? `0${service.id}` : service.id}
            </span>
          </div>
          <ServiceCard title={service.title} description={service.description} image={service.image} />
        </div>
      ))}
    </div>
  </div>
);

export default ServicesSection;
