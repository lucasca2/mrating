import React from 'react';
import { Provider } from "react-redux";
import { Router } from 'react-router-dom';

// Styles
import GlobalStyle from './globalStyle';

// Components
import Routes from 'routes/index';

// Services
import history from 'services/history';

// Modules
import { store } from 'store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
