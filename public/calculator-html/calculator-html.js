let operationList = [];
let currentNumber = "0";

const getDigitsShown = () => {
  const valueInScreen = document.getElementById("calculatorScreen").innerHTML;
  return valueInScreen;
};

// eslint-disable-next-line no-unused-vars
const clearScreen = () => {
  operationList = [];
  currentNumber = 0;
  document.getElementById("calculatorScreen").innerHTML = "";
};

const showInScreen = (value) => {
  document.getElementById("calculatorScreen").innerHTML = value;
};

// eslint-disable-next-line no-unused-vars
const deleteDigit = () => {
  if (currentNumber !== "") {
    const currentDigits = getDigitsShown();
    showInScreen(currentDigits.slice(0, -1));
    currentNumber = currentNumber.slice(0, -1);
  } else {
    operationList.pop();
    currentNumber = "";
  }
};
const numberCompleted = () => {
  currentNumber = parseFloat(currentNumber);
  operationList.push(currentNumber);
  currentNumber = "0";
};
// eslint-disable-next-line no-unused-vars
const calculate = (list) => {
  numberCompleted();
  let provisionalValue = list[0];
  for (let i = 2; i < list.length; i += 2) {
    switch (list[i - 1]) {
      case "+":
        provisionalValue += list[i];
        break;
      case "-":
        provisionalValue -= list[i];
        break;
      case "/":
        if (list[i] === "0") {
          showInScreen("Error");
        }
        provisionalValue /= list[i];
        break;
      case "*":
        provisionalValue *= list[i];
        break;
      default:
        return;
    }
  }
  provisionalValue = parseFloat(provisionalValue.toFixed(3));
  currentNumber = provisionalValue;
  showInScreen(provisionalValue);
  operationList = [];
};

// eslint-disable-next-line no-unused-vars
const numericButton = (numberKey) => {
  if (currentNumber === "0") {
    currentNumber = "";
  }
  if (currentNumber.length < 10) {
    if (!(numberKey === ".") || !currentNumber.match(/[.]/)) {
      currentNumber += numberKey;
      showInScreen(currentNumber);
    }
  }
};

// eslint-disable-next-line no-unused-vars
const symbolButton = (symbolKey) => {
  showInScreen(symbolKey);
  if (currentNumber !== "0") {
    numberCompleted();
    operationList.push(symbolKey);
  }
};
