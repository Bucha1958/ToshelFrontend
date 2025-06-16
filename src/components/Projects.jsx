import React from 'react';
import ProjectCard from './ProjectCard';

// Sample projects array (replace with actual data or import)
const projects = [
  {
    title: 'Project One',
    image: '/images/project1.jpg',
    description: 'Description for project one.',
    _id: '1',
  },
  {
    title: 'Project Two',
    image: '/images/project2.jpg',
    description: 'Description for project two.',
    _id: '2',
  },
  {
    title: 'Project Three',
    image: '/images/project3.jpg',
    description: 'Description for project three.',
    _id: '3',
  },
];

export default function Projects() {
  return (
    <section className="py-16 px-2">
      {/* Optional heading */}
      {/* <h1 className="text-3xl font-bold mb-8 text-center">Our Projects</h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto z-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
