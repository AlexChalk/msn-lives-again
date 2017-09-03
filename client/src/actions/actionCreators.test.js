import { expect } from 'chai';
import * as actions from './actionCreators.js';

describe('actions', () => {
  it('sendMessage returns sendMessage action', () => {

    const result = actions.sendMessage('Hey', '+1234567890');

    expect(result).to.deep.equal({
      type: 'SEND_MESSAGE',
      body: 'Hey',
      contact: '+1234567890'
    });

  });

  it('receiveMessage returns receiveMessage action', () => {

    const result = actions.receiveMessage('Hey', '+1234567890');

    expect(result).to.deep.equal({
      type: 'RECEIVE_MESSAGE',
      message: 'Hey',
      sender: '+1234567890'
    });

  });

  it('addContact returns addContact action', () => {

    const result = actions.addContact('+1234567890');

    expect(result).to.deep.equal({
      type: 'ADD_CONTACT',
      number: '+1234567890'
    });

  });

  it('loadDatabase returns loadDatabase action', () => {

    const result = actions.loadDatabase();

    expect(result).to.deep.equal({
      type: 'LOAD_DATABASE'
    });

  });

  it('setActiveContact returns setActiveContact action', () => {

    const result = actions.setActiveContact('+1234567890');

    expect(result).to.deep.equal({
      type: 'SET_ACTIVE_CONTACT',
      number: '+1234567890'
    });

  });

});
