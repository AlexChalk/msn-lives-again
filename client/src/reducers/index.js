import { combineReducers } from 'redux';
import messages from './messages.js';
import contacts from './contacts.js';

const rootReducer = combineReducers({
  messages,
  contacts,
});

export default rootReducer;
