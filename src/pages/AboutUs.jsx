import React, { useState, useEffect } from 'react';
import aboutImg from '../assets/asphalt2.jpg'; // Make sure this image exists or replace with correct path
import Head from '../components/Head';
import Footer from '../components/Footer';
import SidebarContact from '../components/SidebarContact';

const AboutUs = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [initialState, setInitialState] = useState(true);

     const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
     };
  return (
    <>
      {/* <Head /> */}
      <section className="min-h-screen w-full bg-white px-6 py-16 font-poppins mt-20">
        <div className="max-w-9xl mx-auto">
          {/* Heading */}
          {/* <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">ABOUT US</h2> */}

          {/* Layout */}
          <div className="flex flex-col lg:flex-row items-stretch gap-10">
            {/* Image */}
            <div className="w-full lg:w-1/2 h-full min-h-[600px]">
              <img
                src={aboutImg}
                alt="About Toshel Construction"
                className="w-full h-[550px] rounded-lg shadow-lg object-contain"
              />
            </div>

            {/* Write-up */}
            <div className="w-full lg:w-1/2 h-full text-gray-700 space-y-6 text-justify leading-relaxed">
              <h2 className="text-2xl font-bold text-gray-800">ABOUT US</h2>
              <p>
                <strong>Toshel Construction and Equipment Limited</strong> is currently one of the leading Construction and Equipment Contractors in Nigeria.
              </p>
              <p>
                The combination of on-site professional management has enabled Toshel Construction and Equipment Limited to maintain itself in the forefront of Construction in Nigeria.
              </p>
              <p>
                Toshel is able to undertake a multitude of Civil Engineering/Building Projects and has adequate facilities for the construction of: road works, bridges, drainage & concrete structures, land reclamation, river canalization & dredging dams, water supply, irrigation schemes & Marine installations.
              </p>
              <p>
                We own and have access to a large fleet of plant and equipment which allows us to tackle any type and size of project at short notice.
              </p>
              <p>
                We provide complete construction solutions and we are involved in each stage of the project, from architectural design, planning approval and construction. We also provide building maintenance and facility management solutions. This holistic approach delivers cost effectiveness, streamlines project management and shortens construction timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer toggleSidebar={toggleSidebar}/> */}
      <SidebarContact isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default AboutUs;


