import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import history from './history';
import MainRoutes from './MainRoutes';
import rootReducer from './rootReducer';
import * as serviceWorker from './serviceWorker';
import './index.css';

const middlewares = [thunk];

const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));

const routing = (
  <Provider store={store}>
    <Router history={history}>
      <MainRoutes />
    </Router>
  </Provider>
  );

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
