import React from 'react';
import {
  Switch,
  Redirect,
} from 'react-router-dom';

import Route from './Route';

// Pages
import Movies from 'pages/Movies';
import Movie from 'pages/Movie';

export default function Routes() {
    return (
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route path={"/filme/:id"} component={Movie} />
        <Redirect to="/" />
      </Switch>
    );
}

