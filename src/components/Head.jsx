import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../Hero.css';
import logo from '../assets/logo.png';
import NavButtons from './NavButtons';
import SidebarContact from './SidebarContact';
import Sidebar from './Sidebar';

export const Head = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarContactOpen, setSidebarContactOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleContactSidebar = () => setSidebarContactOpen(!sidebarContactOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition duration-300 ease-in-out bg-white shadow-sm ${
          scrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="flex items-center justify-between px-4 md:px-8 max-w-7xl mx-auto h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Toshel Logo" width={70} height={70} />
            <h1 className="text-xl md:text-2xl font-semibold font-[poppins] tracking-widest">
              <Link to="/">
                TOSHEL <span className="hidden lg:inline">CONSTRUCTION</span>
              </Link>
            </h1>
          </div>

          {/* Navigation Buttons */}
          <NavButtons
            toggleContactSidebar={toggleContactSidebar}
            toggleSidebar={toggleSidebar}
          />

          <SidebarContact isOpen={sidebarContactOpen} toggleSidebar={toggleContactSidebar} />
          {sidebarContactOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
              onClick={toggleContactSidebar}
            />
          )}

           {/* Sidebar for mobile */}
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} toggleContactSidebar={toggleContactSidebar} />
          {sidebarOpen && (
            <div className="fixed inset-0 z-30" onClick={toggleSidebar} />
          )}
        </div>
      </header>
    </>
  );
};

export default Head;
