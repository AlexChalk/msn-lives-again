import React from 'react';
import SendMessage from '../containers/SendMessage.js';
import Message from './Message.js';

const ConversationWindow = ({ messages }) => ( 
  <div className="col-md-8">
    <div className="chat" id="chat"></div>
    <div id="messages" >
      {messages.map(message => (
        <Message {...message} />
      ))}
    </div>
    <SendMessage />
  </div>
);

export default ConversationWindow;
