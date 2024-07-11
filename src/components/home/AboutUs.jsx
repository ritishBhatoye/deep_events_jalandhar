import React from 'react';
import aboutUsImage from '../../assets/about-us.jpg'; // Adjust the path as needed

const AboutUs = () => {
  return (
    <section className="relative py-16 ">
      <div className="container mx-auto px-3">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-5xl mb-2">About Us</h2>
            <p className="text-gray-500 text-xl mb-6">discover our story</p>
            <p className="text-gray-500 text-lg mb-6">
              Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside...
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition duration-300">
              READ FULL STORY
            </button>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <img src={aboutUsImage} alt="About Us" className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
