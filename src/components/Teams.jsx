import { useState } from "react";

const team = [
  { name: "Nzekwe Tochukwu", skills: ["Managing Director"] },
  { name: "Nzekwe Ebuka", skills: ["Executive Director"] },
  { name: "John Ijeji", skills: ["Director"] },
  { name: "ENGR Arinze Uzougwu", skills: ["Director"] },
  { name: "Anthonia Luxx", skills: ["Director"] },
  { name: "ENGR Emeka Bassey", skills: ["Project Manager"] },
  { name: "Humphry Ekenna Emenogu", skills: ["Project Manager"] },
  { name: "Olajide Olamide Dada", skills: ["Project Manager"] },
  { name: "Azubike Obinna", skills: ["Project Supervisor"] },
];

const SLIDES_TO_SHOW = 3;

export default function Team() {
  const [start, setStart] = useState(0);

  const prevTeam = () => {
    setStart((prev) => (prev - SLIDES_TO_SHOW + team.length) % team.length);
  };

  const nextTeam = () => {
    setStart((prev) => (prev + SLIDES_TO_SHOW) % team.length);
  };

  const visibleTeam = Array.from({ length: SLIDES_TO_SHOW }, (_, i) =>
    team[(start + i) % team.length]
  );

  return (
    <section className="relative bg-white py-20 px-4 sm:px-6 lg:px-10 font-poppins overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6">
          Meet Our Experts
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          A team of skilled professionals powering our mission and delivering excellence.
        </p>

        {/* Navigation Arrows */}
        <button
          onClick={prevTeam}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-4xl text-gray-300 hover:text-blue-600 z-10"
          aria-label="Previous"
        >
          ❮
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleTeam.map((member, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition text-center"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {member.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextTeam}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-4xl text-gray-300 hover:text-blue-600 z-10"
          aria-label="Next"
        >
          ❯
        </button>
      </div>
    </section>
  );
}
