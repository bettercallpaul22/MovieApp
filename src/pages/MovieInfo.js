import React from "react";
import { useLocation } from "react-router-dom";
import SingleMovieCard from "../components/SingleMovieCard";

const MovieInfo = ({ props }) => {

  const { pathname } = useLocation();
  const movieId = pathname.split("/")[2];
  const mainMovie = props.filter((movie) => movie.imdbID === movieId);

  return (
    <div>
      {mainMovie.map((movie) => (
        <div>
          <SingleMovieCard props={mainMovie} />
        </div>
      ))}
    </div>
  );
};

export default MovieInfo;
