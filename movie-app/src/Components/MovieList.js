import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-4 gap-6 p-4">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
