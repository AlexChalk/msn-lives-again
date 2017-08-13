import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

export default function* watchReceiveMessageAsync() {
  yield takeEvery('RECEIVE_MESSAGE', autoAddContactAsync);
}

export function* autoAddContactAsync(action) {
  try {
    const response = yield call(axios.post, window.location.origin + 
      '/contacts', {number: action.contact});
    yield put({ type: 'ADD_CONTACT_SUCCESS', 
      number: response.data.number});
  } catch (error) {
    yield put({ type: 'ADD_CONTACT_FAILURE', error: error});
  }
}
