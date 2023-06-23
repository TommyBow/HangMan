import React, { useEffect } from "react";
import { checkWin } from '../file/help';

// Component to display the game message and end game popup
const Message = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
  let finalMessage = ''; // Variable to store the final game message
  let finalMessagerevealWord = ''; // Variable to store the revealed word message
  let playable = true; // Flag to determine if the game is still playable

  // Check if the player has won or lost the game
  if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'You have won the game! Congratulations!';
    playable = false; // Game is not playable after winning
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'You have lost the game.';
    finalMessagerevealWord = `...the word was: ${selectedWord}`; // Display the revealed word after losing
    playable = false; // Game is not playable after losing
  }

  // Update the playability of the game using useEffect hook
  useEffect(() => {
    setPlayable(playable);
  }, [playable, setPlayable]);

  // Render the end game popup with the final message and button to play again
  return (
    <div className="popup-container" style={finalMessage !== '' ? { display: 'flex' } : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessagerevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
}

export default Message;
