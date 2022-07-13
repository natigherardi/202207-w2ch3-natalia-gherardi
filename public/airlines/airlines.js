/* eslint-disable no-console */
/* eslint-disable no-alert */
const flights = [
  { id: 0, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },

  { id: 1, to: "New York", from: "Barcelona", cost: 700, scale: false },

  { id: 2, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },

  { id: 3, to: "Paris", from: "Barcelona", cost: 210, scale: false },

  { id: 4, to: "Roma", from: "Barcelona", cost: 150, scale: false },

  { id: 5, to: "London", from: "Madrid", cost: 200, scale: false },

  { id: 6, to: "Madrid", from: "Barcelona", cost: 90, scale: false },

  { id: 7, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

  { id: 8, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

  { id: 9, to: "Sydney", from: "Barcelona", cost: 150, scale: true },

  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];
const vuelosConEscala = flights.filter((flight) => flight.scale === true);
const vuelosSinEscala = flights.filter((flight) => flight.scale === false);

const askNameAndGreet = () => {
  const name = prompt("Introduzca su nombre");
  console.log(`Bienvenido, ${name}!`);
};

const showFlights = () => {
  vuelosConEscala.forEach((flight) =>
    console.log(
      `El vuelo con origen: ${flight.from}, y destino: ${flight.to} tiene un coste de ${flight.cost} y realiza alguna escala.`
    )
  );

  vuelosSinEscala.forEach((flight) =>
    console.log(
      `El vuelo con origen: ${flight.from}, y destino: ${flight.to} tiene un coste de ${flight.cost} y no realiza escalas.`
    )
  );

  console.log(`Los vuelos que efectúan escalas son ${vuelosConEscala.length}`);
};
const promedio = () => {
  const suma = flights.reduce((a, vuelo) => a + vuelo.cost, 0);
  console.log(
    `El costo promedio de los vuelos es de ${(suma / flights.length).toFixed(
      2
    )}`
  );
};
const mostrarUltVuelos = () => {
  const ultimosVuelos = flights.slice(-5);
  const destinosUltimosVuelos = ultimosVuelos.map(
    (vuelosUltimos) => vuelosUltimos.to
  );
  console.log(
    `Los destinos de los últimos vuelos son: ${destinosUltimosVuelos}`
  );
};
const execute = () => {
  askNameAndGreet();
  showFlights();
  promedio();
  mostrarUltVuelos();
};
execute();
