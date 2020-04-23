function routesFull(network) {
  var NotFound = require('./components/layouts/NotFound').default;
  if (network) {
    var Welcome = require('./components/welcome/welcome').default;
    var MovieDetail = require('./components/movie/MovieDetail').default;
    var Favorites = require('./components/favorites/favorites').default;
    var Fav = require('./components/favorites/favorites').default;
  }
  var allRoutes = [
    { component: Welcome, path: '/' },
    { component: MovieDetail, path: '/movie/:id/' },
    { component: Fav, path: '/lol' },
    { component: Favorites, path: '/favorites' },
    { component: NotFound },
  ];
  if (network) {
    return allRoutes;
  } else {
    let routesForSitemap = allRoutes.map((route) => {
      return { path: route.path };
    });
    return routesForSitemap;
  }
}

export default routesFull;
