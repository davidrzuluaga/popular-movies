import React from 'react';
import { withRouter } from 'react-router-dom';

const MovieCard = props => {
  const movie = props.movie;
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
          <button onClick={() => props.history.push(`/pelicula/${movie.id}`)}>
            Ver más
          </button>
          <div className="like">
            <i className="material-icons">favorite_border</i>
            {/* <i className="material-icons">favorite</i> */}
          </div>
        </div>
      </div>
      <div
        className="image"
        style={{
          background: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`
        }}
      ></div>
      <p className="movietitle">{movie.title}</p>
    </div>
  );
};

export default withRouter(MovieCard);
