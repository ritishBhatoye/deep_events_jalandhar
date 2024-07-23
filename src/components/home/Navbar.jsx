// src/components/home/Navbar.js
import React, { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";
import logo from "../../assets/deep_event_jalandhar.png";
import { navItems } from "../../constants";
import { Link, useLocation } from 'react-router-dom';
import QRCode from 'qrcode.react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [buttonText, setButtonText] = useState('Call Now');
  const [modalOpen, setModalOpen] = useState(false);
  const [qrCodeValue, setQrCodeValue] = useState('');
  const [modalMessage, setModalMessage] = useState('');

  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleText = () => {
    setButtonText(prev => (prev === 'Call Now' ? 'WhatsApp' : 'Call Now'));
  };

  useEffect(() => {
    const interval = setInterval(toggleText, 5000);
    return () => clearInterval(interval);
  }, []);

  const location = useLocation();
  const isActive = (href) => location.pathname === href;

  const handleButtonClick = () => {
    const isMobileDevice = window.innerWidth < 1024; // Adjusted to consider lg screen size

    if (buttonText === 'Call Now') {
      if (isMobileDevice) {
        window.location.href = 'tel:+9876125394'; // Replace with actual phone number
      } else {
        setQrCodeValue('tel:9876125394');
        setModalMessage('SCAN TO CALL');
        setModalOpen(true);
      }
    } else {
      if (isMobileDevice) {
        window.location.href = 'https://wa.me/9876125394'; // Replace with actual WhatsApp number
      } else {
        setQrCodeValue('https://wa.me/9876125394');
        setModalMessage('SCAN TO WHATSAPP MESSAGE');
        setModalOpen(true);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black/50 backdrop-filter backdrop-blur-lg">
      <nav className="py-2 sm:py-3 border-b border-neutral-700/30" aria-label="Main navigation">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img className="h-auto w-12 sm:w-16 md:w-20 mr-2" src={logo} alt="Deep Event Jalandhar Logo" />
                <span className="text-base sm:text-lg md:text-xl font-semibold tracking-tight sr-only">
                  Deep Event Jalandhar
                </span>
              </Link>
            </div>
            
            <ul className="hidden md:flex ml-4 lg:ml-14 space-x-2 sm:space-x-4 lg:space-x-12">
              {navItems.map((item, index) => (
                <li key={index}> 
                  <Link 
                    to={item.href}
                    className={`relative py-1 sm:py-2 px-2 sm:px-3 text-sm sm:text-base transition-colors duration-400 ${isActive(item.href) ? 'text-orange-500' : 'hover:text-orange-500'}`}
                  >
                    {item.label}
                    <span 
                      className={`absolute bottom-0 left-0 right-0 h-0.5 transition-width duration-500 ${isActive(item.href) ? 'bg-gradient-to-r from-orange-500 to-orange-800 w-full' : 'w-0 group-hover:w-full'}`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden md:flex justify-center space-x-2 sm:space-x-4 lg:space-x-12 items-center">
              <button 
                onClick={handleButtonClick}
                className="py-1 sm:py-2 px-2 sm:px-3 text-sm sm:text-base border rounded-md transition-colors duration-300 hover:bg-orange-500 hover:text-white"
              >
                {buttonText}
              </button>
              <Link 
                to="/booknow"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-1 sm:py-2 px-2 sm:px-3 text-sm sm:text-base rounded-md transition-transform duration-300 hover:scale-105"
              >
                BOOK NOW
              </Link>
            </div>
            <button 
              className="md:hidden flex items-center z-50"
              onClick={toggleNavBar}
              aria-expanded={mobileDrawerOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileDrawerOpen ? (
                <X size={24} className="text-white" aria-hidden="true" />
              ) : (
                <Menu size={24} className="text-white" aria-hidden="true" />
              )}
            </button>
          </div>
          
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <Link 
                      to={item.href}
                      onClick={() => setMobileDrawerOpen(false)}
                      className={`block text-xl py-2 px-3 transition-colors duration-300 ${
                        isActive(item.href) 
                          ? 'text-orange-500 font-semibold' 
                          : 'text-white hover:text-orange-500'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6">
                <button 
                  onClick={() => {
                    handleButtonClick();
                    setMobileDrawerOpen(false);
                  }}
                  className="w-full py-3 px-4 text-lg border border-orange-500 text-orange-500 rounded-md transition-colors duration-300 hover:bg-orange-500 hover:text-white"
                >
                  {buttonText}
                </button>
                <Link 
                  to="/booknow"
                  className="w-full py-3 px-4 text-lg rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-white text-center transition-transform duration-300 hover:scale-105"
                  onClick={() => setMobileDrawerOpen(false)}
                >
                  BOOK NOW
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      <AnimatePresence>
        {modalOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 sm:p-6 rounded-md shadow-lg text-center flex flex-col items-center max-w-xs sm:max-w-sm w-full mx-auto"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              style={{ margin: 'auto' }}
            >
              <QRCode value={qrCodeValue} className="mb-4" size={150} />
              <p className="text-base sm:text-lg font-semibold mb-4">{modalMessage}</p>
              <div className="flex flex-col space-y-2 w-full">
                <button 
                  className="w-full px-4 py-2 text-sm sm:text-base border border-transparent text-white rounded-md transition-colors duration-300 hover:bg-white hover:text-black"
                  onClick={() => {
                    navigator.clipboard.writeText(qrCodeValue);
                  }}
                >
                  Copy to Clipboard
                </button>
                <button 
                  onClick={() => setModalOpen(false)}
                  className="w-full px-4 py-2 text-sm sm:text-base bg-red-500 text-white rounded-md transition-colors duration-300 hover:bg-red-600"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;