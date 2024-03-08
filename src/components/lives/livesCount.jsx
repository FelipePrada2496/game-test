import React from 'react';

function LivesCounter({ lives, loseLife }) {
  return (
    <div>
      <p>Vidas: {lives}</p>
    </div>
  );
}

export default LivesCounter;

