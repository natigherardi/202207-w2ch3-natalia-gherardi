/* eslint-disable no-restricted-globals */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable no-alert */
let bingoCard;
const numbersPerLine = 5;
let calledNumbers = [];
let counter = 0;
let nameOfPlayer;
let lineMatched = false;
let lineCounter;
const ranking = [
  { playerName: "Maximus", playerPoints: 100 },
  { playerName: "Mr. Fail", playerPoints: 15 },
];
const askName = () => {
  nameOfPlayer = prompt("Enter your name");
  if (!nameOfPlayer) {
    return askName();
  }
  return nameOfPlayer;
};
const greetAndRules = () => {
  console.log(
    `Hello ${nameOfPlayer}! Welcome to Bingo. The maximum points are 100, for every extra turn you take you will lose 1 point. Good luck! `
  );
};
const endGame = () => {
  console.log("Thank's for playing, bye!");
};
const pointsCounterAndShowRanking = () => {
  const points = 115 - counter;
  ranking.push({ playerName: nameOfPlayer, playerPoints: points });
  ranking.sort((a, b) => b.playerPoints - a.playerPoints);
  console.log("These are the top players:");
  console.table(ranking);
};
const bingoStart = () => {
  calledNumbers = [];
  counter = 0;
  nameOfPlayer = "";
  lineMatched = false;
  askName();
  greetAndRules();
  getNumbers(numbersPerLine);
};

const getNumbers = (amountOfNumbers) => {
  bingoCard = [];
  const randomBingoNumbers = [];
  do {
    const newRandomNumber = Math.floor(Math.random() * (20 - 1) + 1);
    if (!randomBingoNumbers.includes(newRandomNumber)) {
      randomBingoNumbers.push(newRandomNumber);
    }
  } while (randomBingoNumbers.length < 15);
  for (let i = 0; i < randomBingoNumbers.length; i += amountOfNumbers) {
    const line = randomBingoNumbers.slice(i, i + amountOfNumbers);
    bingoCard.push(line);
  }
  console.table(bingoCard);
  // eslint-disable-next-line no-use-before-define
  chooseCard();
};

const bingoCaller = () => {
  const calledNumber = Math.floor(Math.random() * (20 - 1) + 1);
  if (calledNumbers.includes(calledNumber)) {
    bingoCaller();
    return;
  }
  calledNumbers.push(calledNumber);
  console.log(`The number of this round is ${calledNumber}`);
  counter++;
  for (let i = 0; i < bingoCard.length; i++) {
    if (bingoCard[i].includes(calledNumber)) {
      console.log(`Congratulations! You matched number ${calledNumber}`);
      const indexOfCalledNumber = bingoCard[i].indexOf(calledNumber);
      bingoCard[i][indexOfCalledNumber] = "X";
      console.table(bingoCard);
      break;
    }
  }
  checkLine();
};

const askNewTurn = () => {
  const playAgain = confirm("Do you want another turn?");
  if (playAgain) {
    bingoCaller();
  }
  askNewGame();
};
const chooseCard = () => {
  let userAnswer;
  do {
    userAnswer = prompt("Do you want to play with this card? yes/no");
  } while (
    !userAnswer ||
    (userAnswer.toLowerCase() !== "yes" && userAnswer.toLowerCase() !== "no")
  );
  if (userAnswer.toLowerCase() === "yes") {
    bingoCaller();
  } else {
    getNumbers(numbersPerLine);
  }
};
const checkLine = () => {
  let lineChecked;
  lineCounter = 0;
  for (let i = 0; i < bingoCard.length; i++) {
    lineChecked = bingoCard[i].every((check) => check === "X");
    if (lineChecked) {
      lineCounter++;
    }
  }
  if (lineCounter === 1 && lineMatched === false) {
    console.log("Congratulations, you made a LINE!");
    lineMatched = true;
  }
  if (lineCounter === 3) {
    console.log("BINGO! Congratulations, you won!");
    pointsCounterAndShowRanking();
    askNewGame();
  } else {
    askNewTurn();
  }
};
const askNewGame = () => {
  const newGame = confirm("Do you want to play again?");
  if (newGame) {
    bingoStart();
  }
  endGame();
};
bingoStart();
