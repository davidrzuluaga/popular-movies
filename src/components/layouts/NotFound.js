import React from 'react';
import { Redirect } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notfound">
      <p>Not Found</p>
      <Redirect to="/" />
    </div>
  );
};

export default NotFound;
