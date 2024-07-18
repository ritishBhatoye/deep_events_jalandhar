// src/Footer.jsx
import logo from "../../assets/deep_event_jalandhar.png";
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import anime from 'animejs';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    useEffect(() => {
        anime({
            targets: '.footer-content',
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 1500,
            easing: 'easeOutExpo',
        });
    }, []);

    return (
        <motion.div
            className="bg-gradient-to-r from-gray-900 via-gray-900 to-black text-white py-12 mt-10 md:px-12 rounded-t-lg font-montserrat"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto footer-content grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="flex flex-col items-start">
                    <img src={logo} alt="Deep Event Jalandhar" className="w-32 h-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-4">DEEP EVENT JALANDHAR</h2>
                </div>
                <div className="space-y-4">
                    <h3 className="text-sm font-bold mb-2">CONTACT</h3>
                    <p>Main Road Dakoha, Near Baba Budha Ji Gurudwara, Dakoha, Jalandhar - 144023 (Dakoha Railway Crossing)</p>
                    <p><a href="mailto:deepcateringandevents" className="hover:underline">deepcateringandevents@mail.com</a></p>
                    <p>+91 98761 25394</p>
                    <p>+91 95019 58595</p>
                </div>
                <div>
                    <h3 className="text-sm font-bold mb-2">USEFUL LINKS</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:underline">User Guide</a></li>
                        <li><a href="#" className="hover:underline">Support Center</a></li>
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-2">NEWSLETTER</h3>
                    <div className="flex">
                        <input type="email" placeholder="Email address..." className="p-2 flex-grow rounded-l-lg" />
                        <button className="bg-orange-600 p-2 rounded-r-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-12 border-t border-gray-700 pt-5">
                <p className="mb-4 md:mb-0">&copy; Deep Events Jalandhar. All Rights Reserved</p>
                <div className="flex space-x-3">
                    <a href="#" className="hover:text-orange-500"><FaInstagram size={24} /></a>
                    <a href="#" className="hover:text-orange-500"><FaFacebook size={24} /></a>
                    <a href="#" className="hover:text-orange-500"><FaLinkedin size={24} /></a>
                </div>
            </div>
        </motion.div>
    );
};

export default Footer;
