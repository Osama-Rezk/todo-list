export const ACTIONS = {
  TOGGLE: "TOGGLE",
  ADD: "ADD",
  FILTER: "FILTER",
};

export const toggle = (id) => ({
  type: ACTIONS.TOGGLE,
  id,
});

export const add = (title) => ({
  type: ACTIONS.ADD,
  title,
});

export const filter = (value) => ({
  type: ACTIONS.FILTER,
  value,
});
