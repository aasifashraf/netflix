import userReducer from "./StoreSlice";
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./MoviesSlice";

const Store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default Store;
