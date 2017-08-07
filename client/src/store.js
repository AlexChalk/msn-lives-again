import { createStore, compose } from 'redux';
// import { syncHistoryWithStore } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import rootReducer from './reducers/index.js';

const defaultState = {
  users: []
};

const store = createStore(rootReducer, defaultState);

export const history = createBrowserHistory();
export default store;
