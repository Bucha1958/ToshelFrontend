import { useState } from "react";

const team = [
  {
    name: "Nzekwe Tochukwu",
   
    skills: ["Managing Director"],
  },
  {
    name: "Nzekwe Ebuka",
    
    skills: ["Executive Director"],
  },
  {
    name: "John Ijeji",
    image: "/team3.jpg",
    skills: ["Director"],
  },
  {
    name: "ENGR Arinze Uzougwu",
    
    skills: ["Director"],
  },
  {
    name: "Anthonia Luxx",
    
    skills: ["Director"],
  },
  {
    name: "ENGR Emeka Bassey",
    
    skills: ["Project Manager"],
  },
  {
    name: "Humphry Ekenna Emenogu",
    
    skills: ["Project Manager"],
  },
  {
    name: "Olajide Olamide Dada",
   
    skills: ["Project Manager"],
  },
  {
    name: "Azubike Obinna",
    
    skills: ["Project Supervisor"],
  },
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

  // Get the visible team members for the current slide
  const visibleTeam = Array.from({ length: SLIDES_TO_SHOW }, (_, i) =>
    team[(start + i) % team.length]
  );

  return (
    <section className="bg-white py-16 px-6 max-w-7xl mx-auto text-center relative">
      <h2 className="text-5xl font-bold mb-10">Meet Our Experts</h2>
      <p className="text-gray-600 mb-12">Skilled professionals powering our success.</p>

      <button
        onClick={prevTeam}
        className="absolute left-0 top-1/2 -translate-y-1/2 text-4xl text-gray-400 z-10 hover:text-blue-600"
        aria-label="Previous"
      >
        ❮
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {visibleTeam.map((member, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow-xl border text-center">
            {/* <Image
            //   src={member.image}
            //   alt={member.name}
            //   width={160}
            //   height={160}
            //   className="rounded-full mx-auto mb-4 object-cover"
            // /> */}
            <h3 className="text-xl font-semibold">{member.name}</h3>
            
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {member.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
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
        className="absolute right-0 top-1/2 -translate-y-1/2 text-4xl text-gray-400 z-10 hover:text-blue-600"
        aria-label="Next"
      >
        ❯
      </button>
    </section>
  );
}