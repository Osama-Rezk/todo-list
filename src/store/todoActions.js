export const ACTIONS = {
  TOGGLE: "TOGGLE",
  ADD: "ADD",
  FILTER: "FILTER",
};

export const toggle = (id) => ({
  type: `todos/${ACTIONS.TOGGLE}`,
  id,
});

export const add = (title) => ({
  type: `todos/${ACTIONS.ADD}`,
  title,
});

export const filter = (value) => ({
  type: `todos/${ACTIONS.FILTER}`,
  value,
});
