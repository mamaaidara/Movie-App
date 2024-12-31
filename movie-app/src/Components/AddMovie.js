import React, { useState } from "react";

function AddMovie({ addMovie }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newMovie = { title, description, posterURL, rating };
    addMovie(newMovie);
   
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating(0);
  };

  return (
    <form
    onSubmit={handleSubmit}
    className="add-movie-form bg-gradient-to-r from-blue-100 via-purple-200 to-pink-100 p-10 rounded-xl shadow-lg mt-6 max-w-lg mx-auto"
  >
    <h2 className="text-4xl font-extrabold text-center text-indigo-800 mb-8">
      Ajouter un film
    </h2>
    
    
    <input
      type="text"
      placeholder="Titre"
      className="border-b-2 border-gray-300 focus:border-indigo-500 focus:ring-0 px-4 py-2 rounded-lg mb-6 w-full transition-all duration-300"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />

    <textarea
      placeholder="Description"
      className="border-b-2 border-gray-300 focus:border-indigo-500 focus:ring-0 px-4 py-2 rounded-lg mb-6 w-full transition-all duration-300"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
    
    <input
      type="text"
      placeholder="URL de l'affiche"
      className="border-b-2 border-gray-300 focus:border-indigo-500 focus:ring-0 px-4 py-2 rounded-lg mb-6 w-full transition-all duration-300"
      value={posterURL}
      onChange={(e) => setPosterURL(e.target.value)}
    />
    
    <input
      type="number"
      placeholder="Note"
      className="border-b-2 border-gray-300 focus:border-indigo-500 focus:ring-0 px-4 py-2 rounded-lg mb-6 w-full transition-all duration-300"
      value={rating}
      onChange={(e) => setRating(Number(e.target.value))}
    />
    
    <button
      type="submit"
      className="bg-indigo-600 text-white px-6 py-3 rounded-2xl hover:bg-indigo-700 transform transition-all duration-300 hover:scale-105"
    >
      Ajouter
    </button>
  </form>
  
  
  );
}

export default AddMovie;
