import React, { useState } from 'react';
import { getRandomEcoAction } from '../utils/ecoActions'; // Import logic from utility file

const EcoChallenge = () => {
  const [challenge, setChallenge] = useState(getRandomEcoAction());

  const handleNewChallenge = () => {
    setChallenge(getRandomEcoAction());
  };

  return (
    <div className="card mt-8" style={{ maxWidth: '300px' }}>
      <div className="card-body">
        <h5 className="card-title">Today's Eco Challenge</h5>
        <p className="card-text">{challenge}</p>
        <button className="btn btn-primary" onClick={handleNewChallenge}>
          Get New Challenge
        </button>
      </div>
    </div>
  );
};

export default EcoChallenge;
