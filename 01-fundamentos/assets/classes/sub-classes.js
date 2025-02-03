class Persona {
  static _conteo = 0;
  static get conteo() {
    return Persona._conteo + " intaicias";
  }
  static mensaje() {
    console.log(this.nombre); //undfined
    console.log("Hola a todo, soy un metodo estatico");
  }

  // INICIALIZANDO PROPIEDADES DE CLASE
  nombre;
  codigo;
  frase;
  comida;
  constructor(nombre = "", codigo = "", frase = "") {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
    Persona._conteo++;
  }
  set setComidFavorita(comida) {
    this.comida = comida.toUpperCase();
  }
  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }
  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }
  miFrase() {
    // HACER REFERENCIA A OTRO METEDO
    this.quienSoy();
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

class Heroe extends Persona {
  clan = "Sin clan";
  constructor(nombre, codigo, frase) {
    super(nombre, codigo, frase);
    this.clan = "Avangers";
  }
  quienSoy() {
    console.log(`Soy ${this.nombre} ${this.clan}`);
    super.quienSoy();
  }
}

const spiderman = new Heroe("Peter Parker", "Spider", "Soy el hombre araña");

console.log(spiderman);
spiderman.quienSoy();
