const word = "HELLO";
const wordCells = document.querySelectorAll(".word-cell");
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const result = document.getElementById("result");

let numGuesses = 0;

guessButton.addEventListener("click", function() {
  const guess = guessInput.value.toUpperCase();
  
  if (guess.length !== 5) {
    result.textContent = "Guess must be 5 letters";
    return;
  }
  
  numGuesses++;
  
  const guessLetters = guess.split("");
  const correctLetters = [];
  const incorrectLetters = [];
  
  for (let i = 0; i < guessLetters.length; i++) {
    const guessLetter = guessLetters[i];
    
    if (word.includes(guessLetter)) {
      if (guessLetter === word[i]) {
        correctLetters.push(guessLetter);
      } else {
        incorrectLetters.push(guessLetter);
      }
    }
  }
  
  if (correctLetters.length === 5) {
    result.textContent = `You win! It took you ${numGuesses} guesses.`;
    for (let i = 0; i < wordCells.length; i++) {
      wordCells[i].classList.remove("hidden");
    }
  } else {
    result.textContent = `Correct letters: ${correctLetters.join(", ")}\nIncorrect letters: ${incorrectLetters.join(", ")}`;
  }
  
  guessInput.value = "";
});
