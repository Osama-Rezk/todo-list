import store from "./store";
import * as todoActions from "./store/todoActions";

export const addNewTodo = () => {
  const todoInput = document.querySelector('[data-element="addTodoInput"]');
  store.dispatch(todoActions.add(todoInput.value));
};

export const toggleTodo = (e) => {
  const id = Number(e.target.dataset.id);
  store.dispatch(todoActions.toggle(id));
};
