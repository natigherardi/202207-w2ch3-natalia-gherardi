const prompt = require("prompt-sync")({ sigint: true });

execute = () => {
  let newNumber;
  let numberList = [];

  do {
    newNumber = prompt('Enter a number or write "finish" ');

    if (!isValidNumber(newNumber) && newNumber !== "finish") {
      newNumber = console.log("Error. That's not a valid number");
    }
    if (isValidNumber(newNumber)) {
      newNumber = Number(newNumber);
      numberList.push(newNumber);
    }
  } while (newNumber !== "finish");

  numberList.forEach((element) => Number(element));

  console.log(`You entered the numbers: ${numberList}`);

  if (numberList.length === 1) {
    let sqrResult = Math.sqrt(numberList[0]).toFixed(3);
    if (!Number.isInteger(sqrResult)) {
      sqrResult = sqrResulttoFixed(3);
    }
    console.log(`The square root of ${numberList[0]} is: ${sqrResult}`);
  } else {
    const resultSum = numberList.reduce((a, b) => a + b);
    console.log(`The result of the sum is ${resultSum.toFixed(3)}`);

    const resultRest = numberList.reduce((a, b) => a - b);
    console.log(`The result of the rest is ${resultRest.toFixed(3)}`);
    const resultMult = numberList.reduce((a, b) => a * b);
    console.log(`The result of the multiplication is ${resultMult.toFixed(3)}`);
    const resultDiv = numberList.reduce((a, b) => a / b);
    console.log(`The result of the division is ${resultDiv.toFixed(3)}`);
  }
  let answer = prompt("New numbers? ");

  if (answer === true) {
    calculatorPro();
  } else {
    console.log("Bye");
  }
};

function sum() {}

function isValidNumber(inputNumber) {
  return (
    !Number.isNaN(inputNumber) &&
    inputNumber !== "" &&
    inputNumber !== " " &&
    inputNumber !== null
  );
}

execute();
