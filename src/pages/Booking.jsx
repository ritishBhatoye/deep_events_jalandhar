import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImage from '../assets/services/wedding_image.png'; // Adjust the path accordingly

const BookingForm = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const data = {
      from_name: formData.get("customer-name"),
      from_email: formData.get("customer-email"),
      phone_number: formData.get("phone-number"),
      booking_date: formData.get("booking-date"),
      function_date: formData.get("function-date"),
      palace: formData.get("palace"),
      members: formData.get("members"),
    };

    try {
      // Send email using emailjs
      await emailjs.send('service_npavkes', 'template_wliif7j', data, "ANlmnkhJtKMonPp4V");
      
      // Show success toast
      toast.success('Your details are submitted successfully and we will contact you very soon');

      // Construct WhatsApp message
      const whatsappMessage = `
        New Booking Request:
        Name: ${data.from_name}
        Email: ${data.from_email}
        Phone: ${data.phone_number}
        Booking Date: ${data.booking_date}
        Function Date: ${data.function_date}
        Palace: ${data.palace}
        Members: ${data.members}
      `.trim();

      // Replace with your WhatsApp number
      const whatsappNumber = '7087963595'; // Example: '1234567890'
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

      // Open WhatsApp
      window.open(whatsappURL, '_blank');

    } catch (error) {
      console.error(error);
      toast.error('Failed to send the message. Please try again.');
    }
  };

  return (
    <motion.div 
      className="mx-auto w-full text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div 
        className="relative bg-cover bg-center p-6 text-white w-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative p-6 text-center">
          <h2 className="text-2xl font-bold mb-2">Deep Catering & Events</h2>
          <h1 className='text-2xl sm:text-2xl lg:text-4xl text-center tracking-wide'>
            Take the guesswork out of your next function. Call Deep Catering & Events for:
            <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
              {" "}Wedding, Parties, House Parties, Birthdays, Business Meetings and More!
            </span>
          </h1>
        </div>
      </div>
      
      <form ref={form} onSubmit={sendEmail} className="container p-4 px-6 space-y-8 mt-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {['Customer\'s Name', 'Customer Email', 'Phone Number', 'Booking Date', 'Function Date', 'Palace', 'Members'].map((label, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <label htmlFor={label.toLowerCase().replace(' ', '-')} className="block text-md font-medium text-gray-400 mb-2">
                {label}
              </label>
              <input
                type={label.includes('Date') ? 'date' : label === 'Members' ? 'number' : label === 'Phone Number' ? 'tel' : label === 'Customer Email' ? 'email' : 'text'}
                name={label.toLowerCase().replace(' ', '-')}
                id={label.toLowerCase().replace(' ', '-')}
                className="mt-1 block w-full bg-transparent border-b border-white text-white focus:border-orange-500 focus:outline-none transition duration-300 ease-in-out"
                required
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="border-t pt-6 border-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-2">Food Service</h3>
          <p className="text-md text-gray-400 mb-2">Special Arrangements for Marriages, Parties & Other Occasions.</p>
          <p className="text-md text-gray-400 mb-4">We also do Complete Arrangements e.g.:</p>
          <ul className="text-md text-gray-400 list-disc list-inside space-y-1">
            {['Waiters (Boy & Girls)', 'Flower Decorations & Flower Girls', 'Hi-Fi DJ & Dance Groups', 'Light & Sound System', 'Home Lighting', 'Photography Video & Still', 'Waterproof Tents & Pandal', 'Outdoor & Indoor Catering'].map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <div className="flex justify-end">
          <motion.button
            type="submit"
            className="inline-flex items-center px-6 py-3 border border-transparent text-md font-medium rounded-md text-white bg-indigo-600 shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </div>
      </form>
      <ToastContainer />
    </motion.div>
  );
};

export default BookingForm;
