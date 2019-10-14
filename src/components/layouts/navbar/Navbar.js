import React from 'react';
import { withRouter } from 'react-router-dom';

const Navbar = props => {
  return (
    <div className="navbar">
      <h1>Bienvenido a Peliculas Populares</h1>
      <div className="buttons">
        <button onClick={() => props.history.push(`/`)}>Top 20</button>
        <button>Mis Favoritas</button>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
