import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = props => {
  const movie = props.movie;

  function isFavorite(movie) {
    return props.favorites.filter(fav => fav.id === movie.id).length;
  }
  function overviewSizeAccordingToWindow() {
    return window.innerWidth <= 1170 ? 100 : 230;
  }
  return (
    <div className="card">
      <div className="text">
        <p>
          {movie.overview
            ? `${movie.overview.substring(0, overviewSizeAccordingToWindow())}${
                movie.overview.length > overviewSizeAccordingToWindow()
                  ? '...'
                  : ''
              }`
            : ''}
        </p>
        <div className="options">
          <Link to={`/movie/${movie.id}`}>
            <button>
              Ver más
            </button>
          </Link>
          <div className="like">
            {isFavorite(movie) ? (
              <i
                id="deleteFavorite"
                className="material-icons"
                onClick={() => props.deleteFavorite(movie)}
              >
                favorite
              </i>
            ) : (
              <i
                id="createFavorite"
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

export default MovieCard
