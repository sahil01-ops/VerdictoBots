import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="bg-custom-baige min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-5xl font-bold text-custom-home-font mb-4">Oops!</h1>
        <p className="text-xl text-custom-home-font_p mb-6">
          Something went wrong or the page you are looking for does not exist.
        </p>
        <Link
          to="/home"
          className="bg-custom-green-Nav text-white py-2 px-6 rounded-lg font-bold hover:bg-custom-green transition-colors duration-300"
        >
          Go to Home
        </Link>
      </div>

    </div>
  );
};

export default ErrorPage;
