import React, { useState, useEffect } from 'react';
import ListOfMovies from '../layouts/listOfMovies';

const Favorites = props => {
  return <ListOfMovies showFavorites title={'My Favorites Movies'} />;
};

export default Favorites;
