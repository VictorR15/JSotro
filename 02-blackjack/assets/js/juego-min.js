const miModulo = (() => {
  "use strict";
  let e = [],
    t = ["C", "D", "H", "S"],
    r = ["A", "J", "Q", "K"],
    l = [],
    a = document.querySelector("#btnPedir"),
    n = document.querySelector("#btnDetener"),
    d = document.querySelector("#btnNuevo"),
    o = document.querySelectorAll("small"),
    s = document.querySelectorAll(".divCartas"),
    i = (t = 2) => {
      (e = c()), (l = []);
      for (let r = 0; r < t; r++) l.push(0);
      o.forEach((e) => (e.innerText = 0)),
        s.forEach((e) => (e.innerHTML = "")),
        (a.disabled = !1),
        (n.disabled = !1);
    },
    c = () => {
      e = [];
      for (let l = 2; l <= 10; l++) for (let a of t) e.push(l + a);
      for (let n of t) for (let d of r) e.push(d + n);
      return _.shuffle(e);
    },
    u = () => {
      if (0 === e.length) throw "No hay mas cartas en el deck";
      return e.pop();
    },
    $ = (e) => {
      let t = e.substring(0, e.length - 1);
      return (e = e = isNaN(t) ? ("A" === t ? 11 : 10) : 1 * t);
    },
    h = (e, t) => ((l[t] = l[t] + $(e)), (o[t].innerText = l[t]), l[t]),
    f = (e, t) => {
      let r = document.createElement("img");
      (r.src = `assets/cartas/${e}.png`),
        r.classList.add("carta"),
        s[t].append(r);
    },
    b = () => {
      let [e, t] = l;
      setTimeout(() => {
        t === e
          ? alert("Nadie gana")
          : e > 21
          ? alert("Computadora Gana")
          : t > 21
          ? alert("Jugador Gana")
          : alert("Computadora Gana");
      }, 10);
    },
    g = (e) => {
      let t = 0;
      do {
        let r = u();
        (t = h(r, l.length - 1)), f(r, l.length - 1);
      } while (t <= e && e <= 21);
      b();
    };
  return (
    a.addEventListener("click", () => {
      let e = u(),
        t = h(e, 0);
      f(e, 0),
        t > 21
          ? ((a.disabled = !0),
            (n.disabled = !0),
            g(t),
            alert("Lo siento mucho perdiste"))
          : 21 === t && ((n.disabled = !0), g(t), alert("21, genial"));
    }),
    n.addEventListener("click", () => {
      (a.disabled = !0), (n.disabled = !0), g(l[0]);
    }),
    d.addEventListener("click", () => {
      i();
    }),
    { nuevoJuego: i }
  );
})();
