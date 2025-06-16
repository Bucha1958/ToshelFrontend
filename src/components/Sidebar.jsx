import React from 'react';
import { Link } from 'react-router-dom';
import '../Hero.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQs', path: '/frequently_asked_questions' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white z-30 text-black duration-700 overflow-y-auto transition-transform transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } w-full md:w-full lg:w-5/12`}
    >
      <button className="absolute top-4 right-4 text-2xl" onClick={toggleSidebar}>
        &times;
      </button>

      <div className="mt-16 flex flex-col items-center space-y-6 font-semibold">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-lg hover:underline"
            onClick={toggleSidebar}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

