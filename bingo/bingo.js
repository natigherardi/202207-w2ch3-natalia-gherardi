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
const getNumbers = (numbersPerLine) => {
  bingoCard = [];
  const randomBingoNumbers = [];
  do {
    const newRandomNumber = Math.floor(Math.random() * (20 - 1) + 1);
    if (!randomBingoNumbers.includes(newRandomNumber)) {
      randomBingoNumbers.push(newRandomNumber);
    }
  } while (randomBingoNumbers.length < 15);
  for (let i = 0; i < randomBingoNumbers.length; i += numbersPerLine) {
    const line = randomBingoNumbers.slice(i, i + numbersPerLine);
    bingoCard.push(line);
  }
  console.table(bingoCard);
  chooseCard();
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
const checkLine = () => {
  let checkLine;
  lineCounter = 0;
  for (let i = 0; i < bingoCard.length; i++) {
    checkLine = bingoCard[i].every((check) => check === "X");
    if (checkLine) {
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
const askNewTurn = () => {
  const playAgain = confirm("Do you want another turn?");
  playAgain ? bingoCaller() : askNewGame();
};

const askNewGame = () => {
  const newGame = confirm("Do you want to play again?");
  newGame ? bingoStart() : endGame();
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
  (lineMatched = false), askName();
  greetAndRules();
  getNumbers(numbersPerLine);
};
bingoStart();
