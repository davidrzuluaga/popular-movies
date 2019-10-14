import React from 'react';

const MovieDetail = props => {
  const { params } = props.match;

  return (
    <div className="MovieDetail">
      <h1>Detail!</h1>
      <p>{params.id}</p>
    </div>
  );
};

export default MovieDetail;
