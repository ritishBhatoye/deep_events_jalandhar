import React from 'react';

const ContactUsHeader = () => {
  return (
    <header className="flex flex-col items-center p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-3xl sm:text-4xl font-light font-montserrat mb-4 sm:mb-6 md:mb-8 animate-fade-in">
        Contact Us
      </h1>
      <nav aria-label="breadcrumb" className="mb-4 sm:mb-6 md:mb-8 animate-fade-in">
        <ol className="flex items-center text-sm sm:text-base font-light font-montserrat">
          <li><a href="/" className="text-blue-500 hover:underline">Deep Event Jalandhar</a></li>
          <li className="mx-2">&gt;</li>
          <li aria-current="page">Contact Us</li>
        </ol>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 sm:mb-10 animate-fade-in">
        <address className="text-center animate-slide-up not-italic">
          <h2 className="text-lg sm:text-xl font-light font-montserrat text-orange-600 mb-2">Main Office</h2>
          <p className="text-base sm:text-lg font-light font-montserrat mb-1">Main Road Dakoha, Near Baba Budha Ji Gurudwara, Dakoha, Jalandhar - 144023</p>
          <a href="mailto:deepcateringandevents@mail.com" className="text-base sm:text-lg font-light font-montserrat text-blue-500 hover:underline block mb-1">deepcateringandevents@mail.com</a>
          <a href="tel:+919876125394" className="text-base sm:text-lg font-light font-montserrat text-blue-500 hover:underline">+91 9876125394</a>
        </address>
        <address className="text-center animate-slide-up not-italic">
          <h2 className="text-lg sm:text-xl font-light font-montserrat text-orange-600 mb-2">Second Office</h2>
          <p className="text-base sm:text-lg font-light font-montserrat mb-1">Arman Nagar, Main Road, Jalandhar - 144023</p>
          <a href="mailto:deepcateringandevents@mail.com" className="text-base sm:text-lg font-light font-montserrat text-blue-500 hover:underline block mb-1">deepcateringandevents@mail.com</a>
          <a href="tel:+919501958595" className="text-base sm:text-lg font-light font-montserrat text-blue-500 hover:underline">+91 9501958595</a>
        </address>
      </div>
      <div className="w-full flex justify-center mb-6 sm:mb-8 animate-fade-in">
        <iframe
          className="w-full sm:w-11/12 md:w-4/5 h-48 sm:h-56 md:h-64"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13609.064625244572!2d75.57618285324642!3d31.325181635034303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b5044b4ad79%3A0x8d9732a94ae7fdd7!2sModel%20Town%2C%20Jalandhar%2C%20Punjab%20144003!5e0!3m2!1sen!2sin!4v1656592821256!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps - Deep Event Jalandhar Location"
        ></iframe>
      </div>
      <a
        href="https://maps.app.goo.gl/1b956xFToy9aUPVAA"
        className="text-blue-500 hover:underline font-light font-montserrat animate-fade-in"
        target="_blank"
        rel="noopener noreferrer"
      >
        View larger map
      </a>
    </header>
  );
};

export default ContactUsHeader;