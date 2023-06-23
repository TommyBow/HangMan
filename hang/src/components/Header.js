import React from "react";

// Component for the header section of the Hangman game
const Header = () => {
  return (
    <div>
      {/* Main heading */}
      <h1>HangMan</h1>
      {/* Description of the game */}
      <p>Guess the hidden word by entering a letter</p>
      {/* Instructions for typing letters */}
      <p>Type the letters from your keyboard</p>
    </div>
  );
};

export default Header;
