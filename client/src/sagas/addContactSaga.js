import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

export default function* watchAddContactAsync() {
  yield takeEvery('ADD_CONTACT', addContactAsync);
}

export function* addContactAsync(action) {
  try {
    yield call(axios.post, window.location.origin + 
      '/contacts', {number: action.number});
    yield put({ type: 'ADD_CONTACT_SUCCESS', number: action.number});
  } catch (error) {
    yield put({ type: 'ADD_CONTACT_FAILURE', error: error});
  }
}
