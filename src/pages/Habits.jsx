import React, { useState } from 'react';
import HabitList from '../components/HabitList';
import HabitForm from '../components/HabitForm';

const Habits = () => {
  const [habits, setHabits] = useState([
    'Reduce plastic usage',
    'Walk or bike instead of driving',
    'Use reusable shopping bags',
    'Save energy by switching off unused lights',
    'Start composting kitchen waste',
  ]);

  const addHabit = (habit) => {
    setHabits((prevHabits) => [...prevHabits, habit]);
  };

  return (
    <div
      className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center"
      style={{
        background: 'linear-gradient(135deg, #a8ff78, #78ffd6)',
        color: '#333',
      }}
    >
      <div
        className="container p-5 rounded shadow-lg"
        style={{
          backgroundColor: '#fff',
          maxWidth: '600px',
        }}
      >
        <h1 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#2d6a4f' }}>
          Your Eco Habits
        </h1>
        <p className="text-center mb-4" style={{ fontStyle: 'italic', color: '#52796f' }}>
          Track your daily eco-friendly habits and make a positive impact on the planet!
        </p>

        {/* Display the list of eco-friendly habits */}
        <div className="mb-4">
          <HabitList habits={habits} />
        </div>

        {/* Form to add a new habit */}
        <div>
          <HabitForm onAddHabit={addHabit} />
        </div>
      </div>
    </div>
  );
};

export default Habits;
