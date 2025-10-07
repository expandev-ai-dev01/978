import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold">404</h2>
        <p className="mt-2 text-gray-600">Page not found</p>
        <Link to="/" className="mt-4 inline-block text-blue-600">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
