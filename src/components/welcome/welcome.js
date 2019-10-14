import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../common/MovieCard';

const Welcome = props => {
  const [theTop20Movies, setTheTop20Movies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getTheTop20Movies();
    let getFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(getFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  function createFavorite(movie) {
    setFavorites([...favorites, movie]);
  }

  function deleteFavorite(movie) {
    setFavorites(favorites.filter(fav => fav.id !== movie.id));
  }

  function getTheTop20Movies() {
    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/popular?api_key=ee41860b27e6bb1be4f182a4519564aa&language=en-US&page=1`
    })
      .then(response => {
        setLoading(false);
        setTheTop20Movies(response.data.results);
      })
      .catch(e => {
        setLoading(false);
      });
  }

  return (
    <div className="welcome">
      <div className="banner">
        <img src="https://peliculas-favoritas.s3.amazonaws.com/popcorn.png" />
        <h2>Monthly Top 20</h2>
      </div>
      <div className="main">
        <div className="search">
          <input
            type="text"
            placeholder="Search on the list..."
            name="search"
          />
        </div>
        {loading ? (
          <p>Cargando</p>
        ) : (
          <div className="top20">
            {theTop20Movies.map(movie => (
              <MovieCard
                movie={movie}
                key={movie.id}
                favorites={favorites}
                createFavorite={createFavorite}
                deleteFavorite={deleteFavorite}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Welcome;
