import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../common/MovieCard';
import ListOfMovies from '../layouts/listOfMovies';

const Welcome = props => {
  const [theTop20Movies, setTheTop20Movies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setcurrentPage] = useState(1);

  useEffect(() => {
    getTheTop20Movies();
  }, []);

  useEffect(() => {
    getTheTop20Movies();
  }, [currentPage]);

  function getTheTop20Movies() {
    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/popular?api_key=ee41860b27e6bb1be4f182a4519564aa&language=en-US&page=${currentPage}`
    })
      .then(response => {
        setLoading(false);
        setTheTop20Movies([...theTop20Movies, ...response.data.results]);
      })
      .catch(e => {
        setLoading(false);
      });
  }

  return (
    <>
      <ListOfMovies
        movies={theTop20Movies}
        loading={loading}
        title={'Top Movies'}
      />
      <button
        onClick={() => setcurrentPage(currentPage + 1)}
        style={{
          width: '100%',
          backgroundColor: 'gray',
          margin: '0 0 10px 0',
          height: '80px',
          fontSize: '50px'
        }}
      >
        Get More
      </button>
    </>
  );
};

export default Welcome;
