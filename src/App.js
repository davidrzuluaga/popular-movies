import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Welcome from './components/welcome/welcome';
import MovieDetail from './components/movie/MovieDetail';
import NotFound from './components/layouts/NotFound';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/pelicula/:id" component={MovieDetail} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
