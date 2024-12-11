import React from 'react';
import { Link } from 'react-router-dom';
import './404Page.css'; 

const NotFoundPage = () => {
  return (
    <div className="not-found-container text-center">
      <h1 className="display-1">404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">Go to Home</Link>
    </div>
  );
};

export default NotFoundPage;
