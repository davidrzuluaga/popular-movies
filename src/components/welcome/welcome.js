import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../common/MovieCard';
import ListOfMovies from '../layouts/listOfMovies';

const Welcome = props => {
  const [theTop20Movies, setTheTop20Movies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTheTop20Movies();
  }, []);

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
      <ListOfMovies
        movies={theTop20Movies}
        loading={loading}
        title={'Top Movies'}
      />
    </div>
  );
};

export default Welcome;
