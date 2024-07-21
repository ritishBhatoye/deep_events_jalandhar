import React, { useState, useRef, useEffect } from 'react';
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

const events = [
  { video: event1, name: "Haldi (ਹਲਦੀ)", year: 2018, location: "Phagwara", description: "Vibrant pre-wedding celebration with our signature turmeric paste application" },
  { video: event2, name: "Bhog (ਭੋਗ)", year: 2019, location: "Kapurthala", description: "Sikh prayer ceremony with our expertly catered langar service" },
  { video: event3, name: "Wedding (ਵਿਆਹ)", year: 2020, location: "Nakodar", description: "Grand Punjabi wedding orchestrated with our meticulous planning and catering" },
  { video: event4, name: "Birthday Party (ਜਨਮਦਿਨ ਪਾਰਟੀ)", year: 2017, location: "Adampur", description: "Joyous celebration featuring our themed decor and gourmet catering" },
  { video: event5, name: "Jaggo Night (ਜਾਗੋ ਨਾਈਟ)", year: 2021, location: "Kartarpur", description: "Pre-wedding festivity organized with our signature entertainment and cuisine" },
  { video: event6, name: "Reception Party (ਰਿਸੈਪਸ਼ਨ ਪਾਰਟੀ)", year: 2016, location: "Phillaur", description: "Elegant post-wedding celebration with our premium catering services" },
  { video: event7, name: "House Opening Ceremony (ਘਰ ਦੀ ਚੜ੍ਹਾਈ)", year: 2022, location: "Nurmahal", description: "Traditional housewarming planned with our attention to ritual details and festive catering" },
  { video: event8, name: "Haldi (ਹਲਦੀ)", year: 2019, location: "Jalandhar", description: "Vibrant pre-wedding celebration with our signature turmeric paste application" },
  { video: event9, name: "Bhog (ਭੋਗ)", year: 2018, location: "Hoshiarpur", description: "Sikh prayer ceremony with our expertly catered langar service" },
  { video: event10, name: "Wedding (ਵਿਆਹ)", year: 2021, location: "Ludhiana", description: "Grand Punjabi wedding orchestrated with our meticulous planning and catering" },
  { video: event11, name: "Birthday Party (ਜਨਮਦਿਨ ਪਾਰਟੀ)", year: 2016, location: "Amritsar", description: "Joyous celebration featuring our themed decor and gourmet catering" },
  { video: event12, name: "Jaggo Night (ਜਾਗੋ ਨਾਈਟ)", year: 2020, location: "Bathinda", description: "Pre-wedding festivity organized with our signature entertainment and cuisine" },
  { video: event13, name: "Reception Party (ਰਿਸੈਪਸ਼ਨ ਪਾਰਟੀ)", year: 2017, location: "Patiala", description: "Elegant post-wedding celebration with our premium catering services" },
  { video: event14, name: "House Opening Ceremony (ਘਰ ਦੀ ਚੜ੍ਹਾਈ)", year: 2019, location: "Moga", description: "Traditional housewarming planned with our attention to ritual details and festive catering" },
  { video: event15, name: "Haldi (ਹਲਦੀ)", year: 2022, location: "Ferozepur", description: "Vibrant pre-wedding celebration with our signature turmeric paste application" },
  { video: event16, name: "Bhog (ਭੋਗ)", year: 2018, location: "Fazilka", description: "Sikh prayer ceremony with our expertly catered langar service" },
];

const PopupComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [orientation, setOrientation] = useState('portrait');
  const [showAll, setShowAll] = useState(false);
  const videoRefs = useRef(events.map(() => React.createRef()));

  useEffect(() => {
    // Lazy load videos
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const video = entry.target;
          video.src = video.dataset.src;
          observer.unobserve(video);
        }
      });
    }, { rootMargin: '100px' });

    videoRefs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleOpen = (event) => {
    setSelectedEvent(event);
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

  const handleMouseEnter = (index) => {
    videoRefs.current[index].current.play();
  };

  const handleMouseLeave = (index) => {
    videoRefs.current[index].current.pause();
    videoRefs.current[index].current.currentTime = 0;
  };

  const toggleOrientation = () => {
    setOrientation(orientation === 'portrait' ? 'landscape' : 'portrait');
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const visibleEvents = showAll ? events : events.slice(0, 8); // Show 8 events (2 rows) initially

  return (
    <section className="event-gallery py-8" aria-label="Event Gallery">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-light mb-6 text-center">Our Event Planning and Catering Portfolio</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {visibleEvents.map((event, index) => (
            <article key={index} className="event-item">
              <div 
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => handleOpen(event)}
              >
                <video 
                  ref={videoRefs.current[index]}
                  data-src={event.video}
                  className="w-full h-40 sm:h-48 object-cover"
                  muted
                  loop
                  playsInline
                  poster={`path/to/${event.name.split(' ')[0].toLowerCase()}_thumbnail.jpg`}
                  aria-label={`${event.name} event video preview`}
                />
                <motion.div 
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity p-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <h2 className="text-white text-base md:text-lg font-light mb-2 font-cursive">{event.name}</h2>
                  <p className="text-white text-xs md:text-sm font-light font-cursive">{event.year} - {event.location}</p>
                </motion.div>
              </div>
            </article>
          ))}
        </div>
        {!showAll && (
          <div className="text-center mt-8">
            <button
              onClick={toggleShowAll}
              className="bg-gray-800 text-gray-100 px-4 py-2 rounded font-light hover:bg-gray-700 transition-colors"
            >
              Show More
            </button>
          </div>
        )}
      </div>
      
      {isOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className={`popup bg-black text-gray-100 p-4 sm:p-6 rounded-lg shadow-lg relative max-w-3xl w-full ${orientation === 'landscape' ? 'h-auto' : 'max-h-[90vh] overflow-y-auto'}`}>
            <button 
              onClick={handleClose} 
              className="absolute top-2 right-2 text-gray-100 text-lg font-light"
              aria-label="Close popup"
            >
              &times;
            </button>
            <h3 className="text-xl sm:text-2xl font-light mb-2 font-cursive">{selectedEvent.name}</h3>
            <p className="text-xs sm:text-sm mb-4 font-light">{selectedEvent.year} - {selectedEvent.location}</p>
            <div className={`video-container ${orientation === 'landscape' ? 'h-64 sm:h-96' : 'h-48 sm:h-64'}`}>
              <video 
                src={selectedEvent.video} 
                className="w-full h-full object-contain rounded" 
                controls
                aria-label={`${selectedEvent.name} event video`}
              />
            </div>
            <button 
              onClick={toggleOrientation}
              className="mt-2 text-sm font-light bg-gray-800 text-gray-100 px-2 py-1 rounded"
            >
              {orientation === 'portrait' ? 'Switch to Landscape' : 'Switch to Portrait'}
            </button>
            <p className="mt-4 text-xs sm:text-sm leading-relaxed font-light">{selectedEvent.description}</p>
            <p className="mt-2 text-xs sm:text-sm font-light">Let our expert event planning and catering team create an unforgettable {selectedEvent.name.split('(')[0].trim()} experience for you.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PopupComponent;