import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './../pages/Home';
import SearchPage from './../pages/SearchPage';
import FavouritePage from './../pages/FavouritePage';
import FiltersPage from './../pages/FiltersPage';
import PageNotFound from './../pages/PageNotFound';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/filters" component={FiltersPage} />
        <Route exact path="/favourite" component={FavouritePage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/" component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default Routes;
