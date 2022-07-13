let flights = [
  { id: 00, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },

  { id: 01, to: "New York", from: "Barcelona", cost: 700, scale: false },

  { id: 02, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },

  { id: 03, to: "Paris", from: "Barcelona", cost: 210, scale: false },

  { id: 04, to: "Roma", from: "Barcelona", cost: 150, scale: false },

  { id: 05, to: "London", from: "Madrid", cost: 200, scale: false },

  { id: 06, to: "Madrid", from: "Barcelona", cost: 90, scale: false },

  { id: 07, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

  { id: 08, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

  { id: 09, to: "Sydney", from: "Barcelona", cost: 150, scale: true },

  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];
const vuelosConEscala = flights.filter((flight) => flight.scale === true);
const vuelosSinEscala = flights.filter((flight) => flight.scale === false);

const askNameAndGreet = () => {
  const name = prompt("Introduzca su nombre");
  console.log(`Bienvenido, ${name}!`);
};

const showFlights = (flight) => {
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
  const suma = flights.reduce((a, vuelo) => {
    return a + vuelo.cost;
  }, 0);
  console.log(
    `El costo promedio de los vuelos es de ${(suma / flights.length).toFixed(
      2
    )}`
  );
};
const mostrarUltVuelos = () => {
  const ultimosVuelos = flights.slice(-5);
  let destinosUltimosVuelos = ultimosVuelos.map(
    (ultimosVuelos) => ultimosVuelos.to
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
