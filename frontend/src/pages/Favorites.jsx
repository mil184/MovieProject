import React from 'react'
import "../css/Favorites.css"
import { useMovieContext } from '../../context/MovieContext'
import MovieCard from "../components/MovieCard";

function Favorites () {
  const {favorites} = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
        <h2>No favorite movies yet.</h2>
        <p>start adding movies</p>
    </div>
  )
}

export default Favorites