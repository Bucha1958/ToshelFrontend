import React, { useState, useEffect } from 'react';
import aboutImg from '../assets/asphalt2.jpg';
import Head from '../components/Head';
import Footer from '../components/Footer';
import SidebarContact from '../components/SidebarContact';
import VisionMission from '../components/VissionMission';
import EquipmentTable from '../components/EquipmentTable';
import { useLocation } from 'react-router-dom';

const AboutUs = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Scroll to section if there's a hash in the URL
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Wait a moment to ensure component is mounted
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
    }
  }, [location]);

  return (
    <>
      <Head />

      {/* About Us Main Section */}
      <section className="min-h-screen w-full bg-white px-6 py-16 font-poppins mt-20">
        <div className="max-w-9xl mx-auto">
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
                <strong>Toshel Construction and Equipment Limited</strong> is currently one of the leading construction and equipment contractors in Nigeria.
              </p>
              <p>
                The combination of on-site professional management has enabled Toshel Construction and Equipment Limited to maintain itself in the forefront of construction in Nigeria.
              </p>
              <p>
                Toshel is able to undertake a multitude of civil engineering and building projects, and has adequate facilities for the construction of road works, bridges, drainage & concrete structures, land reclamation, river canalization & dredging, dams, water supply, irrigation schemes & marine installations.
              </p>
              <p>
                We own and have access to a large fleet of plant and equipment which allows us to tackle any type and size of project at short notice.
              </p>
              <p>
                We provide complete construction solutions and are involved in each stage of the project—from architectural design and planning approval to actual construction. We also offer building maintenance and facility management solutions. This holistic approach delivers cost effectiveness, streamlined project management, and shorter timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Core Values */}
      <VisionMission />

      {/* Equipment Table */}
      <EquipmentTable />

      {/* Sidebar Contact */}
      <SidebarContact isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
          onClick={toggleSidebar}
        />
      )}

      <Footer toggleSidebar={toggleSidebar}/>
    </>
  );
};

export default AboutUs;
