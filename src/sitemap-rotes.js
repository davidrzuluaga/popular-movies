import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routesFull from './routes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routesFull(false).map((routes, i) => (
          <Route exact path={routes.path} key={i} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
