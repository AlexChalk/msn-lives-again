import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

export function* sendMessageAsync(action) {
  const data = {
    body: action.body,
    to: action.contact,
    from: action.from,
  };

  try {
    const response = yield call(axios.post, window.location.origin + 
      '/sms/outgoing', data);

    yield put({ type: 'SEND_MESSAGE_SUCCESS', body: action.body, 
      contact: action.contact, messageSid: response.data});

  } catch (error) {
    yield put({ type: 'SEND_MESSAGE_FAILURE', error: error});
  }
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

export function* watchSendMessageAsync() {
  yield takeEvery('SEND_MESSAGE', sendMessageAsync);
}

export function* watchAddContactAsync() {
  yield takeEvery('ADD_CONTACT', addContactAsync);
}

export default function* rootSaga() {
  yield all([
    watchSendMessageAsync(),
    watchAddContactAsync(),
  ]);
}
