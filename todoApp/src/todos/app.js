import todoStore from "../store/todo.store";
import html from "./app.html?raw";
import { renderTodos } from "./use-cases";

const ElementIDs = {
  todoList : '.todo-list',
}

/**
 *
 * @param {String} elementId es el indentificador en donde se va a agregar el HTML
 */

export const App = (elementId) => {
  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(ElementIDs.todoList, todos);
  };

  //CUANDO LA FUNCION App se manda a llamar
  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodos();
  })();
};
