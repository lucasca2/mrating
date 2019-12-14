import React from 'react';
import {
  Switch,
  Redirect,
} from 'react-router-dom';

import Route from './Route';

// Pages
import Movies from 'pages/Movies';

export default function Routes() {
    return (
      <Switch>
        <Route exact path="/" component={Movies} />
        <Redirect to="/" />
      </Switch>
    );
}

