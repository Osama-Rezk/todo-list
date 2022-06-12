import { DOM_EVENTS, KEY_CODES } from "./constants";
import { addNewTodo, toggleTodo } from "./helper";

function addListener(eventName, selector, callback) {
  document.body.addEventListener(eventName, (e) => {
    if (e.target.matches(selector)) {
      return callback(e);
    }
  });
}

addListener(DOM_EVENTS.CLICK, '[data-element="addTodoButton"]', addNewTodo);

addListener(DOM_EVENTS.KEYDOWN, '[data-element="addTodoInput"]', (e) => {
  if (e.key == KEY_CODES.ENTER) {
    addNewTodo();
  }
});

addListener(DOM_EVENTS.CLICK, '[data-element="toggleTodo"]', toggleTodo);
