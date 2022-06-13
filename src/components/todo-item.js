import React from "react";
import { useDispatch } from "react-redux";
import * as todoActions from "../store/todoActions";

export function TodoItem(props) {
  const dispatch = useDispatch();

  const { todo } = props;

  function handleToggle() {
    dispatch(todoActions.toggle(todo.id));
  }

  return (
    <li className={`todos__item todos__item_${todo.completed && "checked"}`}>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      {todo.title}
    </li>
  );
}
