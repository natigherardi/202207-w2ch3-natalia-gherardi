/* eslint-disable no-console */
/* eslint-disable no-alert */
const questions1 = [
  {
    letter: "a",
    answer: "abducir",
    wordStatus: 0,
    question: "CON LA A. Dicho de un extraterrestre, 'secuestrar a alguien'",
  },
  {
    letter: "b",
    answer: "bingo",
    wordStatus: 0,
    question:
      "CON LA B. Juego de azar en el que cada participante compra uno o más cartones con unos números impresos",
  },
  {
    letter: "c",
    answer: "churumbel",
    wordStatus: 0,
    question: "CON LA C. Niño, muchacho",
  },
  {
    letter: "d",
    answer: "diarrea",
    wordStatus: 0,
    question:
      "CON LA D. Evacuación intestinal de heces flojas y líquidas tres o más veces al día.",
  },
  {
    letter: "e",
    answer: "ectoplasma",
    wordStatus: 0,
    question:
      "CON LA E. Parte externa del citoplasma de algunas células de aspecto más fluido; es evidente en los protozoos",
  },
  {
    letter: "f",
    answer: "facil",
    wordStatus: 0,
    question:
      "CON LA F. Que se entiende, hace o consigue con poco esfuerzo, habilidad o inteligencia.",
  },
  {
    letter: "g",
    answer: "galaxia",
    wordStatus: 0,
    question:
      "CON LA G. Agrupación de estrellas, cuerpos celestes y materia cósmica que está concentrada en una determinada región del espacio por efecto de la atracción gravitatoria.",
  },
  {
    letter: "h",
    answer: "harakiri",
    wordStatus: 0,
    question:
      "CON LA H. Suicidio ritual de origen japonés que se realiza por razones de honor y consiste en abrirse el vientre con un arma blanca.",
  },
  {
    letter: "i",
    answer: "iglesia",
    wordStatus: 0,
    question:
      "CON LA I. Estado eclesiástico, que comprende a todos los ordenados.",
  },
  {
    letter: "j",
    answer: "jabali",
    wordStatus: 0,
    question:
      "CON LA J. Mamífero paquidermo de la familia del cerdo con dos colmillos curvos que le sobresalen de la boca.",
  },
  {
    letter: "k",
    answer: "kamikaze",
    wordStatus: 0,
    question:
      "CON LA K. Avión suicida del ejército japonés que en la Segunda Guerra Mundial.",
  },
  {
    letter: "l",
    answer: "licantropo",
    wordStatus: 0,
    question: "CON LA L. Que está afectado de licantropía.",
  },
  {
    letter: "m",
    answer: "misantropo",
    wordStatus: 0,
    question: "CON LA M. Que revela misantropía o da muestras de ella.",
  },
  {
    letter: "n",
    answer: "necedad",
    wordStatus: 0,
    question: "CON LA N. Dicho o hecho propios de la persona necia.",
  },
  {
    letter: "ñ",
    answer: "señal",
    wordStatus: 0,
    question:
      "CONTIENE LA Ñ. Marca que se pone o hay en las cosas para distinguirlas de otras.",
  },
  {
    letter: "o",
    answer: "orco",
    wordStatus: 0,
    question:
      "CON LA O. Ser humanoide, de aspecto desagradable y actitud agresiva.",
  },
  {
    letter: "p",
    answer: "protoss",
    wordStatus: 0,
    question: "CON LA P. Una de las tres razas del videojuego StarCraft",
  },
  {
    letter: "q",
    answer: "queso",
    wordStatus: 0,
    question: "CON LA Q. Producto lacteo obtenido de la maduracion de la leche",
  },
  {
    letter: "r",
    answer: "raton",
    wordStatus: 0,
    question: "CON LA R. Animal utilizado ampliamente en estudios cientificos",
  },
  {
    letter: "s",
    answer: "stackoverflow",
    wordStatus: 0,
    question:
      "CON LA S. Comunidad de desarrolladores informaticos muy conocida",
  },
  {
    letter: "t",
    answer: "terminator",
    wordStatus: 0,
    question: "CON LA T. Hasta la vista, Baby",
  },
  {
    letter: "u",
    answer: "unamuno",
    wordStatus: 0,
    question:
      "CON LA U. Escritor y filósofo español autor del libro `Abel Sanchez`",
  },
  {
    letter: "v",
    answer: "vikingos",
    wordStatus: 0,
    question:
      "CON LA V. De los pueblos navegantes escandinavos que aterrorizo europa en la edad media",
  },
  {
    letter: "w",
    answer: "sandwich",
    wordStatus: 0,
    question:
      "CONTIENE LA W. Conjunto de dos o más rebanadas de pan, normalmente de molde, entre las que se ponen distintos alimentos.",
  },
  {
    letter: "x",
    answer: "botox",
    wordStatus: 0,
    question:
      "CONTIENE LA X. Droga hecha de una toxina producida por la bacteria Clostridium botulinum",
  },
  {
    letter: "y",
    answer: "peyote",
    wordStatus: 0,
    question:
      "CONTIENE LA Y. Planta cactácea, de pequeño tamaño, que contiene una sustancia cuya ingestión produce efectos alucinógenos y narcóticos.",
  },
  {
    letter: "z",
    answer: "zen",
    wordStatus: 0,
    question:
      "CON LA Z. Escuela budista que tiende a alcanzar la iluminación espiritual mediante la meditación que no se somete al conocimiento intelectual y a sus conceptos.",
  },
];

