import React from "react";

// Component to display the word with correct letters filled in
const Words = ({ selectedWord, correctLetters }) => {
  return (
    <div className="word">
      {/* Split the selected word into individual letters and map over them */}
      {selectedWord.split('').map((letter, index) => {
        return (
          <span className="letter" key={index}>
            {/* Display the letter if it is in the correctLetters array, otherwise display an empty string */}
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        );
      })}
    </div>
  );
};

export default Words;
