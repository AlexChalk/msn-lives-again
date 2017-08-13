import { all } from 'redux-saga/effects';

import watchSendMessageAsync from './sendMessageSaga.js';
import watchReceiveMessageAsync from './receiveMessageSaga.js';
import watchAddContactAsync from './addContactSaga.js';
import watchLoadDatabaseAsync from './loadDatabaseSaga.js';

export default function* rootSaga() {
  yield all([
    watchReceiveMessageAsync(),
    watchLoadDatabaseAsync(),
    watchSendMessageAsync(),
    watchAddContactAsync(),
  ]);
}
