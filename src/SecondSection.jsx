import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondSection = () => {
  const playmoviesnow = useSelector((store) => store.movies);
  //   console.log(playmoviesnow);

  return (
    <div className="w-screen">
      <MoviesList movies={playmoviesnow} title={"NOW PLAYING MOVIES"} />
    </div>
  );
};

export default SecondSection;
