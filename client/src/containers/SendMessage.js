import React from 'react';

const SendMessage = ({ sendMessage, activeContact }) => {
  let input;
  return (
    <div>
      <form id="messageForm"
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          sendMessage(input.value, activeContact);
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


export default SendMessage;
