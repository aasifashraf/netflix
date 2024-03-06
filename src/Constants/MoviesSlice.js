import { Slice, createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popular: null,
    topRated: null,
    upComing: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
      return state;
    },
    addPopular: (state, action) => {
      state.popular = action.payload;
      return state;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
      return state;
    },
    addUpComing: (state, action) => {
      state.upComing = action.payload;
      return state;
    },
  },
});
export const { addMovies, addPopular, addTopRated, addUpComing } =
  MoviesSlice.actions;
export default MoviesSlice.reducer;
