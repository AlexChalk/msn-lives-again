import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import Root from './components/Root.js';
import rootReducer from './reducers/index.js';
import './index.css';

const store = createStore(rootReducer);

render((
  <Root store={store} />),
  document.getElementById('root')
);
