import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Words from './components/Words';
import { showNotification as show } from './file/help';
import Notify from './components/Notify';
import Message from './components/Message';
import './App.css';

// Array of words for the game
const words = ['developer', 'javascript', 'application', 'react'];

// Select a random word from the array
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  // State variables
  const [playable, setPlayable] = useState(true); // Determines if the game is playable
  const [correctLetters, setCorrectLetters] = useState([]); // Array of correct letters guessed
  const [wrongLetters, setWrongLetters] = useState([]); // Array of wrong letters guessed
  const [showNotification, setShowNotification] = useState(false); // Determines if a notification should be shown

  useEffect(() => {
    // Event listener for keydown event
    const handleKeydown = event => {
      const { key, keyCode } = event;

      // Check if the game is playable and if the pressed key is a letter
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          // Check if the letter is correct and not already guessed
          if (!correctLetters.includes(letter)) {
            // Add the letter to the array of correct letters
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            // Show notification if the letter is already guessed
            show(setShowNotification);
          }
        } else {
          // Check if the letter is wrong and not already guessed
          if (!wrongLetters.includes(letter)) {
            // Add the letter to the array of wrong letters
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            // Show notification if the letter is already guessed
            show(setShowNotification);
          }
        }
      }
    };

    // Add event listener for keydown and remove it when the component is unmounted
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  // Function to start a new game
  function playAgain() {
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);

    // Select a new random word
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  // Function to handle the help button click
  function handleHelpClick() {
    const message =
      'The Hangman game works by guessing letters to uncover the hidden word. ' +
      'If the letter is correct, it will be displayed in the word. ' +
      'If the letter is incorrect, it will be added to the list of wrong letters. ' +
      'You can guess the letters by typing them on the keyboard' +
      'Try to guess the word before the hangman is fully drawn! Good luck!';

    // Show help message in an alert
    alert(message);
  }

  return (
    <div>
      <Header />
      <div className="game">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Words selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Message
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notify showNotification={showNotification} />
      <div className="help-button-container">
        <button onClick={handleHelpClick} className="help-button">
          Help
        </button>
      </div>
    </div>
  );
}

export default App;
