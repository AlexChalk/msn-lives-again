import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

export function* sendMessageAsync(action) {
  const data = {
    body: action.body,
    to: action.interlocutor,
    from: action.from,
  };

  try {
    const response = yield call(axios.post, window.location.origin + 
      '/sms/outgoing', data);

    yield put({ type: 'SEND_MESSAGE_SUCCESS', body: action.body, 
      interlocutor: action.interlocutor, messageSid: response.data});

  } catch (error) {
    yield put({ type: 'SEND_MESSAGE_FAILURE', error: error});
  }
}

export function* watchSendMessageAsync() {
  yield takeEvery('SEND_MESSAGE', sendMessageAsync);
}

export default function* rootSaga() {
  yield all([
    watchSendMessageAsync(),
  ]);
}
