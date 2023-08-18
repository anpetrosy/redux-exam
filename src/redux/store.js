import { configureStore } from "@reduxjs/toolkit";
import jewelryReducer from "./slices/jewelrySlice";

const store = configureStore({
  reducer: {
    jewelry: jewelryReducer,
  },
});

export default store;
