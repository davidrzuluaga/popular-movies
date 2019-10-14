import React from 'react';

const Welcome = props => {
  return (
    <div className="welcome">
      <div className="banner">
        <img src="https://peliculas-favoritas.s3.amazonaws.com/popcorn.png" />
        <h2>Las 20 peliculas mas vistas este mes</h2>
      </div>
      <div className="main">
        <div className="search">
          <form>
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
