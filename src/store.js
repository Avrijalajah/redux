import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./Studentslice.js";

export const store = configureStore({
  reducer: {
    students: studentReducer
  }
});