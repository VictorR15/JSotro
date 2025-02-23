import { v4 as uuid } from "uuid";
export class Todo {
  /**
   *
   * @param {String} descripcion Descripcion de la tarea que se va a crear
   */
  constructor(descripcion) {
    this.id = uuid();
    this.descripcion = descripcion;
    this.done = false;
    this.createAt = new Date();
  }
}
