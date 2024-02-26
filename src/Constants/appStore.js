import userReducer from "./StoreSlice";
import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default Store;
