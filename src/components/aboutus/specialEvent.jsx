import React, { useState } from 'react';
import Modal from 'react-modal';
import img1 from '../../assets/aboutus/aboutus1.jpg';
import img2 from '../../assets/aboutus/aboutus2.jpg';
import event1 from '../../assets/events/Event-1.MP4';
import event2 from '../../assets/events/EVENT-2.MP4';
import event3 from '../../assets/events/EVENT-3.MP4';
import event4 from '../../assets/events/EVENT-4.MP4';
import event5 from '../../assets/events/EVENT-5.MP4';

const SpecialEvent = () => {
  const [hovered, setHovered] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const openModal = (video) => {
    setCurrentVideo(video);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentVideo(null);
  };

  return (
    <section className="flex flex-col items-center py-16 px-8">
      <div className="flex flex-col md:flex-row items-center w-full mb-8">
        <div className="md:w-1/2 relative ">
          <img
            src={hovered ? img1 : img1}
            alt="Special Event"
            className="rounded-lg object-cover shadow-lg h-half w-3/4 h-auto transition-transform duration-300" 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
          {/* {hovered && (
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black to-transparent text-white text-lg font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0 }}
            >
              <h1 className="font-thin text-2xl mb-2">"Making Moments Memorable"</h1>
              <p className="font-thin text-lg text-center px-4">Make Your Dream Event Come True with Our Professional Planning Services, Tailored to Your Unique Vision and Needs</p>
            </motion.div>
          )} */}
        </div>
        <div className='md:w-1/2'>
        <div className="md:w-full md:pl-8">
          <h2 className="text-4xl font-bold mb-4  text-gray-100">We Know How to Make Something Special</h2>
          <p className="text-xl text-gray-100">Events from A to Z</p>
          <p className=" text-gray-100 mt-4">
            At Deep Events Jalandhar, we specialize in comprehensive event management, planning, and organization. Whether you're planning a wedding, corporate event, or birthday party, our team ensures a seamless and unforgettable experience for you and your guests. With our expertise, you can enjoy every moment of your event without any worries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  md:pl-8 mt-4 w-full">
        {[event1, event2].map((video, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg cursor-pointer"
            onClick={() => openModal(video)}
          >
            <video src={video} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Event {index + 1}</h3>
            </div>
          </div>
        ))}
      </div>
     </div>
      </div>
     
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
      >
        <div className="bg-white rounded-lg p-4 max-w-lg w-full">
          <video src={currentVideo} controls className="w-full h-auto" />
          <button
            onClick={closeModal}
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default SpecialEvent;
