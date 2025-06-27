import useIsLargeScreen from '../hooks/isLargeScreen';

export default function Services() {
  const isLargeScreen = useIsLargeScreen();

  const services = [
    {
      title: "Civil Engineering & Building Projects",
      description:
        "We undertake diverse civil engineering and building projects with robust planning and execution strategies.",
      icon: "🏗️",
    },
    {
      title: "Road Works & Bridges",
      description:
        "Designing and constructing quality roads and bridges to enhance mobility and infrastructure.",
      icon: "🛣️",
    },
    {
      title: "Drainage & Concrete Structures",
      description:
        "Specialized in building durable drainage systems and concrete structures for effective water control.",
      icon: "💧",
    },
    {
      title: "Land Reclamation & River Canalization",
      description:
        "We offer services in land development, reclamation, and river canal engineering solutions.",
      icon: "🏞️",
    },
    {
      title: "Dredging Dams & Water Supply",
      description:
        "Construction and maintenance of dams with sustainable water supply mechanisms.",
      icon: "🌊",
    },
    {
      title: "Building Maintenance & Facility Management",
      description:
        "Proactive building maintenance and end-to-end facility management to preserve property value.",
      icon: "🛠️",
    },
    {
      title: "Plant & Equipment Supply",
      description:
        "We provide access to a large fleet of modern construction plants and heavy-duty equipment.",
      icon: "🚜",
    },
    {
      title: "Complete Construction Solutions",
      description:
        "From architectural planning to project delivery — we offer complete, integrated construction services.",
      icon: "✅",
    },
  ];

  const visibleServices = isLargeScreen ? services : services.slice(0, 4);

  return (
    <section id="service" className="w-full max-w-7xl mx-auto py-20 px-6 text-center font-[cinzel]">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
        Our <span className="text-blue-600">Services</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {visibleServices.map((service, index) => (
          <div
            key={index}
            className="group relative p-8 bg-white rounded-2xl border border-gray-200 shadow-xl transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="text-5xl mb-6 text-blue-500 group-hover:scale-110 transition duration-300">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-base">
              {service.description}
            </p>

            <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-2xl rounded-br-2xl"></span>
          </div>
        ))}
      </div>
    </section>
  );
}
