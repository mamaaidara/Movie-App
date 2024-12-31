import React, { useState } from "react";
import moviesData from "./Data/data";  
import MovieCard from "./Components/MovieCard";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";
import AddMovie from "./Components/AddMovie";  
import './index.css';


function App() {
  const [movies, setMovies] = useState(moviesData); 
  const [searchQuery, setSearchQuery] = useState("");  
  const [minRating, setMinRating] = useState(0);  

 
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);  
  };

 
  const handleSearch = () => {
    const filteredMovies = moviesData.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setMovies(filteredMovies); 
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      movie.rating >= minRating
  );
  return (
    <div className="bg-gray-100  flex flex-col items-center">

    
      <Filter setSearchQuery={setSearchQuery}  handleSearch={handleSearch} /> 
      
      <MovieList movies={filteredMovies} />  
      
      <AddMovie addMovie={(newMovie) => setMovies([...movies, newMovie])} /> 

     <moviesData moviesData={moviesData} />
    
     <searchQuery searchQuery={searchQuery}/>
    </div>
  );
}

export default App;
