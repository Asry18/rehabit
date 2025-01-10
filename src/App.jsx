import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Import HomePage
import Dashboard from './pages/Dashboard'; // Import Dashboard
import Habits from './pages/Habits'; // Import Habits page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home page route */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
        <Route path="/habits" element={<Habits />} /> {/* Habits route */}
      </Routes>
    </Router>
  );
};

export default App;
