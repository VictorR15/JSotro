const heroes = ["Batman", "Superman", "Mujer Maravilla", "Aquaman"];

console.warn("For tradicional");
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

//ESTE FOR RECORRE EL ARREGLO QUE YA ESTA INICIALIZADO
console.warn("For in");
for (let i in heroes) {
  console.log(heroes[i]);
}

//ESTE FOR HACE UNA COPIA DEL ARREGLO
console.warn("For of");
for (let heroe of heroes) {
  console.log(heroe);
}
