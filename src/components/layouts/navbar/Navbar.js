import React from 'react';
import { withRouter } from 'react-router-dom';

const Navbar = props => {
  return (
    <div className="navbar">
      <h1>Welcome to the Popular Movies List</h1>
      <div className="buttons">
        <button onClick={() => props.history.push(`/`)}>Top 20</button>
        <button>My favorites</button>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
