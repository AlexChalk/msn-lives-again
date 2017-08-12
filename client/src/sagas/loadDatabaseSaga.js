import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

export default function* watchLoadDatabaseAsync() {
  yield takeEvery('LOAD_DATABASE', loadDatabaseAsync);
}

export function* loadDatabaseAsync() {
  try {
    const response = yield call(axios.get, window.location.origin + 
      '/sms');
    yield put({ type: 'LOAD_MESSAGES_SUCCESS', response: response.data});
  } catch (error) {
    yield put({ type: 'LOAD_MESSAGES_FAILURE', error: error});
  }
}
