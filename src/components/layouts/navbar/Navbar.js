import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <div className="navbar">
      <h1>Welcome to the Popular Movies List</h1>
      <div className="buttons">
        <Link to={`/`}>
          <button>Top Movies</button>
        </Link>
        <Link to={`/favorites`}>
          <button>
            My favorites
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
