import { createStore, compose, applyMiddleware } from 'redux';

const reduxDevTools =   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default (reducers, middlewares) => {
  const enhancer = compose(
    applyMiddleware(...middlewares),
    // reduxDevTools
  );

  return createStore(reducers, enhancer);
};
