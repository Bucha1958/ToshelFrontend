import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SidebarContact = ({ isOpen, toggleSidebar }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message Sent!');
    setMessage('');
  };

  const handleSubscription = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className={`fixed top-0 right-0 h-full w-full md:w-full lg:w-5/12 bg-white z-50 text-black transition-transform transform duration-700 font-poppins ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <button className="absolute top-4 right-4 text-2xl z-50" onClick={toggleSidebar}>
        &times;
      </button>

      <div className="overflow-y-auto h-full p-6 sm:p-10 space-y-8">
        <h2 className="text-3xl font-semibold text-gray-800">CONTACT US</h2>

        {/* Contact Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="w-full p-3 bg-black text-white rounded-md hover:bg-gray-800 flex items-center justify-center gap-2"
          >
            <FaPaperPlane size={16} /> Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-600" />
            <p>contact@toshelltd.com</p>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-blue-600" />
            <p>+234 806 775 2844</p>
          </div>
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-blue-600 mt-1" />
            <p>
              Port Harcourt - Enugu Expy, Independence Layout Phase II, Enugu, Nigeria 400102
            </p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-10 bg-blue-50 rounded-lg p-4 shadow-md text-center">
          <h3 className="text-lg font-semibold text-gray-800">Subscribe to Our Newsletter</h3>
          <p className="text-sm text-gray-600 mb-4">
            Stay updated with our latest news and offers.
          </p>
          {!subscribed ? (
            <form
              className="flex flex-col sm:flex-row items-center gap-2 justify-center"
              onSubmit={handleSubscription}
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="p-2 w-full sm:w-64 border rounded-md focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <p className="text-green-600 font-semibold">
              Thank you for subscribing!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarContact;

