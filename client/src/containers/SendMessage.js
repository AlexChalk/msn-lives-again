import React from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../actions/actionCreators.js';

let SendMessage = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form id="messageForm"
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(sendMessage(input.value, '+15145495327', '+15146137491'));
          input.value = '';
        }}
      >
        <div className="form-group">
          <label>Enter Message</label>
          <input
            className="form-control" id="message"
            ref={node => {
              input = node;
            }}
          />
          <br />
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

SendMessage = connect()(SendMessage);

export default SendMessage;
