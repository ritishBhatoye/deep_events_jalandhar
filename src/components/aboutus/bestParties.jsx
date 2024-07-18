import React, { useState } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
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

const videos = [
  event1, event2, event3, event4, event5, event6, event7, event8,
  event9, event10, event11, event12, event13, event14, event15, event16
];

const quotes = [
  "Creating memories that last a lifetime",
  "Where every detail matters",
  "Turning your dreams into reality",
  "Exceeding expectations, every time",
  "Crafting experiences, one event at a time",
  "Events with a touch of elegance",
  "Making magic happen, one event at a time",
  "Perfection in every detail",
  "Making your event extraordinary",
  "Designing unforgettable moments"
];

const BestParties = () => {
  const [hovered, setHovered] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [isLandscape, setIsLandscape] = useState(true);

  const openModal = (video) => {
    setCurrentVideo(video);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentVideo(null);
  };

  const toggleOrientation = () => {
    setIsLandscape(!isLandscape);
  };

  const visibleVideos = showMore ? videos : videos.slice(0, 8);

  return (
    <section className="py-16 px-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Only Best Parties</h2>
          <p className="text-gray-100 mb-6">Discover our story</p>
          <p className="text-gray-100">
            Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside...
          </p>
        </div>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {visibleVideos.map((video, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer rounded-lg shadow-lg overflow-hidden"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => openModal(video)}
          >
            <video src={video} className="w-full h-64 object-cover" />
            {hovered === index && (
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black to-transparent text-white p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-2xl font-thin mb-2">{quotes[index % quotes.length]}</h1>
                <p className="text-lg font-thin">{2018 + (index % 7)}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="flex justify-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.0 }}
      >
        {!showMore ? (
          <button
            onClick={() => setShowMore(true)}
            className="bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-4 rounded"
          >
            Show More
          </button>
        ) : (
          <button
            onClick={() => setShowMore(false)}
            className="bg-gradient-to-r from-red-500 to-yellow-500 text-white py-2 px-4 rounded"
          >
            Show Less
          </button>
        )}
      </motion.div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
        contentLabel="Video Modal"
      >
        <motion.div
          className="bg-white rounded-lg p-4 max-w-lg w-full h-auto overflow-auto"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className={`relative ${isLandscape ? 'w-full' : 'h-full'}`}>
            <video
              src={currentVideo}
              controls
              className={`object-cover ${isLandscape ? 'w-full h-64' : 'h-full w-64'}`}
            />
            <button
              onClick={toggleOrientation}
              className="absolute top-2 right-2 bg-blue-500 text-white py-2 px-4 rounded"
            >
              {isLandscape ? 'Portrait' : 'Landscape'}
            </button>
          </div>
          <button
            onClick={closeModal}
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
          >
            Close
          </button>
        </motion.div>
      </Modal>
    </section>
  );
};

export default BestParties;
