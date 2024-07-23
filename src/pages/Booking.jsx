import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TypeAnimation } from 'react-type-animation';
import ThreeJSBackground from '../components/ThreeJSBackground'; // Import the ThreeJSBackground component
import backgroundImage from '../assets/services/wedding_image.png'; 

const splashEffect = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: 'easeOut' }
};

const BookingForm = () => {
  const form = useRef();
  const controls = useAnimation();
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      
      // Show success popup instead of toast
      setIsSubmitted(true);

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

  const SuccessPopup = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4"
    >
      <div className="bg-customGreenLight p-6 sm:p-8 rounded-lg shadow-lg text-center max-w-sm w-full">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="text-4xl sm:text-6xl mb-4"
        >
          🎉
        </motion.div>
        <h2 className="text-xl sm:text-2xl font-bold text-customWhite mb-4">Booking Submitted!</h2>
        <p className="text-sm sm:text-base text-customWhite mb-6">Your details are submitted successfully and we will contact you very soon.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-customAccent text-customGreen px-4 py-2 rounded-md text-sm sm:text-base"
          onClick={() => setIsSubmitted(false)}
        >
          Close
        </motion.button>
      </div>
    </motion.div>
  );

  return (
    <motion.div 
      className="mx-auto w-full text-white relative min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <ThreeJSBackground />
      
      <motion.div 
        className="relative bg-cover bg-center p-6 text-white w-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial={{ height: 'auto' }}
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
      
      <form ref={form} onSubmit={sendEmail} className="flex-grow relative content-center p-4 sm:px-8 md:px-16 lg:px-32 items-center space-y-12 mt-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {['Customer\'s Name', 'Customer Email', 'Phone Number', 'Booking Date', 'Function Date', 'Palace', 'Members'].map((label, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative" // Add relative positioning
            >
              <label htmlFor={label.toLowerCase().replace(' ', '-')} className="block text-md font-medium text-gray-400 mb-2 relative z-10">
                {label}
              </label>
              <input
                type={label.includes('Date') ? 'date' : label === 'Members' ? 'number' : label === 'Phone Number' ? 'tel' : label === 'Customer Email' ? 'email' : 'text'}
                name={label.toLowerCase().replace(' ', '-')}
                id={label.toLowerCase().replace(' ', '-')}
                className="mt-1 block w-full bg-transparent border-b border-white text-white focus:border-orange-500 focus:outline-none transition duration-300 ease-in-out relative z-10"
                required
              />
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8 relative pb-8">
          <motion.button
            type="submit"
            className="inline-flex font-montserrat items-center px-6 py-3 border border-transparent text-md font-medium rounded-md text-white bg-gradient-to-r from-orange-500 to-red-800 shadow-md hover:from-orange-600 hover:to-red-900 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:shadow-lg relative z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </div>
      </form>
      <AnimatePresence>
        {isSubmitted && <SuccessPopup />}
      </AnimatePresence>
      <ToastContainer />
    </motion.div>
  );
};

export default BookingForm;