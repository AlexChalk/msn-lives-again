import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/sagas';
import createBrowserHistory from 'history/createBrowserHistory';
import rootReducer from './reducers/index.js';

const sagaMiddleware = createSagaMiddleware();

const defaultState = {
  messages: []
};

const store = createStore(rootReducer, 
                          defaultState, 
                          applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export const history = createBrowserHistory();
export default store;
