import { todosFiltersEnum } from "./constants";

function renderApp(input, todoList, filters) {
  return `<div>${input}${filters}${todoList}</div>`;
}

function renderForm() {
  return `<div class="form">
    <input type="text" data-element="addTodoInput">
    <button data-element="addTodoButton">Add</button>
  </div>`;
}

function renderTodos(todoItems) {
  return `<ul class="todos">${todoItems}</ul>`;
}

function renderTodoItem(todo) {
  return `<li class="${`todos__item todos__item_${
    todo.completed && "checked"
  }`}">
    <input type="checkbox" data-element="toggleTodo" data-id="${todo.id}"${
    todo.completed ? " checked" : ""
  }>
    ${todo.title}
  </li>`;
}

function renderFilters(showTodos) {
  return `<div>
  <div>
  <input type="radio" name="filter" value=${todosFiltersEnum.ALL} id="all"
   ${showTodos === todosFiltersEnum.ALL ? "checked" : ""}
  >
  <label for="all">Show All</label>
</div>
<div>
  <input type="radio" name="filter" value=${todosFiltersEnum.OPENED} id="open"
  ${showTodos === todosFiltersEnum.OPENED ? "checked" : ""}

  >
  <label for="open">Show open</label>
</div>
<div>
  <input type="radio" name="filter" value=${todosFiltersEnum.CLOSED} id="closed"
  ${showTodos === todosFiltersEnum.CLOSED ? "checked" : ""}

  >
  <label for="closed">Show Closed</label>
</div>
</div>
`;
}

export default (element, state) => {
  const todoItems = state.todos.map(renderTodoItem).join("");
  element.innerHTML = renderApp(
    renderForm(),
    renderTodos(todoItems),
    renderFilters(state.showTodos)
  );
};
