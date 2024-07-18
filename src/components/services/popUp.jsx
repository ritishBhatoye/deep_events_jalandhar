import React, { useState } from 'react';
import { motion } from 'framer-motion';
import anime from 'animejs';
import event1 from '../../assets/events/Event-1.MP4'; 
import event2 from '../../assets/events/EVENT-2.MP4'; 
import event3 from '../../assets/events/EVENT-3.MP4'; 
import event4 from '../../assets/events/EVENT-4.MP4'; 
import event5 from '../../assets/events/EVENT-5.MP4'; 
import event6 from '../../assets/events/EVENT-6.MP4'; 
import event7 from '../../assets/events/EVENT-7.MP4'; 
import event8 from '../../assets/events/EVENT-8.MP4'; 
import event9 from '../../assets/events/EVENT-9.MP4'; 
import event10 from '../../assets/events/EVENT-10.MP4'; 
import event11 from '../../assets/events/EVENT-11.MP4'; 
import event12 from '../../assets/events/EVENT-12.MP4'; 
import event13 from '../../assets/events/EVENT-13.MP4'; 
import event14 from '../../assets/events/EVENT-14.MP4'; 
import event15 from '../../assets/events/EVENT-15.MP4'; 
import event16 from '../../assets/events/EVENT-16.MP4'; 

const PopupComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    anime({
      targets: '.popup',
      opacity: [0, 1],
      translateY: [-50, 0],
      easing: 'easeOutExpo',
      duration: 500,
    });
  };

  const handleClose = () => {
    anime({
      targets: '.popup',
      opacity: [1, 0],
      translateY: [0, -50],
      easing: 'easeOutExpo',
      duration: 500,
      complete: () => setIsOpen(false),
    });
  };

  return (
    <div className="flex flex-wrap">
      {[event1, event2, event3, event4, event5, event6, event7, event8, event9, event10, event11, event12, event13, event14, event15, event16].map((event, index) => (
        <div key={index} className="w-1/2 md:w-1/4 p-2">
          <div className="relative">
            <video src={event} className="w-full h-auto" onClick={handleOpen} />
            <motion.div 
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.05 }}
            >
              <button 
                onClick={handleOpen} 
                className="text-white text-lg font-bold"
              >
                View Project
              </button>
            </motion.div>
          </div>
        </div>
      ))}
      
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="popup bg-white p-6 rounded-lg shadow-lg relative">
            <button 
              onClick={handleClose} 
              className="absolute top-2 right-2 text-black text-lg font-bold"
            >
              &times;
            </button>
            {/* You can add more detailed content or videos inside the popup */}
            <p>Project details or video goes here...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupComponent;
