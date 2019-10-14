import React, { useState, useEffect } from 'react';
import ListOfMovies from '../layouts/listOfMovies';

const Favorites = props => {
  return (
    <div className="welcome">
      <ListOfMovies showFavorites title={'My Favorites Movies'} />
    </div>
  );
};

export default Favorites;
