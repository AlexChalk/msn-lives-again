import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import rootSaga from './sagas/sagas';
import createBrowserHistory from 'history/createBrowserHistory';
import rootReducer from './reducers/index.js';

const sagaMiddleware = createSagaMiddleware();
const socket = io();
const socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

const defaultState = {
  activeContact: null,
  contacts: [],
  messages: [],
};

const store = createStore(
  rootReducer, 
  defaultState, 
  applyMiddleware(socketIoMiddleware, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export const history = createBrowserHistory();
export default store;
