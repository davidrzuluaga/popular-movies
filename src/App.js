import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from './components/welcome/welcome';
import MovieDetail from './components/movie/MovieDetail';
import Navbar from './components/layouts/navbar/Navbar';
import NotFound from './components/layouts/NotFound';
import './sass/App.scss';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/pelicula/:id" component={MovieDetail} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
