import React, { useRef, useState } from 'react';

const VideoHero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
        preload="auto"
        poster="/famfa.jpg"
      >
        <source src="https://my-terraform-state-bucket-okorie.s3.eu-west-1.amazonaws.com/famfa.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <button
            onClick={handlePlay}
            className="w-16 h-16 rounded-full bg-cyan-600 hover:bg-cyan-700 flex items-center justify-center shadow-lg transition duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M4.5 3.5v13l11-6.5-11-6.5z" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default VideoHero;