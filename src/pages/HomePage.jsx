import React from 'react';
import { Link } from 'react-router-dom'; // For routing to the Dashboard or other pages
import './HomePage.css'; // Import custom CSS for background styles

const HomePage = () => {
  return (
    <div className="homepage-container d-flex align-items-center justify-content-center">
      <div className="text-center p-5 rounded shadow-lg bg-white">
        <h1 className="display-4 text-success mb-4">Welcome to <span className="text-primary">ReHabit</span></h1>
        <p className="text-secondary-emphasis">
          A sustainable app that helps you develop eco-friendly habits, take on daily challenges,
          and track your progress towards a greener planet. Join us in making a positive impact, one action at a time!
        </p>
        <Link to="/dashboard" className="btn btn-success btn-lg mt-4 px-5 shadow">
          Start Now
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
