import React, { useEffect, useState } from 'react';
import MovieCard from '../common/MovieCard';

const ListOfMovies = props => {
  const { loading, title } = props;

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    let getFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(getFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  function sourceOfMovies() {
    return props.showFavorites ? favorites : props.movies;
  }

  function createFavorite(movie) {
    setFavorites([...favorites, movie]);
  }

  function deleteFavorite(movie) {
    setFavorites(favorites.filter(fav => fav.id !== movie.id));
  }

  return (
    <div className="welcome">
      <div className="banner">
        <img src="https://comunidadmde.s3.amazonaws.com/resources/camera.png" />
        <h2>{title}</h2>
      </div>
      <div className="main">
        {loading ? (
          <p>Cargando</p>
        ) : (
          <div className="list">
            {sourceOfMovies().map(movie => (
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

export default ListOfMovies;
