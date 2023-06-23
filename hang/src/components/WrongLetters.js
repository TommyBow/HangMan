import React from 'react';

// Component to display the wrong letters guessed
const WrongLetters = ({ wrongLetters }) => {
  return (
    <div className="wrong-letters-container">
      <div>
        {/* Display "Wrong Letters" header if there are wrong letters */}
        {wrongLetters.length > 0 && <p>Wrong Letters:</p>}
        
        {/* Map through the wrong letters array and render each letter */}
        {wrongLetters
          .map((letter, index) => <span key={index}>{letter}</span>)
          // Reduce the array of letters into a string separated by commas
          .reduce((prev, curr) => (prev === null ? [curr] : [prev, ', ', curr]), null)}
      </div>
    </div>
  );
};

export default WrongLetters;
