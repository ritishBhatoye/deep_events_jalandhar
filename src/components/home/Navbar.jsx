import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import logo from "../../assets/deep_event_jalandhar.png";
import { navItems } from "../../constants";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavBar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const location = useLocation();
    const isActive = (href) => location.pathname === href;

    return (
        <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
            <div className='container px-4 mx-auto relative text-sm'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center flex-shrink-0'>
                        <img className='h-auto w-20 mr-2' src={logo} alt="logo" />
                        <span className='text-l tracking-tight'>
                            {/* DEEP EVENT JALANDHAR */}
                        </span>
                    </div>
                    
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {navItems.map((item, index) => (
                            <li key={index}> 
                                <Link 
                                    to={item.href}
                                    className={`relative py-2 px-3 transition-colors duration-400 ${
                                        isActive(item.href) ? 'text-orange-500' : 'hover:text-orange-500'
                                    }`}
                                >
                                    {item.label}
                                    <span 
                                        className={`absolute bottom-0 left-0 right-0 h-0.5 transition-width duration-500 ${
                                            isActive(item.href) ? 'bg-gradient-to-r from-orange-500 to-orange-800 w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                    ></span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className='hidden lg:flex justify-center space-x-12 items-center'>
                        <a href='#' className='py-2 px-3 border rounded-md'>
                            Sign In
                        </a>
                        <Link 
                            to='/booknow'
                            className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'
                        >
                            BOOK NOW
                        </Link>
                    </div>
                    <div className='lg:hidden md:flex flex-col justify-end'>
                        <button onClick={toggleNavBar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className='py-4'>
                                    <Link 
                                        to={item.href}
                                        onClick={() => setMobileDrawerOpen(false)}
                                        className={`relative py-2 px-3 transition-colors duration-300 ${
                                            isActive(item.href) ? 'text-orange-500' : 'hover:text-orange-500'
                                        }`}
                                    >
                                        {item.label}
                                        <span 
                                            className={`absolute bottom-0 left-0 right-0 h-1 transition-width duration-300 ${
                                                isActive(item.href) ? 'bg-gradient-to-r from-orange-500 to-orange-800 w-full' : 'w-0 group-hover:w-full'
                                            }`}
                                        ></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className='flex space-x-6'>
                            <a href="#" className='py-2 px-3 border rounded-md'>
                                Sign In
                            </a>
                            <Link 
                                to='/booknow'
                                className='py-2 px-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800'
                                onClick={() => setMobileDrawerOpen(false)}
                            >
                                BOOK NOW
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
