import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRandomNumber } from "../Constants/MoviesSlice";

const useRandomNumber = () => {
  const movielistapi = useSelector((store) => store.movies?.nowPlayingMovies);
  const dispatch = useDispatch();

  // if (movielistapi) return;
  const randomNumber = () => {
    const randomNumberValue = Math.floor(movielistapi.length * Math.random());
    dispatch(addRandomNumber(randomNumberValue));
  };
  useEffect(() => {
    randomNumber();
  }, []);
};
export default useRandomNumber;
