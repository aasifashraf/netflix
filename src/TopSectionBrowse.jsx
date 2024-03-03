import React from "react";
import MainOverlay from "./MainOverlay";
import Mainpage from "./Mainpage";
import { useSelector } from "react-redux";

const TopSectionBrowse = () => {
  const movielistapi = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movielistapi) return;
  const { id } = movielistapi[0];

  return (
    <div className=" relative">
      <MainOverlay />
      <Mainpage trailerId={id} />
    </div>
  );
};

export default TopSectionBrowse;
