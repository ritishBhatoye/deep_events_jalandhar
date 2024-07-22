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
        <motion.footer
            className="bg-gradient-to-r from-orange-500 to-orange-800 text-white py-8 sm:py-12 mt-10 px-4 sm:px-6 md:px-12 rounded-t-lg font-montserrat font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto footer-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center sm:text-left">
                <div className="flex flex-col items-center sm:items-start">
                    <img src={logo} alt="Deep Event Jalandhar" className="w-24 sm:w-32 h-auto mb-4" />
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4">DEEP EVENT JALANDHAR</h2>
                </div>
                <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-sm font-semibold mb-2">CONTACT</h3>
                    <p className="text-xs sm:text-sm">Main Road Dakoha, Near Baba Budha Ji Gurudwara, Dakoha, Jalandhar - 144023 (Dakoha Railway Crossing)</p>
                    <p><a href="mailto:deepcateringandevents@mail.com" className="hover:underline text-xs sm:text-sm">deepcateringandevents@mail.com</a></p>
                    <p className="text-xs sm:text-sm">+91 98761 25394</p>
                    <p className="text-xs sm:text-sm">+91 95019 58595</p>
                </div>
                <nav aria-label="Footer Navigation">
                    <h3 className="text-sm font-semibold mb-2">USEFUL LINKS</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline text-xs sm:text-sm">About Us</a></li>
                        <li><a href="#" className="hover:underline text-xs sm:text-sm">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:underline text-xs sm:text-sm">User Guide</a></li>
                        <li><a href="#" className="hover:underline text-xs sm:text-sm">Support Center</a></li>
                        <li><a href="#" className="hover:underline text-xs sm:text-sm">Privacy Policy</a></li>
                    </ul>
                </nav>
                <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">NEWSLETTER</h3>
                    <form className="flex" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Email address..." className="p-2 flex-grow rounded-l-lg text-xs sm:text-sm" aria-label="Email for newsletter" />
                        <button type="submit" className="bg-orange-600 p-2 rounded-r-lg" aria-label="Subscribe to newsletter">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-12 border-t border-orange-700 pt-5">
                <p className="mb-4 sm:mb-0 text-xs sm:text-sm">&copy; {new Date().getFullYear()} Deep Events Jalandhar. All Rights Reserved</p>
                <div className="flex space-x-3">
                    <a href="#" className="hover:text-orange-500" aria-label="Instagram"><FaInstagram size={20} /></a>
                    <a href="#" className="hover:text-orange-500" aria-label="Facebook"><FaFacebook size={20} /></a>
                    <a href="#" className="hover:text-orange-500" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;