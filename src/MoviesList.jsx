import MoviesRender from "./MoviesRender";

const MoviesList = (props) => {
  // console.log(props);
  const { movies } = props;

  const moviesdata = movies?.nowPlayingMovies;

  const popularmovies = movies.popular;

  const topRatedmovies = movies.topRated;

  const upComing = movies.upComing;
  // console.log(movies);

  if (moviesdata || popularmovies || topRatedmovies || upComing) {
    return (
      <div className=" my-6 mx-6">
        <div>
          <p className=" w-full text-white text-[1rem] ml-1 mb-3">NOW PLAY</p>
        </div>
        <div className=" flex overflow-x-scroll ">
          {moviesdata?.map((movie) => (
            <MoviesRender poster={movie?.poster_path} key={movie.id} />
          ))}
        </div>
        <div>
          <p className=" w-full text-white text-[1rem] ml-1 mb-3">TRENDING</p>
        </div>
        <div className=" flex overflow-x-scroll ">
          {popularmovies?.map((movie) => (
            <MoviesRender poster={movie?.poster_path} key={movie.id} />
          ))}
        </div>
        <div>
          <p className=" w-full text-white text-[1rem] ml-1 mb-3">TOP RATED</p>
        </div>
        <div className=" flex overflow-x-scroll ">
          {topRatedmovies?.map((movie) => (
            <MoviesRender poster={movie?.poster_path} key={movie.id} />
          ))}
        </div>
        <div>
          <p className=" w-full text-white text-[1rem] ml-1 mb-3">UP COMING</p>
        </div>
        <div className=" flex overflow-x-scroll ">
          {upComing?.map((movie) => (
            <MoviesRender poster={movie?.poster_path} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
};

export default MoviesList;
