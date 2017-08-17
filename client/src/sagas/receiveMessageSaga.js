import { put, select, takeEvery } from 'redux-saga/effects';
import { getContacts } from './selectors.js';

export default function* watchReceiveMessageAsync() {
  yield takeEvery('RECEIVE_MESSAGE', autoAddMissingContactAsync);
}

export function* autoAddMissingContactAsync(action) {
  const contacts = yield select(getContacts);

  if (!contacts.filter(c => c.number === action.contact)[0]) {
    yield put({ type: 'ADD_CONTACT', number: action.contact});
  }

}
