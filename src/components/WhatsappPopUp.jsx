import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WhatsappPopUp = () => {
  const messages = [
    "Welcome to TOSHEL CONSTRUCTION AND EQUIPMENT LIMITED, a leading Construction and Equipment Contractor in Nigeria. How can I assist you today?",
    "Looking for expert Civil Engineering/Building solutions or reliable construction equipment? We're here to help!",
    "TOSHEL CONSTRUCTION AND EQUIPMENT LIMITED provides complete construction solutions from architectural design to project completion. Let's discuss your project!",
    "With a large fleet of plant and equipment, TOSHEL CONSTRUCTION AND EQUIPMENT LIMITED can tackle any project size. How can we support your next venture?",
    "Need efficient project management and cost-effective construction? TOSHEL CONSTRUCTION AND EQUIPMENT LIMITED offers holistic solutions. Chat with us!"
  ];
  
  const [showPopup, setShowPopup] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const hidePopup = setTimeout(() => {
      setShowPopup(false);
    }, 10000); // Hide after 10 seconds

    return () => clearTimeout(hidePopup);
  }, [showPopup]);

  useEffect(() => {
    if (messageIndex < messages.length - 1) {
      const interval = setInterval(() => {
        setShowPopup(true);
        setMessageIndex(prevIndex => (prevIndex + 1) % messages.length);
      }, 10000); // Show popup every 20 seconds

      return () => clearInterval(interval);
    }
  }, [messageIndex, messages.length]);

  return (
    <>
      {showPopup && (
        <div className="fixed bottom-4 right-4 p-4 bg-white rounded-lg shadow-lg flex items-center space-x-3">
          <a 
            href="https://wa.me/08141149952" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <FaWhatsapp className="text-green-500 text-2xl cursor-pointer" />
            <span>{messages[messageIndex]}</span>
          </a>
        </div>
      )}
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default WhatsappPopUp;
