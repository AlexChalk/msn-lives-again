import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Root from './components/Root.js';
import store from './store.js';
import './index.css';

render((
  <Root store={store} />),
  document.getElementById('root')
);


export const history = createBrowserHistory();
export default store;
