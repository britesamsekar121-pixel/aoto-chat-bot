import React from 'react';

const PersonalityCard = ({ personality }) => {
  return (
    <div className="personality-card">
      <h3>{personality.name}</h3>
      <p>{personality.description}</p>
    </div>
  );
};

export default PersonalityCard;
