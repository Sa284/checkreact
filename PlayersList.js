import React from 'react';
import Player from './Player';
import playersData from './Players';

const PlayersList = () => {
  return (
    <div className="players-list">
      {playersData.map((Players, index) => (
        <Player key={index} {...Players} />
      ))}
    </div>
  );
};

export default PlayersList;
