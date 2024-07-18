// src/components/DevelopmentSection.jsx

import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaBuilding, FaIndustry } from 'react-icons/fa';

const ResidentialDevelopment = () => (
  <div className="bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg rounded-lg overflow-hidden p-6 text-white">
    <div className="flex items-center justify-center mb-4">
      <FaHome className="h-10 w-10 text-white" />
    </div>
    <h3 className="text-lg font-medium">RESIDENTIAL DEVELOPMENT</h3>
    <p className="mt-2 text-base">Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet sed quia.</p>
    <div className="mt-4">
      <a href="#" className="text-white underline hover:text-gray-300">Learn more</a>
    </div>
  </div>
);

const CommercialDevelopment = () => (
  <div className="bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg rounded-lg overflow-hidden p-6 text-white">
    <div className="flex items-center justify-center mb-4">
      <FaBuilding className="h-10 w-10 text-white" />
    </div>
    <h3 className="text-lg font-medium">COMMERCIAL DEVELOPMENT</h3>
    <p className="mt-2 text-base">Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet sed quia.</p>
    <div className="mt-4">
      <a href="#" className="text-white underline hover:text-gray-300">Learn more</a>
    </div>
  </div>
);

const IndustrialDevelopment = () => (
  <div className="bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg rounded-lg overflow-hidden p-6 text-white">
    <div className="flex items-center justify-center mb-4">
      <FaIndustry className="h-10 w-10 text-white" />
    </div>
    <h3 className="text-lg font-medium">INDUSTRIAL DEVELOPMENT</h3>
    <p className="mt-2 text-base">Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet sed quia.</p>
    <div className="mt-4">
      <a href="#" className="text-white underline hover:text-gray-300">Learn more</a>
    </div>
  </div>
);

const DevelopmentSection = () => {
  const sections = [
    {
      component: <ResidentialDevelopment />,
    },
    {
      component: <CommercialDevelopment />,
    },
    {
      component: <IndustrialDevelopment />,
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-gray-100 tracking-wide uppercase">What We Do</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-200 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Creating a great tomorrow for everyone
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="shadow-lg rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Suspense fallback={<div>Loading...</div>}>
                  {section.component}
                </Suspense>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentSection;
