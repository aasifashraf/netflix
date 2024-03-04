import React from "react";
import { useSelector } from "react-redux";

const MainOverlay = () => {
  const movielist = useSelector((store) => store.movies?.nowPlayingMovies);
  //   console.log(movielist);
  if (!movielist) return;
  const { original_title, overview } = movielist[0];
  return (
    <div className=" aspect-video w-screen bg-white bg-opacity-20 px-[1rem] bg-gradient-to-r from-black  ">
      <div className=" absolute bottom-0 left-0 mx-[2dvw]">
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
    </div>
  );
};

export default MainOverlay;
