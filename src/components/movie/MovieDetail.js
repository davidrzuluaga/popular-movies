import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCritics from './critics';

const MovieDetail = props => {
  const { params } = props.match;
  const [loading, setLoading] = useState(true);
  const [theMovie, setTheMovie] = useState({});

  useEffect(() => {
    getMovie();
  }, []);

  function getMovie() {
    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${params.id}?api_key=ee41860b27e6bb1be4f182a4519564aa&language=en-US`
    })
      .then(response => {
        setLoading(false);
        setTheMovie(response.data);
      })
      .catch(e => {
        setLoading(false);
      });
  }

  return (
    <div className="MovieDetail">
      {loading ? (
        <p>Cargando</p>
      ) : (
        <>
          <div className="detail">
            <div
              className="poster"
              style={{
                background: `url(https://image.tmdb.org/t/p/original/${theMovie.poster_path})`
              }}
            ></div>
            <div
              className="movieBackground"
              style={{
                background: `url(https://image.tmdb.org/t/p/original/${theMovie.backdrop_path})`
              }}
            ></div>
          </div>
          <div className="banner">
            <img src="https://peliculas-favoritas.s3.amazonaws.com/popcorn.png" />
            <h2>{theMovie.title}</h2>
            <p></p>
            <p className="tagline">{theMovie.tagline}</p>
          </div>
          <div className="summary">
            <div className="content">
              <h3>Overview</h3>
              <p className="overview">{theMovie.overview}</p>
              <div className="fact">
                <h4>Country(ies): </h4>{' '}
                {theMovie.production_countries &&
                  theMovie.production_countries.map(country => (
                    <p>{country.name} - </p>
                  ))}
              </div>
              <div className="fact">
                <h4>Spoken language(s): </h4>{' '}
                {theMovie.spoken_languages &&
                  theMovie.spoken_languages.map(language => (
                    <p>{language.name} - </p>
                  ))}
              </div>
              <div className="fact">
                <h4>Release Date: </h4> <p>{theMovie.release_date} </p>
              </div>
              <div className="fact">
                <h4>Website: </h4>
                <a target="_blank" href={theMovie.homepage}>
                  <p>{theMovie.homepage} </p>
                </a>
              </div>
              <div className="fact">
                <h4>Genres: </h4>
                {theMovie.genres &&
                  theMovie.genres.map(genre => <p>{genre.name} - </p>)}
              </div>
              <div className="fact">
                <h4>Company(ies): </h4>
                {theMovie.production_companies &&
                  theMovie.production_companies.map(company => (
                    <p>{company.name} - </p>
                  ))}
              </div>
            </div>
            <MovieCritics params={params} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
