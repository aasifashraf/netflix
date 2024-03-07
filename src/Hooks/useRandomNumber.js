import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRandom, addRandomNumber } from "../Constants/MoviesSlice";

const useRandomNumber = () => {
  const movielistapi = useSelector((store) => store.movies?.nowPlayingMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (movielistapi) {
      const randomNumber = () => {
        const randomIndex = Math.floor(movielistapi.length * Math.random());
        const randomNumber = movielistapi[randomIndex]?.id;
        dispatch(addRandomNumber(randomNumber));
      };
      randomNumber();
    } else {
      console.log(
        "Random number generation cancelled due to null movielistapi."
      );
    }
  }, []);
};

export default useRandomNumber;
