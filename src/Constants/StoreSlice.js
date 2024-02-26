import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: null,

  reducers: {
    addUser: (state, action) => {
      state = action.payload;
    },
    removeUser: (state) => {
      state = null;
    },
  },
});

export const { addUser, removeUser } = slice.actions;
export default slice.reducer;
