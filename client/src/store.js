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
  contacts: [
    {
      number: '+15146226844',
    },
  ],
  messages: [
    // { 
    //   contact: '+15145495327',
    //   messageSid: '1234567890ABCDEF',
    //   direction: 'outgoing',
    //   timestamp: new Date(),
    //   body: 'Parsecs, Parsecs?',
    // },
    // { 
    //   contact: '+15145495327',
    //   messageSid: '123456789',
    //   direction: 'incoming',
    //   timestamp: new Date(),
    //   body: 'The robots are coming! Head for the hills!',
    // },
  ]
};

const store = createStore(
  rootReducer, 
  defaultState, 
  applyMiddleware(socketIoMiddleware, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export const history = createBrowserHistory();
export default store;
