import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

export default function* watchSendMessageAsync() {
  yield takeEvery('SEND_MESSAGE', sendMessageAsync);
}

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
      contact: response.data.contact, messageSid: response.data.messageSid});
  } catch (error) {
    yield put({ type: 'SEND_MESSAGE_FAILURE', error: error});
  }
}
