import React from 'react';

const ContactUsHeader = () => {
  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="text-4xl font-thin font-montserrat mb-8 animate-fade-in">CONTACT US</h1>
      <p className="text-lg font-thin font-montserrat mb-8 animate-fade-in">
        DEEP EVENT JALANDHAR &gt; CONTACT US
      </p>
      <div className="flex flex-wrap justify-center gap-16 mb-10 animate-fade-in">
        <div className="text-center animate-slide-up w-full md:w-1/3">
          <h2 className="text-xl font-thin font-montserrat text-orange-600">MAIN OFFICE</h2>
          <p className="text-lg font-thin font-montserrat">Main Road Dakoha, Near Baba Budha Ji Gurudwara, Dakoha, Jalandhar - 144023</p>
          <p className="text-lg font-thin font-montserrat">deepcateringandevents@mail.com</p>
          <p className="text-lg font-thin font-montserrat">+91 9876125394</p>
        </div>
        <div className="text-center animate-slide-up w-full md:w-1/3">
          <h2 className="text-xl font-thin font-montserrat text-orange-600">SECOND OFFICE</h2>
          <p className="text-lg font-thin font-montserrat">Arman Nagar, Main Road, Jalandhar - 144023</p>
          <p className="text-lg font-thin font-montserrat">deepcateringandevents@mail.com</p>
          <p className="text-lg font-thin font-montserrat">+91 9501958595</p>
        </div>
      </div>
      <div className="w-full flex justify-center mb-10 animate-fade-in">
        <iframe
          className="w-4/5 h-64"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13609.064625244572!2d75.57618285324642!3d31.325181635034303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b5044b4ad79%3A0x8d9732a94ae7fdd7!2sModel%20Town%2C%20Jalandhar%2C%20Punjab%20144003!5e0!3m2!1sen!2sin!4v1656592821256!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
      <a
        href="https://maps.app.goo.gl/1b956xFToy9aUPVAA"
        className="text-blue-500 hover:underline font-thin font-montserrat animate-fade-in"
        target="_blank"
        rel="noopener noreferrer"
      >
        View larger map
      </a>
    </div>
  );
};

export default ContactUsHeader;
