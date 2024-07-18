import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/img-8.jpg'; // Import the background image
import breakfast from '../assets/menu/breakfast/breakfast.jpg';
import lunchveg1 from '../assets/menu/lunchveg/lunchveg1.jpg';
import lunchveg2 from '../assets/menu/lunchveg/lunchveg2.jpg';
import rice from '../assets/menu/rice/rice.jpg';
import ricenonveg from '../assets/menu/rice/ricenonveg.jpg';
import vegetariansnacks1 from '../assets/menu/vegetariansnacks/vegetariansnacks1.jpg';
import vegetariansnacks2 from '../assets/menu/vegetariansnacks/vegetariansnacks2.jpg';
import soup from '../assets/menu/soups/Soup.jpg';
import roti from '../assets/menu/roti/Wheat_Garlic_Naan.jpg';
import breakfast1 from '../assets/menu/breakfast/breakfast_1.jpg';
import breakfast2 from '../assets/menu/breakfast/breakfast_Veg_Sandwich.jpg';
import breakfast3 from '../assets/menu/breakfast/breakfast_alloo_pakora.jpg';
import breakfast4 from '../assets/menu/breakfast/breakfast_Cheesy_Garlic_Naan_Bread.jpg';
import breakfast5 from '../assets/menu/breakfast/breakfast_Easy_Dosa.jpg';
import breakfast6 from '../assets/menu/breakfast/breakfast_Crispy_Onion_Pakoda.jpg';
import breakfast7 from '../assets/menu/breakfast/breakfast_mini_samosa_1.jpg';
import breakfast8 from '../assets/menu/breakfast/breakfast_Veg_Sandwich.jpg';
import breakfast9 from '../assets/menu/breakfast/breakfast_Achari_Aloo_Tikka.jpg';
import breakfast10 from '../assets/menu/breakfast/breakfast_Mini_Samosa.jpg';
import breakfast11 from '../assets/menu/breakfast/breakfast_Grilled_Cheese_Sandwich.jpg';
import breakfast12 from '../assets/menu/breakfast/breakfast_Onion_Spinach_Pakoras.jpg';
import breakfast13 from '../assets/menu/breakfast/breakfast_Onion_Pakora.jpg';
import softdrinks1 from '../assets/menu/drinks/softdrinks_guava_chilli_drink _ Peru.jpg';
import softdrinks2 from '../assets/menu/drinks/softdrinks_shake_chocolate_shake.jpg';
import { AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation'; 

import Modal from 'react-modal'; 

const menuItems = [
  { name: 'Breakfast', images: [breakfast, breakfast1, breakfast2, breakfast3, breakfast4, breakfast5, breakfast6, breakfast7, breakfast8, breakfast9, breakfast10, breakfast11, breakfast12, breakfast13], link: '/menu/breakfast' },
  { name: 'Lunch & Dinner', images: [lunchveg1, lunchveg2], link: '/menu/lunch-dinner' },
  { name: 'Rice', images: [rice, ricenonveg], link: '/menu/rice' },
  { name: 'Vegetarian Snacks', images: [vegetariansnacks1, vegetariansnacks2], link: '/menu/vegetariansnacks' },
  { name: 'Soups', images: [soup], link: '/menu/soup' },
  { name: 'Roti', images: [roti], link: '/menu/roti' },
  { name: 'Drinks', images: [softdrinks1, softdrinks2], link: '/menu/drinks' },
];

const Menu = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let interval;
    if (hoveredIndex !== null) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => {
          const newIndex = (prev[hoveredIndex] + 1) % menuItems[hoveredIndex].images.length;
          return { ...prev, [hoveredIndex]: newIndex };
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [hoveredIndex]);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedItem(null);
  };

  const handleOptionClick = (option) => {
    if (selectedItem) {
      navigate(`${selectedItem.link}/${option.toLowerCase()}`);
      closeModal();
    }
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-cover bg-center p-6 text-white w-full h-screen flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-4 w-full text-center z-20">
          <h2 className="text-3xl font-montserrat font-thin">Deep Catering & Events Jalandhar</h2>
        </div>
        <div className="relative p-6 text-center z-20 flex-grow flex items-center justify-center">
          <h1 className="text-4xl sm:text-2xl lg:text-5xl tracking-wide">
            <TypeAnimation
              sequence={[
                "Take the guesswork out of your next function. Call Deep Catering & Events for:",
                2000,
                "Weddings, Parties, House Parties, Birthdays, Business Meetings and More!",
              ]}
              wrapper="span"
              speed={50}
              className="bg-gradient-to-r from-orange-300 to-red-600 text-transparent bg-clip-text"
              repeat={Infinity}
            />
          </h1>
        </div>
        <div className="absolute bottom-4 text-center z-20">
          <p className="text-white text-lg font-thin">Swipe up for more</p>
          <div className="mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce mx-auto font-thin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </motion.div>

      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ${modalIsOpen ? 'filter blur-sm' : ''}`}>
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: index * 0.1 }}
            onMouseEnter={() => {
              setHoveredIndex(index);
              setCurrentImageIndex((prev) => ({ ...prev, [index]: 0 }));
            }}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => openModal(item)} // Open modal on click
          >
            <div className="block overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <motion.img
                src={hoveredIndex === index ? item.images[currentImageIndex[index]] : item.images[0]}
                alt={item.name}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.h2
                  className="text-white text-xl font-bold tracking-wide bg-black bg-opacity-70 px-4 py-2 rounded transition-transform duration-300 group-hover:scale-110"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {item.name}
                </motion.h2>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {modalIsOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-800 rounded-lg shadow-lg p-6 max-w-sm w-full relative">
                <button 
                  className="absolute top-2 right-2 text-gray-200 hover:text-gray-400"
                  onClick={closeModal}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
                <h2 className="text-xl font-bold mb-4 text-white">{selectedItem?.name}</h2>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded mb-2 w-full"
                  onClick={() => handleOptionClick('Non-Veg')}
                >
                  Non-Veg
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded w-full"
                  onClick={() => handleOptionClick('Veg')}
                >
                  Veg
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
  