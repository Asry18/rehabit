import React from 'react';
import EcoChallenge from '../components/EcoChallenge'; // Import the EcoChallenge component
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Import custom CSS for styling

const Dashboard = () => {
  const navigate = useNavigate();

  // Function to handle button click and navigate to the Habits page
  const handleViewAllHabits = () => {
    navigate('/habits');
  };


  return (
    <div className="dashboard-container">
      <div className="content-wrapper">
        <h1 className="dashboard-title">Welcome to Your Dashboard</h1>
        <p className="dashboard-subtitle">
          Track your eco-friendly habits and take on daily challenges to make a positive impact!
        </p>

        <div className="card shadow eco-card">
          <div className="card-body">
            <h5 className="card-title text-center">Today's Eco Challenge</h5>
            <EcoChallenge />
          </div>
        </div>

        <div className="card shadow habits-card">
          <div className="card-body">
            <h5 className="card-title text-center">Your Eco Habits</h5>
            <ul className="habit-list">
              <li>Reduce plastic usage</li>
              <li>Walk or bike instead of driving</li>
              <li>Use reusable shopping bags</li>
              <li>Save energy by switching off unused lights</li>
              <li>Start composting kitchen waste</li>
            </ul>
            <button
              onClick={handleViewAllHabits}
              className="btn btn-success view-habits-btn w-100 mt-3"
            >
              View All Habits
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;