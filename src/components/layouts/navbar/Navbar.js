import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Bienvenido a Peliculas Populares</h1>
      <div className="buttons">
        <button>Top 20</button>
        <button>Mis Favoritas</button>
      </div>
    </div>
  );
};

export default Navbar;
