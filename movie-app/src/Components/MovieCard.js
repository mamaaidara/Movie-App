import React from "react";

function MovieCard({ movie }) {
 
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < movie.rating ? "text-yellow-500" : "text-gray-300"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="shadow-md rounded-lg p-4 flex flex-col items-center text-center movie-card">
      {movie.posterURL ? (
        <img
          src={movie.posterURL}
          alt={movie.title}
          className="movie-poster"
        />
      ) : (
        <div className="placeholder-poster">
          <span>No Poster Available</span>
        </div>
      )}
      <h3 className="movie-title">{movie.title}</h3>
      <p className="movie-description">{movie.description}</p>
      <div className="movie-stars mt-2">{renderStars()}</div>
    </div>
  );
}

export default MovieCard;
