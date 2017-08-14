import React from 'react';
import SendMessageContainer from '../containers/SendMessageContainer.js';
import Message from './Message.js';

function MessageWindow({ messages }) {
  return (
    <div className="col-md-8">
      <div className="chat" id="chat"></div>
      <div id="messages" >
        {messages.map(message => (
          <Message key={message.messageSid} {...message} />
        ))}
      </div>
      <SendMessageContainer />
    </div>
  );
}

export default MessageWindow;
