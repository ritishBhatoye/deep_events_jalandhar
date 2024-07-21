import React, { useState } from 'react';
import Modal from 'react-modal';
import img1 from '../../assets/aboutus/aboutus1.jpg';
import event1 from '../../assets/events/Event-1.MP4';
import event2 from '../../assets/events/EVENT-2.MP4';

const SpecialEvent = () => {
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
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2">
            <img
              src={img1}
              alt="Special Event at Deep Events Jalandhar"
              className="rounded-lg object-cover shadow-lg w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-gray-100">We Know How to Make Something Special</h2>
            <p className="text-xl text-gray-100 font-light mb-4">Events from A to Z</p>
            <p className="text-gray-100 font-light mb-6">
              At Deep Events Jalandhar, we specialize in comprehensive event management, planning, and organization. Whether you're planning a wedding, corporate event, or birthday party, our team ensures a seamless and unforgettable experience for you and your guests. With our expertise, you can enjoy every moment of your event without any worries.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[event1, event2].map((video, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg cursor-pointer overflow-hidden"
                  onClick={() => openModal(video)}
                >
                  <video src={video} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-medium">Event {index + 1}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
      >
        <div className="bg-white rounded-lg p-4 w-full max-w-3xl">
          <video src={currentVideo} controls className="w-full h-auto mb-4" />
          <button
            onClick={closeModal}
            className="w-full bg-red-500 text-white py-2 px-4 rounded font-light hover:bg-red-600 transition-colors"
          >
            Close
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default SpecialEvent;