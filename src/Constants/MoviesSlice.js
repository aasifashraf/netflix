import { Slice, createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    youtubeTrailer: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
      return state;
    },
    addYoutubeTrailer: (state, action) => {
      state.youtubeTrailer = action.payload;
      return state;
    },
  },
});
export const { addMovies, addYoutubeTrailer } = MoviesSlice.actions;
export default MoviesSlice.reducer;
