import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovies } from "../Constants/MoviesSlice";
import { options } from "../Constants/Links";

const useMovieslist = () => {
  const dispatch = useDispatch();
  const MovieListApi = async () => {
    const fetchapi = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day",
      options
    );
    const json = await fetchapi.json();
    dispatch(addMovies(json.results));
    // console.log(json.results);
  };

  useEffect(() => {
    MovieListApi();
    // console.log(MovieListApi());
  });
};

export default useMovieslist;
