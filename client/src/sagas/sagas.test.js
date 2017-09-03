import { expect } from 'chai';
import axios from 'axios';
import { call, put } from 'redux-saga/effects';

import { sendMessageAsync } from './sendMessageSaga.js';
import { receiveMessageAsync } from './receiveMessageSaga.js';
import { addContactAsync } from './addContactSaga.js';
import { loadDatabaseAsync } from './loadDatabaseSaga.js';

describe('sagas', () => {

  describe('sendMessageAsync', () => {
    const data = {
      type: 'SEND_MESSAGE',
      body: 'Hey',
      contact: '+1234567890'
    };

    it('sendMessageAsync sends message asynchronously', () => {
      const status = sendMessageAsync(data);

      expect(status.next().value).to.deep.equal(
        call(axios.post, window.location.origin + '/sms/outgoing', 
          { body: 'Hey',
            to: '+1234567890',
            from: undefined }));

      // Arg to status.next mocks api response    
      expect(status.next({ data: { 
        contact: '+1234567890',
        messageSid: '1234ABCDE'} }).value).to.deep.equal(
          put({
            type: 'SEND_MESSAGE_SUCCESS', 
            body: 'Hey',
            contact: '+1234567890',
            messageSid: '1234ABCDE',
          }));

      expect(status.next()).to.deep.equal({ 
        done: true, 
        value: undefined });
    });

    it('sendMessageAsync returns error message on failure', () => {
      const status = sendMessageAsync(data);
      status.next();

      expect(status.throw('Missing message parameters').value)
        .to.deep.equal(
        put({
          type: 'SEND_MESSAGE_FAILURE',
          error: 'Missing message parameters'
        }));
    });

  });
});
