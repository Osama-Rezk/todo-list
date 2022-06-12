import { todosSlice } from "./todos";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: todosSlice.reducer,
});
