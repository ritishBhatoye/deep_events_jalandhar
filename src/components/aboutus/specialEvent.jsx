import React from 'react';

const SpecialEvent = () => {
  return (
    <section className="flex flex-col md:flex-row items-center py-16 px-8">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-4xl font-bold mb-4">We know how to make something special</h2>
        <p className="text-gray-100">Events from A to Z</p>
      </div>
      <div className="md:w-1/2">
        <img src="your-image-path-here.jpg" alt="Special Event" className="rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default SpecialEvent;
