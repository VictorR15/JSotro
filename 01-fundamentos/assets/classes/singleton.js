class Singleton {
  static instancia;
  nombre = "";

  constructor(nombre = "") {
    console.log(Singleton.instancia);
  }
}
