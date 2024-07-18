import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

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
    <div className="flex flex-col items-center font-montserrat p-10 animate-fade-in">
      <h2 className="text-lg font-light mb-4">LEAVE A MESSAGE</h2>
      <h1 className="text-4xl font-thin mb-8">LET'S MAKE SOMETHING NEW TOGETHER</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 animate-slide-up">
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              style={{ fontWeight: 300 }} // font-thin
            />
          </div>
          <div className="w-full md:w-1/2 px-3 animate-slide-up">
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              style={{ fontWeight: 300 }} // font-thin
            />
          </div>
        </div>
        <div className="w-full px-3 mb-6 animate-slide-up">
          <textarea
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write message"
            required
            style={{ fontWeight: 300 }} // font-thin
          />
        </div>
        <div className="w-full px-3 mb-6 animate-slide-up">
          <label className="flex items-center">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />
            <span className="text-sm text-gray-600" style={{ fontWeight: 300 }}>
              I accept <a href="#" className="underline">Terms & Conditions</a> for processing personal data
            </span>
          </label>
        </div>
        <div className="w-full px-3 animate-slide-up">
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 px-4 rounded focus:outline-none hover:bg-orange-700"
            style={{ fontWeight: 300 }}
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
