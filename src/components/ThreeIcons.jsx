import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faPlus, faSearch, faBars, faSignOutAlt, faCog, faBookmark, faCalendarAlt, faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import '../Hero.css';
import { UserContext } from "../UserContext";
import { CartContext } from '../CartContext';
import ProductCreationModal from './modals/ProductCreationModal';
import Search from './Search';



const ThreeIcons = ({ scrolled }) => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const { userInfo, setUserInfo } = useContext(UserContext)
  const [iconDropMenu, setIconDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false); 
  const API_URL = import.meta.env.VITE_API_BASE_URL;
  const API_AUTH = import.meta.env.VITE_AUTH_SERVICE_URL;

  const handleSearchClick = () => {
    setIsSearchVisible(true);  
  };

  const handleSearchClose = () => {
    setIsSearchVisible(false);  
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const dropdownRef = useRef(null);
  const userIconRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDropDown = () => {
    setIconDropdownOpen(!iconDropMenu);
  }

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current && !dropdownRef.current.contains(event.target) && 
      userIconRef.current && !userIconRef.current.contains(event.target)
    ) {
      setIconDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (iconDropMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('scroll', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleClickOutside);
    };
  }, [iconDropMenu]);

  const handleSubmitProduct = async (formData) => {
    const response = await fetch(`${API_URL}/api/product`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to create product');
    }

    const data = await response.json();
    console.log('Product Created:', data);
  };


  const Logout = () => {
    fetch(`${API_AUTH}/api/logout`, {
      credentials: 'include',
      method: 'POST',
    })
      .then(() => {
        setUserInfo(null); 
        navigate('/')
      })
      .catch(error => {
        console.error("Error logging out:", error);
      });
  }


  const user = userInfo?.email
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <div className='fixed top-0 right-12 flex justify-end space-x-7 md:space-x-10 mt-9 ml-15 text-black'>
        <div className='relative'>
          {/* <FontAwesomeIcon icon={faUser} className='cursor-pointer text-xxs md:text-base mb-2' ref={userIconRef} onClick={toggleDropDown} /> */}
          {iconDropMenu && (
            <div className="absolute right-[-120px] mt-4  flex flex-col space-y-6 font-sm font-semibold bg-white text-black shadow-lg transition-transform duration-300 transform translate-y-0 opacity-100 w-[300px] lg:w-48"
              ref={dropdownRef}
            >
              {user ? (
                <ul className="py-6 text-xxs text-black montserrat-one font-semibold">
                  <li className="px-4 py-2 hover:bg-gray-200 hover:cursor-pointer">
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    <Link to='/account'>MY ACCOUNT</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 hover:cursor-pointer">
                    <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                    <a onClick={Logout}>MY ORDER</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <FontAwesomeIcon icon={faCog} className="mr-2" />
                    <a href="#">ACCOUNT SETTINGS</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <FontAwesomeIcon icon={faBookmark} className="mr-2" />
                    <a href="#">SAVED ITEMS</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                    <a href="#">MY APPOINTMENTS</a>
                  </li>
                  <div className='px-4 py-2 hover:bg-gray-200 hover:cursor-pointer'>
                    <button onClick={handleOpenModal}>
                      <FontAwesomeIcon icon={faPlus} className="mr-2" />
                      CREATE PRODUCT
                    </button>
                  </div>
                  {/* <li className="px-4 py-2 hover:bg-gray-200">
                    <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                    <a href="#" onClick={Logout}>LOG OUT</a>
                  </li> */}
                </ul>
              ) : (
                <ul className="py-6 text-black text-xxs montserrat font-bold">
                  {/* <li className="px-4 py-2 hover:bg-gray-200">
                    <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                    <Link to='/register'>REGISTER</Link>
                  </li> */}
                  {/* <li className="px-4 py-2 hover:bg-gray-200">
                    <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                    <Link to='/admin/login'>ADMIN LOGIN</Link>
                  </li> */}
                </ul>
              )}
            </div>
          )}
        </div>
        <FontAwesomeIcon icon={faSearch} className='cursor-pointer text-xxs md:text-base' onClick={handleSearchClick} />
        <FontAwesomeIcon icon={faBars} className='cursor-pointer text-xxs md:text-base' onClick={toggleSidebar} />
      </div>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
          onClick={toggleSidebar}
        />
      )}
      <ProductCreationModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmitProduct} />
      <Search isVisible={isSearchVisible} onClose={handleSearchClose} />
    </>
  );
};

export default ThreeIcons;
