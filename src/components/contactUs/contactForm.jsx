import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import 'tailwindcss/tailwind.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      alert('Please accept the terms and conditions');
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send('service_npavkes', 'template_wliif7j', templateParams, "ANlmnkhJtKMonPp4V")
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '', termsAccepted: false });
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send message.');
      });
  };

  return (
    <section className="flex flex-col items-center font-montserrat p-4 sm:p-6 md:p-8 lg:p-10 animate-fade-in">
      <h2 className="text-base sm:text-lg font-extralight mb-2 sm:mb-4 text-center">LEAVE A MESSAGE</h2>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extralight mb-4 sm:mb-6 md:mb-8 text-center">LET'S MAKE SOMETHING NEW TOGETHER</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg sm:max-w-xl md:max-w-2xl">
        <div className="flex flex-wrap -mx-2 mb-4 sm:mb-6">
          <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0 animate-slide-up">
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 sm:py-3 px-3 sm:px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 transition duration-300"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              aria-label="Your name"
            />
          </div>
          <div className="w-full sm:w-1/2 px-2 animate-slide-up">
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 sm:py-3 px-3 sm:px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 transition duration-300"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              aria-label="Your email"
            />
          </div>
        </div>
        <div className="w-full px-2 mb-4 sm:mb-6 animate-slide-up">
          <textarea
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 sm:py-3 px-3 sm:px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 transition duration-300"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write message"
            required
            rows="4"
            aria-label="Your message"
          />
        </div>
        <div className="w-full px-2 mb-4 sm:mb-6 animate-slide-up">
          <label className="flex items-center">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
              aria-label="Accept terms and conditions"
            />
            <span className="text-xs sm:text-sm text-gray-600 font-extralight">
              I accept <a href="/terms" className="underline">Terms & Conditions</a> for processing personal data
            </span>
          </label>
        </div>
        <div className="w-full px-2 animate-slide-up">
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 sm:py-3 px-4 rounded focus:outline-none hover:bg-orange-700 transition duration-300 font-light"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;