import useIsLargeScreen from '../hooks/isLargeScreen'; 

export default function Services() {
  const isLargeScreen = useIsLargeScreen();
  
  
  const services = [
    {
      title: "Civil Engineering & Building Projects",
      description: "Undertaking a multitude of Civil Engineering and Building Projects, ensuring robust and innovative construction solutions.",
      icon: "🏗️",
    },
    {
      title: "Road Works & Bridges",
      description: "Expertise in the construction of high-quality road networks and durable bridges.",
      icon: "🛣️",
    },
    {
      title: "Drainage & Concrete Structures",
      description: "Specializing in the construction of effective drainage systems and strong concrete structures.",
      icon: "💧",
    },
    {
      title: "Land Reclamation & River Canalization",
      description: "Comprehensive services for land reclamation and river canalization projects.",
      icon: "🏞️",
    },
    {
      title: "Dredging Dams & Water Supply",
      description: "Proficient in dredging dams and developing reliable water supply systems.",
      icon: "🌊",
    },
    {
      title: "Irrigation Schemes & Marine Installations",
      description: "Implementing efficient irrigation schemes and robust marine installations.",
      icon: "⛵",
    },
    {
      title: "Building Maintenance & Facility Management",
      description: "Providing proactive building maintenance and comprehensive facility management solutions.",
      icon: "🛠️",
    },
    {
      title: "Plant & Equipment Supply",
      description: "Access to a large fleet of modern plant and equipment for efficient project execution.",
      icon: "🚜",
    },
    {
      title: "Complete Construction Solutions",
      description: "Offering holistic construction solutions, from architectural design to planning approval and construction, for streamlined project delivery.",
      icon: "✅",
    },
  ];

  const visibleServices = isLargeScreen ? services : services.slice(0, 4);

  // return (
  //   <section id="service" className="w-full max-w-7xl mx-auto py-20 px-6 text-center">
  //     <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
  //       Our <span className="text-blue-600">Services</span>
  //     </h2>

  //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  //       {services.map((service, index) => (
  //         <div
  //           key={index}
  //           className="relative p-8 bg-white shadow-xl rounded-2xl border border-gray-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group"
  //         >
  //           <div className="text-5xl mb-6 text-blue-500 transition-transform duration-300 group-hover:rotate-6">
  //             {service.icon}
  //           </div>
  //           <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
  //           <p className="text-gray-600 mt-3 leading-relaxed">{service.description}</p>

  //           <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  //         </div>
  //       ))}
  //     </div>
  //   </section>
  // );
  return (
    <section id="service" className="w-full max-w-7xl mx-auto py-20 px-6 text-center">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
        Our <span className="text-blue-600">Services</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {visibleServices.map((service, index) => (
          <div
            key={index}
            className="relative p-8 bg-white shadow-xl rounded-2xl border border-gray-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group"
          >
            <div className="text-5xl mb-6 text-blue-500 transition-transform duration-300 group-hover:rotate-6">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
            <p className="text-gray-600 mt-3 leading-relaxed">{service.description}</p>

            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
