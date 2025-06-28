import React, { useState } from "react";
import Head from "../components/Head";
import Footer from "../components/Footer";
import SidebarContact from '../components/SidebarContact';

const clients = [
  "Enugu State Government",
  "Imo State Government",
  "Abuja State Government",
  "NDDC",
  "Enugu East Local Government",
];

const projects = [
  {
    title: "Construction of Adara Junction, Obinwane Akah Road (1.5km)",
    client: "Imo State Government",
  },
  {
    title: "Construction of Enugu East Internal Road (3km)",
    client: "Enugu State Government",
  },
  {
    title: "Construction of Isi Uzo Urban Road",
    client: "Isi Uzo Local Government",
  },
  {
    title: "Construction of Enugu East Office Complex",
    client: "Enugu East Local Government",
  },
  {
    title: "Rehabilitation of Internal Roads at Independence Layout",
    client: "Enugu State Government",
  },
  {
    title: "Construction of Triple Cell Box Calvert",
    client: "Enugu State Government",
  },
];

export default function PortfolioPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Head title="Our Portfolio" />
      <div className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 min-h-screen mt-[30px] font-[poppins] overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-10 text-center uppercase">
            Our Portfolio / List of Projects
          </h1>

          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">
              Our Clients
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
              {clients.map((client, index) => (
                <li key={index} className="bg-white rounded shadow p-4 border-l-4 border-blue-600">
                  {client}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">
              Completed Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded p-4 border-l-4 border-blue-600"
                >
                  <p className="text-lg font-medium text-gray-800">
                    {project.title}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    <strong>Client:</strong> {project.client}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer toggleSidebar={toggleSidebar} />
      <SidebarContact isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
