import React from 'react';

const Player = ({ name, team, nationality, jerseyNumber, age, imageURL }) => {
  return (
    <div className="player-card">
      <img src={imageURL} alt={name} />
      <h2>{name}</h2>
      <p>Team: {team}</p>
      <p>Nationality: {nationality}</p>
      <p>Jersey Number: {jerseyNumber}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default Player;
