// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import Sidebar from './Sidebar';
// import SidebarContact from './SidebarContact';

// const NavButtons = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [sidebarContactOpen, setSidebarContactOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const toggleContactSidebar = () => {
//      setSidebarContactOpen(!sidebarContactOpen);
//   };

//   return (
//     <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
//       {/* Left: Logo or Placeholder (if needed) */}
//       <div className="md:hidden" />

//       {/* Desktop Navigation */}
//       <ul className="hidden md:flex space-x-8 text-lg font-semibold font-[poppins]">
//         <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
//         <li><a href="#service" className="hover:text-blue-600 transition">Services</a></li>
//         <li>
//             <Link to="/projects" className="hover:text-blue-600 transition">Projects</Link>
//         </li>
//         <li>
//             <Link to="/about" className="hover:text-blue-600 transition">About Us</Link>
//         </li>
//         <li>
//             <Link to="/about#equipment" className="hover:text-blue-600 transition">Equipments</Link>
//         </li>
//         <li><button
//             onClick={toggleContactSidebar}
//             className="hover:text-blue-600 transition"
//         >
//             Contact
//         </button></li>
//       </ul>

//       {/* Mobile Menu Button at extreme right */}
//       <button
//         className="md:hidden text-black text-2xl"
//         onClick={toggleSidebar}
//         aria-label="Toggle menu"
//       >
//         <FontAwesomeIcon icon={faBars} className="cursor-pointer" />
//       </button>

//       {/* Sidebar Component */}
//       <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

//       {/* Backdrop when sidebar is open */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 z-30"
//           onClick={toggleSidebar}
//         />
//       )}
//       <SidebarContact isOpen={sidebarContactOpen} toggleSidebar={toggleContactSidebar} />
//       {sidebarContactOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
//           onClick={toggleContactSidebar}
//         />
//       )}
//     </div>
//   );
// };

// export default NavButtons;


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
        <li><Link to="/projects" className="hover:text-blue-600">Projects</Link></li>
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
