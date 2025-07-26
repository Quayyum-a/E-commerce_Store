import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl text-red-600 mb-6">Oops! Page not found.</p>
      <Link
        to="/"
        className="inline-block px-6 py-2 text-white bg-green-500 hover:bg-stone-600 rounded-full transition"
      >
        Go back home
      </Link>
    </div>
  );
};

export default PageNotFound;
