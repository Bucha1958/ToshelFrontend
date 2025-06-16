import React from 'react';
import { Link } from 'react-router-dom';

const LoadMoreButton = ({ href, isActive = false }) => {
  return (
    <div className="flex justify-center mt-8">
      <Link to={href}>
        <button
          className={`
            px-10 py-4 font-medium transition duration-300 ease-in-out
            border border-blue-500
            ${isActive
              ? 'bg-blue-500 text-white'
              : 'bg-white text-blue-500 hover:bg-blue-50 hover:text-blue-600'
            }
          `}
        >
          Load More
        </button>
      </Link>
    </div>
  );
};

export default LoadMoreButton;
