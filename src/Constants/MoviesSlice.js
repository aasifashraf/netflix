import { Slice, createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
      return state;
    },
  },
});
export const { addMovies } = MoviesSlice.actions;
export default MoviesSlice.reducer;
