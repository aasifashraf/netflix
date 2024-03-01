import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../Constants/MoviesSlice";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTg5OWJlNDExYjE4NzZjMTYwYTE1ZGIwMTdjNjFmNSIsInN1YiI6IjY1ZTAxZmQ5OWQ1OTJjMDE3YzdhZjliMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ktIsyKxCNVq0lf4ZgjVvis-oDCHvLtswxNpnXlxDj3E",
  },
};

//   fetch('https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
const useYoutubeApi = () => {
  const dispatch = useDispatch();

  const movieId = useSelector((store) => store.movies?.nowPlayingMovies[0].id);
  const youtubeApi = async () => {
    const fetchapi = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      options
    );
    const json = await fetchapi.json();
    console.log(json);
    dispatch(addMovies(json));
  };
  useEffect(() => {
    youtubeApi();
  }, []);
};

export default useYoutubeApi;
