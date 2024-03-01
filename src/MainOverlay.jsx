import React from "react";
import { useSelector } from "react-redux";
import useYoutubeApi from "./Hooks/useYoutubeApi";

const MainOverlay = () => {
  //   useYoutubeApi();
  const movielist = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movielist) return;
  const { original_title, overview } = movielist[0];
  return (
    <div className="h-screen w-screen bg-white bg-opacity-50 px-[1rem] bg-gradient-to-r from-black ">
      <div className="">
        <p className="text-3xl font-bold text-white">{original_title}</p>
        <p className="w-1/3 mt-[0.5rem] text-white">{overview}</p>
      </div>
      <div className="mt-[2rem]">
        <button className=" px-10 py-2 bg-black text-white rounded-sm mr-5">
          Play
        </button>
        <button className="px-10 py-2 bg-black text-white rounded-sm">
          More Info
        </button>
      </div>
    </div>
  );
};

export default MainOverlay;