const questions2 = [
  {
    letter: "a",
    answer: "abducir",
    wordStatus: 0,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },

  {
    letter: "b",
    answer: "bingo",
    wordStatus: 0,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },

  {
    letter: "c",
    answer: "churumbel",
    wordStatus: 0,
    question: "CON LA C. Niño, crío, bebé",
  },

  {
    letter: "d",
    answer: "diarrea",
    wordStatus: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },

  {
    letter: "e",
    answer: "ectoplasma",
    wordStatus: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },

  {
    letter: "f",
    answer: "facil",
    wordStatus: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },

  {
    letter: "g",
    answer: "galaxia",
    wordStatus: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },

  {
    letter: "h",
    answer: "harakiri",
    wordStatus: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },

  {
    letter: "i",
    answer: "iglesia",
    wordStatus: 0,
    question: "CON LA I. Templo cristiano",
  },

  {
    letter: "j",
    answer: "jabali",
    wordStatus: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },

  {
    letter: "k",
    answer: "kamikaze",
    wordStatus: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },

  {
    letter: "l",
    answer: "licantropo",
    wordStatus: 0,
    question: "CON LA L. Hombre lobo",
  },

  {
    letter: "m",
    answer: "misantropo",
    wordStatus: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },

  {
    letter: "n",
    answer: "necedad",
    wordStatus: 0,
    question: "CON LA N. Demostración de poca inteligencia",
  },

  {
    letter: "ñ",
    answer: "señal",
    wordStatus: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },

  {
    letter: "o",
    answer: "orco",
    wordStatus: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },

  {
    letter: "p",
    answer: "protoss",
    wordStatus: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },

  {
    letter: "q",
    answer: "queso",
    wordStatus: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },

  { letter: "r", answer: "raton", wordStatus: 0, question: "CON LA R. Roedor" },

  {
    letter: "s",
    answer: "stackoverflow",
    wordStatus: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },

  {
    letter: "t",
    answer: "terminator",
    wordStatus: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },

  {
    letter: "u",
    answer: "unamuno",
    wordStatus: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },

  {
    letter: "v",
    answer: "vikingos",
    wordStatus: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },

  {
    letter: "w",
    answer: "sandwich",
    wordStatus: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },

  {
    letter: "x",
    answer: "botox",
    wordStatus: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },

  {
    letter: "y",
    answer: "peyote",
    wordStatus: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },

  {
    letter: "z",
    answer: "zen",
    wordStatus: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];

const questions3 = [
  {
    letter: "a",
    answer: "ascua",
    wordStatus: 0,
    question: "CON LA A. Trozo de cualquier material ardiendo pero sin llama.",
  },

  {
    letter: "b",
    answer: "bilis",
    wordStatus: 0,
    question:
      "CON LA B. Líquido amargo de color amarillo verdoso producido por el hígado y que ayuda a la digestión de los alimentos.",
  },

  {
    letter: "c",
    answer: "cubismo",
    wordStatus: 0,
    question:
      "CON LA C. Estilo de pintura que comenzó en Francia a principios de este siglo y que se caracteriza por representar figuras y objetos mediante formas geométricas",
  },

  {
    letter: "d",
    answer: "dieresis",
    wordStatus: 0,
    question:
      "CON LA D. Signo ortográfico que se coloca encima de la u para indicar que esta letra ha de pronunciarse",
  },

  {
    letter: "e",
    answer: "estria",
    wordStatus: 0,
    question:
      "CON LA E. Línea que se forma en la piel cuando ésta se ha estirado excesivamente",
  },

  {
    letter: "f",
    answer: "fonema",
    wordStatus: 0,
    question: "CON LA F. Sonido de una letra",
  },

  {
    letter: "g",
    answer: "gaucho",
    wordStatus: 0,
    question:
      "CON LA G. Se dice de las personas que viven en las grandes llanuras de Argentina y Uruguay y llevan el ganado de un lado a otro",
  },

  {
    letter: "h",
    answer: "himno",
    wordStatus: 0,
    question:
      "CON LA H. Poesía o composición musical en alabanza de alguien o algo, como la que se dedica a un país",
  },

  {
    letter: "i",
    answer: "iman",
    wordStatus: 0,
    question: "CON LA I. Mineral capaz de atraer el hierro u otros metales.",
  },

  {
    letter: "j",
    answer: "jabato",
    wordStatus: 0,
    question: "CON LA J. Cría del jabalí.",
  },

  {
    letter: "k",
    answer: "karaoke",
    wordStatus: 0,
    question:
      "CON LA K. Diversión consistente en interpretar una canción grabada, mientras se sigue la letra que aparece en una pantalla.",
  },

  {
    letter: "l",
    answer: "lombriz",
    wordStatus: 0,
    question:
      "CON LA L. Gusano muy largo de color rojizo que se alimenta de sustancias que hay en la tierra.",
  },

  {
    letter: "m",
    answer: "mudejar",
    wordStatus: 0,
    question:
      "CON LA M. Nombre que se daba a los musulmanes que vivían en los reinos cristianos de la península ibérica.",
  },

  {
    letter: "n",
    answer: "nogal",
    wordStatus: 0,
    question:
      "CON LA N. Árbol grande con la corteza lisa y de color gris cuyo fruto es la nuez.",
  },

  {
    letter: "ñ",
    answer: "ñoño",
    wordStatus: 0,
    question: "CON LA Ñ. Cursi o demasiado delicado.",
  },

  {
    letter: "o",
    answer: "ocre",
    wordStatus: 0,
    question:
      "CON LA O. Se dice del color que es una mezcla de amarillo y marrón.",
  },

  {
    letter: "p",
    answer: "protocolo",
    wordStatus: 0,
    question:
      "CON LA P. Conjunto de reglas o ceremonias que hay que cumplir en los actos oficiales o solemnes.",
  },

  {
    letter: "q",
    answer: "quechua",
    wordStatus: 0,
    question:
      "CON LA Q. Pueblo indio que habita en Perú y que vivía allí antes del descubrimiento de América.",
  },

  {
    letter: "r",
    answer: "repisa",
    wordStatus: 0,
    question:
      "CON LA R. Tabla o elemento similar que se coloca contra la pared para poner en ella objetos.",
  },

  {
    letter: "s",
    answer: "solsticio",
    wordStatus: 0,
    question:
      "CON LA S. Nombre de dos momentos del año que marcan el inicio del verano y el comienzo del invierno.",
  },

  {
    letter: "t",
    answer: "troposfera",
    wordStatus: 0,
    question:
      "CON LA T. Capa de la atmósfera más cercana a la superficie de la Tierra, en la que tienen lugar los fenómenos del tiempo meteorológico.",
  },

  {
    letter: "u",
    answer: "utopia",
    wordStatus: 0,
    question:
      "CON LA U. Algo que es bueno y que deseamos pero que es imposible o muy difícil de realizar.",
  },

  {
    letter: "v",
    answer: "visera",
    wordStatus: 0,
    question:
      "CON LA V. Parte hacia afuera que tienen las gorras por delante y que sirve para que el sol no nos haga daño en los ojos.",
  },

  {
    letter: "w",
    answer: "western",
    wordStatus: 0,
    question: "CON LA W. Película del oeste americano.",
  },

  {
    letter: "x",
    answer: "xenofobia",
    wordStatus: 0,
    question: "CON LA X. Odio o antipatía hacia los extranjeros.",
  },

  {
    letter: "y",
    answer: "yodo",
    wordStatus: 0,
    question:
      "CON LA Y. Elemento químico de color oscuro que se encuentra en el suelo en forma de sales, así como en las algas y otros animales marinos.",
  },

  {
    letter: "z",
    answer: "zarzal",
    wordStatus: 0,
    question: "CON LA Z. Lugar donde hay muchas zarzas.",
  },
];

const ranking = [{ playerName: "pepe", playerPoints: 10 }];

const askName = () => {
  const name = prompt("Ingresa tu nombre");
  if (!name) {
    askName();
  }
  console.log(
    `Hola ${name}! Bienvenido a Pasapalabra. Debes introducir una palabra por cada letra que coincida con la definición dada. Si quieres dejarla para la siguiente ronda, introduce "pasapalabra", y si quieres terminar el juego "end". Buena suerte!`
  );
  return name;
};

const chooseRandomQuestions = () => {
  const randomNumber = Math.floor(Math.random() * (3 - 0) + 0);
  switch (randomNumber) {
    case 1:
      return questions1;
    case 2:
      return questions2;
    case 3:
      return questions3;
    default:
      return chooseRandomQuestions();
  }
};

const pasapalabra = (listOfQuestions) => {
  let pointsCounter = 0;
  let listOfQuestionsUnanswered;
  do {
    for (const palabra of listOfQuestions) {
      const wordEntered = prompt(palabra.question).toLowerCase();
      if (wordEntered === "end") {
        return { pasapalabraCompleted: false, points: pointsCounter };
      }
      if (wordEntered === palabra.answer) {
        console.log("Correcto!");
        palabra.wordStatus = 1;
        pointsCounter += 1;
      }
      if (wordEntered !== palabra.answer && wordEntered !== "pasapalabra") {
        console.log(`Incorrecto, la respuesta es: ${palabra.answer}`);
        palabra.wordStatus = 2;
      }
    }
    listOfQuestionsUnanswered = listOfQuestions.filter(
      (letter) => letter.wordStatus === 0
    );
    if (listOfQuestionsUnanswered.length > 0) {
      console.log(
        `Comienza una nueva ronda, te quedan ${listOfQuestionsUnanswered.length} palabras por responder`
      );
    }
  } while (listOfQuestionsUnanswered.length > 0);
  return { pasapalabraCompleted: true, points: pointsCounter };
};
const countPointsAndShowRanking = (dataResult, name) => {
  if (dataResult.pasapalabraCompleted === false) {
    console.log(`Acertaste ${dataResult.points} palabras.`);
  } else {
    console.log(
      `Felicidades, has obtenido ${dataResult.points} puntos. Este es el ranking de mejores jugadores:`
    );
    ranking.push({ playerName: name, playerPoints: dataResult.points });
    console.table(ranking);
  }
};
const playAgain = (name) => {
  // eslint-disable-next-line no-restricted-globals
  const answer = confirm(`Quieres jugar de nuevo ${name}?`);
  return answer;
};
const sayGoodbye = (name) => {
  console.log(`Adiós ${name}, gracias por jugar Pasapalabra!`);
};

const playPasapalabra = () => {
  const playerName = askName();
  const questions = chooseRandomQuestions();
  const result = pasapalabra(questions);
  countPointsAndShowRanking(result, playerName);
  const answerPlayAgain = playAgain(playerName);
  if (answerPlayAgain === true) {
    playPasapalabra();
  }
  sayGoodbye(playerName);
};
playPasapalabra();
