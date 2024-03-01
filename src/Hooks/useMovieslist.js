import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovies } from "../Constants/MoviesSlice";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTg5OWJlNDExYjE4NzZjMTYwYTE1ZGIwMTdjNjFmNSIsInN1YiI6IjY1ZTAxZmQ5OWQ1OTJjMDE3YzdhZjliMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ktIsyKxCNVq0lf4ZgjVvis-oDCHvLtswxNpnXlxDj3E",
  },
};

// fetch("https://api.themoviedb.org/3/movie/changes?page=1", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

const useMovieslist = () => {
  const dispatch = useDispatch();
  const MovieListApi = async () => {
    const fetchapi = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day",
      options
    );
    const json = await fetchapi.json();
    dispatch(addMovies(json.results));
  };

  useEffect(() => {
    MovieListApi();
    console.log(MovieListApi());
  });
};

export default useMovieslist;
