import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieCritics = props => {
  const { params } = props;
  const [loading, setLoading] = useState(true);
  const [theMovieCritics, setTheMovieCritics] = useState([]);
  const [showCriticsTextLength, setshowCriticsTextLength] = useState(200);

  useEffect(() => {
    getMovieCritics();
  }, []);

  function getMovieCritics() {
    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${params.id}/reviews?api_key=ee41860b27e6bb1be4f182a4519564aa&language=en-US&page=1`
    })
      .then(response => {
        setLoading(false);
        setTheMovieCritics(response.data.results);
      })
      .catch(e => {
        setLoading(false);
      });
  }

  return (
    <div className="critics">
      {loading ? (
        <p>Cargando</p>
      ) : (
        <>
          <h3>Movie Critics</h3>
          {theMovieCritics.map(critic => (
            <div className="critic">
              <p>
                <strong>{critic.author}:</strong>$
                {critic.content.substring(0, showCriticsTextLength)}
                {critic.content.length > showCriticsTextLength ? (
                  <p
                    className="showmore"
                    onClick={() => setshowCriticsTextLength(60000)}
                  >
                    ... Show All Texts
                  </p>
                ) : null}
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default MovieCritics;
