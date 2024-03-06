import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpComing } from "../Constants/MoviesSlice";
import { options } from "../Constants/Links";

const useUpComing = () => {
  const dispatch = useDispatch();
  const MovieListApi = async () => {
    const fetchapi = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      options
    );
    const json = await fetchapi.json();
    dispatch(addUpComing(json.results));
    // console.log(json.results);
  };

  useEffect(() => {
    MovieListApi();
    // console.log(MovieListApi());
  });
};

export default useUpComing;
