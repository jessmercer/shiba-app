import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import { createStore, compose, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import 'jest-enzyme';

import rootReducer from './reducers';

configure({ adapter: new Adapter()});

export const setupTestComponent = ({ render } = {}) => ({ props } = {}) => (
  {
    wrapper: mount(
      <BrowserRouter>
        {React.cloneElement(render(), props)}
      </BrowserRouter>
    ),
  }
);

export const setupTestProvider = (
  { render, prerender: basePrerender = () => {} } = {}
  ) => (
    { props, prerender: testPrerender = () => {} } = {}
  ) => {
  const store = createStore(rootReducer, {}, compose(applyMiddleware(thunk)));
  basePrerender(store);
  testPrerender(store);

  return {
    wrapper: mount(
      <BrowserRouter>
        <Provider store={store}>
          {React.cloneElement(render(), props)}
        </Provider>
      </BrowserRouter>
    ),
    store,
  };
};
