import { todosFiltersEnum } from "../constants";
import { ACTIONS } from "./todoActions";

const uniqueId = {
  currentId: 0,
  get() {
    this.currentId += 1;
    return this.currentId;
  },
};

const filterTodos = (action, todo) => {
  if (action.value === todosFiltersEnum.ALL) return true;
  else if (action.value === todosFiltersEnum.OPENED) return !todo.completed;
  return todo.completed;
};

let initialTodos = [
  {
    id: uniqueId.get(),
    title: "JS-101",
    completed: true,
  },
  {
    id: uniqueId.get(),
    title: "JS-102",
    completed: false,
  },
  {
    id: uniqueId.get(),
    title: "JS-201",
    completed: false,
  },
  {
    id: uniqueId.get(),
    title: "JS-202",
    completed: false,
  },
];

export const initialState = {
  todos: initialTodos,
  showTodos: todosFiltersEnum.ALL,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      state.todos.push({
        id: uniqueId.get(),
        title: action.title,
        completed: false,
      });
      break;

    case ACTIONS.TOGGLE:
      for (let todo of state.todos) {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
          break;
        }
      }

    case ACTIONS.FILTER:
      state.todos = initialTodos.filter((todo) => filterTodos(action, todo));
      state.showTodos = action.value;

      break;
  }
};
