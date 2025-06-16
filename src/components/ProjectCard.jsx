import React from 'react';

export default function ProjectCard({ title, image, detailsUrl, referencesUrl }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-[500px] mx-auto">
      <div className="relative h-[350px]">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="mt-2 flex gap-2">
          <a href={detailsUrl} className="text-blue-600 hover:underline">
            Details
          </a>
          <a href={referencesUrl} className="text-gray-600 hover:underline">
            References
          </a>
        </div>
      </div>
    </div>
  );
}
