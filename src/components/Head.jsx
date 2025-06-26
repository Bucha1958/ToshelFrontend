import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import FixedIcons from './FixedIcons';
import ThreeIcons from './ThreeIcons'
import '../Hero.css';
import SidebarContact from './SidebarContact';
import logo from '../assets/logo.png';
import NavButtons from './NavButtons';

export const Head = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  const smoothSliding = (e) => {
    e.preventDefault();
    document.querySelector('#next-section').scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className="overflow-hidden fixed top-0 w-full z-10 transition duration-0 ease-in-out bg-white text-black h-20 flex items-center justify-between px-4">
        <div className="flex w-full items-center justify-between">

          {/* Logo and Brand Name Group */}
          <div className="flex items-center space-x-2 mr-[100px]">
            <img src={logo} alt="Toshel Logo" width={90} height={90} />
            <h1 className="text-2xl font-semibold font-[Cinzel] tracking-widest">
              <Link to="/">
                TOSHEL <span className="hidden lg:inline">CONSTRUCTION</span>
              </Link>
            </h1>
          </div>
          </div>

          {/* Mobile Menu Button */}
          <NavButtons />
      </header>


    </>
  );
};

export default Head;

