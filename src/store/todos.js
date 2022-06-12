import { todosFiltersEnum } from "../constants";
import { ACTIONS } from "./todoActions";
import { createSlice } from "@reduxjs/toolkit";

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

const todoReducer = {
  [ACTIONS.ADD]: (state, action) => {
    state.todos.push({
      id: uniqueId.get(),
      title: action.title,
      completed: false,
    });
  },

  [ACTIONS.TOGGLE]: (state, action) => {
    for (let todo of state.todos) {
      if (todo.id === action.id) {
        todo.completed = !todo.completed;
        break;
      }
    }
  },

  [ACTIONS.FILTER]: (state, action) => {
    state.todos = initialTodos.filter((todo) => filterTodos(action, todo));
    state.showTodos = action.value;
  },
};

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: todoReducer,
});
