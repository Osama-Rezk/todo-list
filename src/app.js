import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { KEY_CODES } from "./constants";

import { todosFiltersEnum } from "./constants";
import * as todoActions from "./store/todoActions";
import { TodoItem } from "./components";

export const App = () => {
  const todos = useSelector((state) => state.todos);
  const showTodos = useSelector((state) => state.showTodos);
  const [todoInput, setTodoInput] = useState("");
  const dispatch = useDispatch();

  function addToDo() {
    dispatch(todoActions.add(todoInput));
    setTodoInput("");
  }

  function handleFilter(e) {
    dispatch(todoActions.filter(e.target.value));
  }

  return (
    <div>
      <div className="form">
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button
          onKeyDown={(e) => {
            if (e.key == KEY_CODES.ENTER) {
              addNewTodo();
            }
          }}
          onClick={addToDo}
        >
          Add
        </button>
      </div>
      <div>
        <div>
          <input
            type="radio"
            name="filter"
            value={todosFiltersEnum.ALL}
            checked={showTodos === todosFiltersEnum.ALL}
            onChange={handleFilter}
            id="all"
          />
          <label htmlFor="all">Show All</label>
        </div>

        <div>
          <input
            type="radio"
            name="filter"
            value={todosFiltersEnum.OPENED}
            checked={showTodos === todosFiltersEnum.OPENED}
            onChange={handleFilter}
            id="open"
          />
          <label htmlFor="open">Show open</label>
        </div>

        <div>
          <input
            type="radio"
            name="filter"
            value={todosFiltersEnum.CLOSED}
            checked={showTodos === todosFiltersEnum.CLOSED}
            onChange={handleFilter}
            id="closed"
          />
          <label htmlFor="closed">Show Closed</label>
        </div>
      </div>
      <ul className="todos">
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};
