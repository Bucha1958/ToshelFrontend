import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const NavButtons = ({ toggleContactSidebar, toggleSidebar }) => {

  return (
    <div className="flex items-center space-x-4">
      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-6 text-base font-semibold font-[poppins]">
        <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
        <li><a href="#service" className="hover:text-blue-600">Services</a></li>
        {/* <li><Link to="/projects" className="hover:text-blue-600">Projects</Link></li> */}

        <li className="relative group">
          <button className="hover:text-blue-600">Projects</button>
          <ul className="left-1/2 -translate-x-1/2 absolute top-full left-0 w-44 bg-white border border-gray-200 shadow-lg rounded hidden group-hover:block z-50 text-center">
            <li>
              <Link to="/projects" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">Projects</Link>
            </li>
            <li>
              <Link to="/portfolio" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">Portfolio</Link>
            </li>
          </ul>
        </li>
        <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
        <li><Link to="/about#equipment" className="hover:text-blue-600">Equipments</Link></li>
        <li>
          <button onClick={toggleContactSidebar} className="hover:text-blue-600">
            Contact
          </button>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-black text-2xl"
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Contact sidebar */}
      
    </div>
  );
};

export default NavButtons;
