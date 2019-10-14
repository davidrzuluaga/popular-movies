import React from 'react';

const Welcome = props => {
  const { params } = props.match;
  return (
    <div className="welcome">
      <h1>Welcome!</h1>
      <p>{params.id}</p>
    </div>
  );
};

export default Welcome;
