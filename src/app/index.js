import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Home from '../pages/home';
import Wrapper from '../components/wrapper';
import Shibas from '../pages/shibas';
import Authors from '../pages/authors';

import rootReducer from '../reducers';
import { routes } from '../lib/constants';

import './index.css';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default () => (
  <Provider store={store}>
    <Wrapper>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path={routes.shibas} component={Shibas} />
        <Route path={routes.authors} component={Authors} />
      </BrowserRouter>
    </Wrapper>
  </Provider>
);
