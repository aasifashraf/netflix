import { useEffect, useState } from "react";
import { options } from "./Constants/Links";

const Mainpage = ({ trailerId }) => {
  const [youtubeKey, setYoutubeKey] = useState("");

  //   console.log(trailerId);
  const youtubeApi = async () => {
    const fetchapi = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        trailerId +
        "/videos?language=en-US",
      options
    );
    const json = await fetchapi.json();
    //   dispatch(addYoutubeTrailer(json));
    // console.log(json.results);
    const trailer = json.results.filter((item) => item.type == "Trailer");
    const { key } = trailer[0];
    setYoutubeKey(key);
  };
  useEffect(() => {
    youtubeApi();
  }, []);

  return (
    <div className=" w-screen">
      <iframe
        className="  absolute  w-screen aspect-video -top-20"
        // width="560"
        // height="315"
        src={
          "https://www.youtube.com/embed/" +
          youtubeKey +
          "?controls=0&mute=1&showinfo=0&rel=0&autoplay=1&loop=1&cc_load_policy=3&iv_load_policy=0&autohide=0&modestbranding=1&" +
          "?si=gA0btiHsdigjII_F"
        }
        title="YouTube video player"
        // frameBorder="0"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Mainpage;
