import { combineReducers } from 'redux';
import messages from './messages.js';
import contacts from './contacts.js';
import activeContact from './activeContact.js';

const rootReducer = combineReducers({
  activeContact,
  messages,
  contacts,
});

export default rootReducer;
