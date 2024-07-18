import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TypeAnimation } from 'react-type-animation';
import backgroundImage from '../assets/services/wedding_image.png'; 

const splashEffect = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: 'easeOut' }
};

const BookingForm = () => {
  const form = useRef();
  const controls = useAnimation();

  useEffect(() => {
    // Trigger the animation after a short delay
    controls.start({
      height: '50vh',
      transition: { duration: 1 }
    });
  }, [controls]);

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
      transition={{ duration: 1.5 }}
    >
      <motion.div 
        className="relative bg-cover bg-center p-6 text-white w-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial={{ height: '100vh' }}
        animate={controls}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative p-6 text-center h-full flex flex-col justify-center">
          <h2 className="text-2xl mb-2 font-montserrat font-thin">Deep Catering & Events</h2>
          <h1 className='text-3xl mt-4 sm:text-2xl lg:text-5xl text-center tracking-wide'>
            <TypeAnimation
              sequence={[
                "Take the guesswork out of your next function. Call Deep Catering & Events for:",
                2000,
                "Wedding, Parties, House Parties, Birthdays, Business Meetings and More!",
              ]}
              wrapper="span"
              speed={50}
              className='bg-gradient-to-r mt-4 font-montserrat from-orange-300  to-red-600 text-transparent bg-clip-text'
              repeat={Infinity}
            />
          </h1>
        </div>
      </motion.div>
      
      <form ref={form} onSubmit={sendEmail} className="relative content-center p-4 px-32 items-center space-y-12 mt-12">
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
        
        <div className="flex justify-center mt-8">
          <motion.button
            type="submit"
            className="inline-flex font-montserrat items-center px-6 py-3 border border-transparent text-md font-medium rounded-md text-white bg-gradient-to-r from-orange-500 to-red-800 shadow-md hover:from-orange-600 hover:to-red-900 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:shadow-lg"
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
