import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log("movies", movies);

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-52 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          {/* <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} /> */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
