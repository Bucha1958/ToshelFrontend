
import React from 'react';
import { Link } from 'react-router-dom';
import '../Hero.css';

const Sidebar = ({ isOpen, toggleSidebar, toggleContactSidebar }) => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/#service' },
    { name: 'Projects', path: '/projects' },
    { name: 'Equipments', path: '/about#equipment' },
    { name: 'Contact', action: 'contact' },
  ];

  const handleClick = (link) => {
    toggleSidebar(); // always close main sidebar

    if (link.path) return;

    if (link.anchor) {
      setTimeout(() => {
        const element = document.querySelector(link.anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 700); // matches sidebar close animation
      return;
    }

    if (link.action === 'contact') {
      setTimeout(() => {
        toggleContactSidebar();
      }, 700);
    }
  };

  return (
    <>
      {/* Main Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-40 text-black duration-700 overflow-y-auto transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } w-full md:w-full lg:w-5/12 shadow-lg`}
      >
        <button className="absolute top-4 right-4 text-2xl" onClick={toggleSidebar}>
          &times;
        </button>

        <div className="mt-20 flex flex-col items-center space-y-6 font-semibold font-[Cinzel]">
          {navLinks.map((link) =>
            link.path ? (
              <Link
                key={link.name}
                to={link.path}
                className="text-lg hover:underline"
                onClick={() => handleClick(link)}
              >
                {link.name}
              </Link>
            ) : (
              <button
                key={link.name}
                onClick={() => handleClick(link)}
                className="text-lg hover:underline"
              >
                {link.name}
              </button>
            )
          )}
        </div>
      </div>

      {/* Contact Sidebar Slide-In */}
    </>
  );
};

export default Sidebar;

