import { all } from 'redux-saga/effects';

import watchSendMessageAsync from './sendMessageSaga.js';
import watchAddContactAsync from './addContactSaga.js';
import watchLoadDatabaseAsync from './loadDatabaseSaga.js';

export default function* rootSaga() {
  yield all([
    watchLoadDatabaseAsync(),
    watchSendMessageAsync(),
    watchAddContactAsync(),
  ]);
}
