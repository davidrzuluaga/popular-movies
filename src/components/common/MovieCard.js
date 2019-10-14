import React from 'react';
import { withRouter } from 'react-router-dom';

const MovieCard = props => {
  const movie = props.movie;

  function isFavorite(movie) {
    return props.favorites.filter(fav => fav.id === movie.id).length;
  }
  return (
    <div className="card">
      <div className="text">
        <p>
          {movie.overview
            ? `${movie.overview.substring(0, 230)}${
                movie.overview.length > 230 ? '...' : ''
              }`
            : ''}
        </p>
        <div className="options">
          <button onClick={() => props.history.push(`/movie/${movie.id}`)}>
            Ver más
          </button>
          <div className="like">
            {isFavorite(movie) ? (
              <i
                className="material-icons"
                onClick={() => props.deleteFavorite(movie)}
              >
                favorite
              </i>
            ) : (
              <i
                className="material-icons"
                onClick={() => props.createFavorite(movie)}
              >
                favorite_border
              </i>
            )}
          </div>
        </div>
      </div>
      <div
        className="image"
        style={{
          background: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`
        }}
      ></div>
      <p
        className="movietitle"
        onClick={() => props.history.push(`/movie/${movie.id}`)}
      >
        {movie.title}
      </p>
    </div>
  );
};

export default withRouter(MovieCard);
