import React from 'react';

const LocationMap = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="bg-gray-100 p-6 md:p-10 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Location</h2>
        <p className="mb-6 text-base md:text-lg">Find us at our physical location on the map below.</p>
        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.020007902508!2d7.504687274134263!3d6.431032993547024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044b53740f3c4e3%3A0x9b2cfe8ddf58ed05!2sPort%20Harcourt%20-%20Enugu%20Expy%2C%20Independence%20Layout%20Phase%20II%2C%20Enugu%20400102%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1716380166829!5m2!1sen!2sng"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
