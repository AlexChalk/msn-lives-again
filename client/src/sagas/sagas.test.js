import { expect } from 'chai';
import { call, put } from 'redux-saga/effects';

import { sendMessageAsync } from './sendMessageSaga.js';
import { receiveMessageAsync } from './receiveMessageSaga.js';
import { addContactAsync } from './addContactSaga.js';
import { loadDatabaseAsync } from './loadDatabaseSaga.js';

describe('sagas', () => {
  it('sendMessageAsync sends message asynchronously', () => {
    console.log(window.location.href);
    // const status = sendMessageAsync({
    //   type: 'SEND_MESSAGE',
    //   body: 'Hey',
    //   contact: '+1234567890'
    // });
    // // console.log(status.next());
    // expect(status.next().value).to.deep.equal(call(axios.post, window.location.origin + '/sms/outgoing', data);

    
    
  });
});
