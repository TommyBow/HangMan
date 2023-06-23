// Function to show a notification for a brief period of time
export function showNotification(setter) {
  setter(true); // Set the notification state to true to show the notification

  // Set a timeout to hide the notification after 2000 milliseconds (2 seconds)
  setTimeout(() => {
    setter(false); // Set the notification state to false to hide the notification
  }, 2000);
}

// Function to check if the player has won or lost the game
export function checkWin(correctLetters, wrong, word) {
  let status = 'win'; // Default status is set to 'win'

  // Iterate through each letter in the word
  word.split('').forEach(letter => {
    if (!correctLetters.includes(letter)) {
      status = ''; // If a letter is not in the correctLetters array, set status to empty string
    }
  });

  // Check for loss
  if (wrong.length === 6) status = 'lose'; // If the length of the wrong letters array is 6, set status to 'lose'

  return status; // Return the final status (either 'win', 'lose', or '')
}
