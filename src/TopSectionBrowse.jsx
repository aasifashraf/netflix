import React from "react";
import MainOverlay from "./MainOverlay";
import Mainpage from "./Mainpage";
import { useSelector } from "react-redux";
import useRandomNumber from "./Hooks/useRandomNumber";

const TopSectionBrowse = () => {
  const movielistapi = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movielistapi) return;
  const { id } = movielistapi[0];

  return (
    <div className=" relative aspect-video">
      <div className=" absolute z-10">
        <MainOverlay />
      </div>
      <div className="absolute">
        <Mainpage trailerId={id} />
      </div>
    </div>
  );
};

export default TopSectionBrowse;
