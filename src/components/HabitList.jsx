import React from 'react';

const HabitList = ({ habits }) => {
  return (
    <div className="mt-4">
      <h3>Your Eco Habits:</h3>
      <ul className="list-group">
        {habits.map((habit, index) => (
          <li key={index} className="list-group-item">
            {habit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitList;
