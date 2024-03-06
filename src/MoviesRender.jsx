import React from "react";
import { post_URL } from "./Constants/Links";

const MoviesRender = ({ poster }) => {
  //   console.log(poster);
  return (
    <div>
      <div className=" w-[10dvw] mx-1 ">
        <img src={post_URL + poster} alt="" />
      </div>
    </div>
  );
};

export default MoviesRender;
