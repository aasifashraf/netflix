import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRated } from "../Constants/MoviesSlice";
import { options } from "../Constants/Links";

const useTopRated = () => {
  const dispatch = useDispatch();
  const MovieListApi = async () => {
    const fetchapi = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      options
    );
    const json = await fetchapi.json();
    dispatch(addTopRated(json.results));
    // console.log(json.results);
  };

  useEffect(() => {
    MovieListApi();
    // console.log(MovieListApi());
  });
};

export default useTopRated;
