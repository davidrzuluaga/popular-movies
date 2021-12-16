import React from 'react';

const MovieCard = props => {
  const movie = props.movie;

  function isFavorite(movie) {
    return props.favorites.filter(fav => fav.id === movie.id).length;
  }
  function overviewSizeAccordingToWindow() {
    return window.innerWidth <= 1170 ? 100 : 230;
  }
  function redirect() {
    props?.history?.push(`/movie/${movie.id}`)
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
          <button onClick={redirect}>
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

export default MovieCard;
