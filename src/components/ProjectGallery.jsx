import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoadMoreButton from './Button';

export default function ProjectGallery({ projects, showAll = false }) {
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  if (visibleProjects.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500 text-lg">
        Upload your project
      </div>
    );
  }

  if (visibleProjects.length === 1) {
    return (
      <div className="flex justify-center">
        <HoverProjectCard project={visibleProjects[0]} height="h-[300px]" />
      </div>
    );
  }

  return (
    <>
      {visibleProjects.length >= 3 ? (
        <div className="grid md:grid-cols-3 gap-4">
          {/* Large project spans 2 columns */}
          <div className="md:col-span-2">
            <HoverProjectCard project={visibleProjects[0]} height="h-[450px]" />
          </div>

          {/* Two small stacked projects */}
          <div className="flex flex-col gap-4">
            <HoverProjectCard project={visibleProjects[1]} height="h-[220px]" />
            <HoverProjectCard project={visibleProjects[2]} height="h-[220px]" />
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {visibleProjects.map((project, idx) => (
            <HoverProjectCard key={idx} project={project} height="h-[400px]" />
          ))}
        </div>
      )}

      {!showAll && (
        <div className="mt-8 flex justify-center">
          <LoadMoreButton href="/projects" isActive={false} />
        </div>
      )}
    </>
  );
}

function HoverProjectCard({ project, height, className = '' }) {
  return (
    <div className={`relative group overflow-hidden w-full ${height} ${className}`}>
      <img
        src={project.image}
        alt={project.title}
        className="object-cover w-full h-full transition-transform duration-300"
      />

      <div
        className={`
          absolute bottom-0 left-0 w-full px-4 py-3 text-white
          bg-[#007cbf]/60 transition-transform duration-300
        `}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg">{project.title}</h3>
            <p className="text-sm">{project.description}</p>
          </div>

          <Link to={`/projects/${project._id}`}>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 transition-colors">
              <ArrowRight size={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
