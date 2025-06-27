import React from 'react';

const VisionMission = () => {
  return (
    <section className="bg-white text-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Vision */}
        <div>
          <h3 className="text-xl font-bold bg-yellow-400 text-blue-900 inline-block px-4 py-1 rounded-sm">VISION</h3>
          <p className="mt-4 text-justify leading-relaxed">
            Our vision is to be the definition of excellence in the Construction and Equipment Industry of Nigeria.
            We aim to provide adequate and formidable construction services to our clients all over the country.
          </p>
        </div>

        {/* Mission */}
        <div>
          <h3 className="text-xl font-bold bg-yellow-400 text-blue-900 inline-block px-4 py-1 rounded-sm">MISSION</h3>
          <p className="mt-4 text-justify leading-relaxed">
            To be committed to deliver construction solutions and related services that is of quality,
            innovative and sustainable by leveraging on advanced work and maintenance technique.
          </p>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-xl font-bold bg-yellow-400 text-blue-900 inline-block px-4 py-1 rounded-sm">CORE VALUES</h3>
          <p className="mt-4 font-semibold">WE ARE STEEP!</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
            <li><strong>S:</strong> Smart</li>
            <li><strong>T:</strong> Time Bound</li>
            <li><strong>E:</strong> Efficient</li>
            <li><strong>E:</strong> Effective</li>
            <li><strong>P:</strong> Productive</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
