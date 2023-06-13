import React from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  console.log(props)
  return (
    <div>
      {props.movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
