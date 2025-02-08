import _ from "underscore";
import "./style.css";

const miModulo = (() => {
  "use strict";

  let deck = [];
  const tipos = ["C", "D", "H", "S"],
    especiales = ["A", "J", "Q", "K"];
  let puntosJugadores = [];
  //Referencias HTML

  const btnPedir = document.querySelector("#btnPedir"),
    btnDetener = document.querySelector("#btnDetener"),
    btnNuevo = document.querySelector("#btnNuevo");

  const small = document.querySelectorAll("small"),
    divCartasJuagadores = document.querySelectorAll(".divCartas");

  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck();
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }
    small.forEach((elemento) => (elemento.innerText = 0));
    divCartasJuagadores.forEach((elemento) => (elemento.innerHTML = ""));
    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };

  //ESTA FUNCION CREA UN NUEVO DECK
  const crearDeck = () => {
    deck = [];
    for (let i = 2; i <= 10; i++) {
      for (let tipo of tipos) {
        deck.push(i + tipo);
      }
    }
    for (let tipo of tipos) {
      for (let esp of especiales) {
        deck.push(esp + tipo);
      }
    }

    return _.shuffle(deck);
  };

  //PERMITE TOMAR UNA CARTA

  const pedirCarta = () => {
    if (deck.length === 0) {
      throw "No hay mas cartas en el deck";
    }
    return deck.pop();
  };

  //VALOR DE LA CARTA
  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);

    carta = isNaN(valor)
      ? (carta = valor === "A" ? 11 : 10)
      : (carta = valor * 1);
    return carta;
  };

  // Turno: 0 = primer jugadro ye el ultimo sera la computadora
  const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    small[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  };

  const crearCarta = (carta, turno) => {
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartasJuagadores[turno].append(imgCarta);
  };

  const determinarGanador = () => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(() => {
      if (puntosComputadora === puntosMinimos) {
        alert("Nadie gana");
      } else if (puntosMinimos > 21) {
        alert("Computadora Gana");
      } else if (puntosComputadora > 21) {
        alert("Jugador Gana");
      } else {
        alert("Computadora Gana");
      }
    }, 10);
  };

  //TURNO COMPUTADORA

  const turnoComputador = (puntosMinimos) => {
    let puntosComputadora = 0;
    do {
      const carta = pedirCarta();

      puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);

      crearCarta(carta, puntosJugadores.length - 1);
    } while (puntosComputadora <= puntosMinimos && puntosMinimos <= 21);
    determinarGanador();
  };

  // Eventos

  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta();

    const puntosJugador = acumularPuntos(carta, 0);

    crearCarta(carta, 0);

    if (puntosJugador > 21) {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputador(puntosJugador);
      alert("Lo siento mucho perdiste");
    } else if (puntosJugador === 21) {
      btnDetener.disabled = true;
      turnoComputador(puntosJugador);
      alert("21, genial");
    }
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputador(puntosJugadores[0]);
  });

  btnNuevo.addEventListener("click", () => {
    inicializarJuego();
  });

  return {
    nuevoJuego: inicializarJuego,
  };
})();
