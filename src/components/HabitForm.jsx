import React, { useState } from 'react';

const HabitForm = ({ onAddHabit }) => {
  const [habit, setHabit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habit.trim()) {
      onAddHabit(habit); // Add the new habit to the list
      setHabit(''); // Clear input field after adding habit
    }
  };

  return (
    <div className="mt-4">
      <h3>Add a New Habit</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter a new eco-friendly habit"
          value={habit}
          onChange={(e) => setHabit(e.target.value)} // Update the input value in state
        />
        <button type="submit" className="btn btn-success mt-2">
          Add Habit
        </button>
      </form>
    </div>
  );
};

export default HabitForm;
