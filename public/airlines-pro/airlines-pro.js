/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
/* eslint-disable no-alert */
let flights = [
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
const flightsWithScale = flights.filter((flight) => flight.scale === true);
const flightsNoScale = flights.filter((flight) => flight.scale === false);
let roleAction;
const askNameAndGreet = () => {
  const name = prompt("Enter your name please");
  alert(`Welcome, ${name}!`);
};

const showFlights = () => {
  flightsWithScale.forEach((flight) =>
    console.log(
      `The flights that goes from: ${flight.from}, to: ${flight.to} has a cost of $ ${flight.cost} and does at least one scale.`
    )
  );

  flightsNoScale.forEach((flight) =>
    console.log(
      `The flights that goes from: ${flight.from}, to: ${flight.to} has a cost of $ ${flight.cost} and doesn't do any scale.`
    )
  );

  console.log(
    `The number of flights that do at least one scale is: ${flightsWithScale.length}`
  );
};
const average = () => {
  const summ = flights.reduce((a, flight) => a + flight.cost, 0);
  console.log(
    `The average cost of the flights is $ ${(summ / flights.length).toFixed(2)}`
  );
};
const showLastFlights = () => {
  const lastFlights = flights.slice(-5);
  const lastDestinations = lastFlights.map((finalFlights) => finalFlights.to);
  console.log(`The destination of the last flights are: ${lastDestinations}`);
};
const askForRole = () => {
  const role = prompt("Are you admin or user? (enter admin o user)");
  if (role === null) {
    askForRole();
  } else if (role.toLowerCase() !== "admin" && role.toLowerCase() !== "user") {
    askForRole();
  }
  roleAction = role.toLowerCase();
  return roleAction;
};

const deleteFlights = () => {
  let idEntered = +prompt(
    "Enter the ID of the flight you want to delete or press cancel"
  );
  while (idEntered > flights.length) {
    idEntered = +prompt(
      "Error. You introduced an invalid ID number. Try again"
    );
  }
  const newFlights = flights.filter((flight) => flight.id !== idEntered);
  console.table(newFlights);
  flights = newFlights;
  return flights;
};
const createFlights = () => {
  const newFlight = {};
  newFlight.id = flights.length;
  newFlight.to = prompt("Enter the new flight destination please");
  newFlight.from = prompt("Enter the departure point of the new flight please");
  newFlight.cost = +prompt("Enter the cost of the new flight please");
  let scale;
  do {
    scale = prompt("Will the flight do any scales? yes/no");
  } while (
    scale === null ||
    (scale.toLowerCase() !== "yes" && scale.toLowerCase() !== "no")
  );
  if (scale.toLowerCase() === "yes") {
    newFlight.scale = true;
  } else if (scale.toLowerCase() === "no") {
    newFlight.scale = false;
  }

  if (flights.length < 15) {
    flights.push(newFlight);
    console.table(flights);
  } else {
    const result = confirm(
      "Error. There are over 15 flights already. Do you want to delete flights?"
    );
    if (result === true) {
      deleteFlights();
    }
  }
  flights.forEach((flight) => {
    console.log(
      `The ID of the flight that goes from ${flight.from} to ${flight.to} is ${flight.id}`
    );
  });
  let result;
  while (result === true) {
    result = confirm("Do you want to create more flights?");
    if (result) {
      createFlights();
    }
  }
  console.table(flights);
};

const adminAction = () => {
  let adminAnswer;
  do {
    adminAnswer = prompt(
      `Do you want to create (enter "create") or delete (enter "delete") a flight? If you want to leave, enter "end"`
    ).toLowerCase();
    if (adminAnswer === "create") {
      createFlights();
    } else if (adminAnswer === "delete") {
      deleteFlights();
    } else if (adminAnswer !== "end") {
      adminAction();
    }
  } while (adminAnswer !== "end");
};
const userAction = () => {
  const searchFlights = () => {
    let priceSearched = +prompt("What's your budget?");
    if (Number.isNaN(priceSearched) || priceSearched === null) {
      priceSearched = +prompt("Enter a valid number. What's your budget?");
    }
    return flights.filter((flight) => flight.cost <= priceSearched);
  };
  const flightsSearched = searchFlights();

  const chooseFlight = (availableFlights) => {
    console.log(`These are the flights that match your search:`);
    console.table(availableFlights);
    const idEntered = +prompt("Enter the ID of the flight you want to buy");
    const flightToBuy = availableFlights.find(
      (flight) => flight.id === idEntered
    );
    if (!flightToBuy) {
      chooseFlight();
    }
    return flightToBuy;
  };
  const boughtFlight = chooseFlight(flightsSearched);

  console.log(
    `Congratulations! You bought the flight ${boughtFlight.id}. Get your bags ready, you are going to ${boughtFlight.to}!`
  );
  const userAnswer = confirm("Do you want to buy another flight?");
  if (userAnswer === true) {
    userAction();
  }
};

const goodbye = () => {
  console.log("Thank's for using SkyLab Airlines! Bye");
};

const execute = () => {
  askNameAndGreet();
  showFlights();
  average();
  showLastFlights();
  const role = askForRole();
  if (role === "admin") {
    adminAction();
  } else {
    userAction();
  }
  goodbye();
};
execute();
