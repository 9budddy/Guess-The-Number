'use strict';

// Global Variables
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

// Global Functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displaySecretNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const setBodyBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const setNumberWidth = function (number) {
  document.querySelector('.number').style.width = number;
};

const changeScore = function (number) {
  document.querySelector('.score').textContent = number;
};

// Check Click Event;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 1) {
    // When there is no input
    if (!guess) {
      displayMessage('No number!');

      // When player wins
    } else if (guess === secretNumber) {
      displayMessage('Correct Number!');
      displaySecretNumber(secretNumber);

      setBodyBackgroundColor('#60b347');
      setNumberWidth('30rem');

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

      // When guess is wrong.
    } else if (guess !== secretNumber) {
      score--;
      changeScore(score);
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
    }
  } else {
    changeScore(0);
    displayMessage('You lost! Try again!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  displayMessage('Start guessing...');
  changeScore(score);

  displaySecretNumber('?');
  document.querySelector('.guess').value = '';

  setBodyBackgroundColor('#222');
  setNumberWidth('15rem');
});
