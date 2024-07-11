import React from 'react';

const OurStory = () => {
  return (
    <section className="flex flex-col md:flex-row py-16 px-8">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-600 mb-6">Discover our story</p>
        <p className="text-gray-100">
          Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.
        </p>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img src="your-image-path-here.jpg" alt="Our Story" className="rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default OurStory;
