import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './sass/App.scss';
import routesFull from './routes';
console.log(routesFull(true));

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routesFull(true).map((routes, i) => (
          <Route
            exact
            path={routes.path}
            key={i}
            component={routes.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
