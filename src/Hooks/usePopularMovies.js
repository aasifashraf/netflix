import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopular } from "../Constants/MoviesSlice";
import { options } from "../Constants/Links";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const MovieListApi = async () => {
    const fetchapi = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      options
    );
    const json = await fetchapi.json();
    dispatch(addPopular(json.results));
    // console.log(json.results);
  };

  useEffect(() => {
    MovieListApi();
    // console.log(MovieListApi());
  });
};

export default usePopularMovies;
