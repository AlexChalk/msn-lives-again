import { all } from 'redux-saga/effects';

import watchSendMessageAsync from './sendMessageSaga.js';
import watchAddContactAsync from './addContactSaga.js';

export default function* rootSaga() {
  yield all([
    watchSendMessageAsync(),
    watchAddContactAsync(),
  ]);
}
