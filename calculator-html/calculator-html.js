let operationList = [];
let currentNumber = "0";

const getDigitsShown = () => {
  let valueInScreen = document.getElementById("calculatorScreen").innerHTML;
  return valueInScreen;
};

const clearScreen = () => {
  operationList = [];
  currentNumber = 0;
  document.getElementById("calculatorScreen").innerHTML = "";
};

const showInScreen = (value) => {
  document.getElementById("calculatorScreen").innerHTML = value;
};

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

const calculate = (list) => {
  numberCompleted();
  let provisionalValue = list[0];
  for (let i = 2; i < list.length; i = i + 2) {
    switch (list[i - 1]) {
      case "+":
        provisionalValue += list[i];
        break;
      case "-":
        provisionalValue -= list[i];
        break;
      case "/":
        if (list[i] == "0") {
          showError();
        }
        provisionalValue = provisionalValue / list[i];
        break;
      case "*":
        provisionalValue = provisionalValue * list[i];
        break;
    }
  }
  provisionalValue = parseFloat(provisionalValue.toFixed(3));
  currentNumber = provisionalValue;
  showInScreen(provisionalValue);
  operationList = [];
};

const numericButton = (numberKey) => {
  if (currentNumber == "0") {
    currentNumber = "";
  }
  if (currentNumber.length < 10) {
    if (!(numberKey === ".") || !currentNumber.match(/[.]/)) {
      currentNumber += numberKey;
      showInScreen(currentNumber);
    }
  }
};

const numberCompleted = () => {
  currentNumber = parseFloat(currentNumber);
  operationList.push(currentNumber);
  currentNumber = "0";
};

const symbolButton = (symbolKey) => {
  showInScreen(symbolKey);

  if (currentNumber !== "0") {
    numberCompleted();
    operationList.push(symbolKey);
  }
};
