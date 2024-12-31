import React from "react";

function Filter({ setSearchQuery, searchQuery, moviesData, setMovies, }) {
  const handleSearch = () => {
   
    if (!moviesData) {
      console.error("moviesData is undefined");
      return;
    }
    const filteredMovies = moviesData.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setMovies(filteredMovies); 
  };

  return (
    <div className="header-image">
  <img
    src="https://matthasanopinion.com/wp-content/uploads/2022/11/marvel-cinematic-universe.jpg"
    alt="Header"
    className="header-image"
  />
   <div className="header-text">
    <h1 className="header-title">Bienvenue,</h1>
    <p className="header-description">Découvrez les meilleurs films et séries de notre App cinema...</p>
  </div>
   </div>
  );
}

export default Filter;
