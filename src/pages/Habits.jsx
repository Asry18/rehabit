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
    setHabits((prevHabits) => [...prevHabits, habit]); // Correctly adding new habit
  };

  return (
    <div className="container mt-5">
      <h1>Your Eco Habits</h1>
      <p>Track your daily eco-friendly habits and make a positive impact on the planet!</p>

      {/* Display the list of eco-friendly habits */}
      <HabitList habits={habits} />

      {/* Form to add a new habit */}
      <HabitForm onAddHabit={addHabit} />
    </div>
  );
};

export default Habits;
