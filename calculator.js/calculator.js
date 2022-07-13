const num1 = introdNumero();
const num2 = introdNumero();
console.log("You introduced the numbers " + num1 + " and " + num2);
const resultados = [];
resultados.push(calcular());

if (Number(num1) && Number(num2)) {
  showResults();
}

function introdNumero() {
  let valor = prompt("Introduce a number");

  while (isNaN(valor) || valor === "" || valor === " ") {
    valor = prompt("Error, introduce a correct value");
  }
  if (valor !== null) {
    valor = Number(valor);
  }
  return valor;
}

function calcular() {
  let calcu = [];

  if (num1 === null && num2 === null) {
    console.log("Error. You dindn't introduce numbers");
  } else if (Number(num1) && num2 === null) {
    calcu = Math.sqrt(num1).toFixed(3);
    console.log("The square root of " + num1 + " is: " + calcu);
  } else if (num1 === null && Number(num2)) {
    calcu = Math.sqrt(num2).toFixed(3);
    console.log("The square root of " + num2 + " is: " + calcu);
  } else if (Number(num1) && Number(num2)) {
    calcu.push((num1 + num2).toFixed(3));
    calcu.push((num1 - num2).toFixed(3));
    calcu.push((num1 * num2).toFixed(3));
    calcu.push((num1 / num2).toFixed(3));
  }

  return calcu;
}
function showResults() {
  console.log("The result of the sum is " + resultados[0][0]);
  console.log("The result of the rest is " + resultados[0][1]);
  console.log("The results of the multiplication is " + resultados[0][2]);
  console.log("The result of the division is " + resultados[0][3]);
}
