import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ interlocutor, body, timestamp, messageSid }) => (
  <div className="well sent-message" key={messageSid} >
    <ul>
      <li>{body}</li>
      <li>{interlocutor}</li>
      <li>{timestamp.toLocaleString()}</li>
    </ul>
  </div>
);

Message.propTypes = {
  interlocutor: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.instanceOf(Date).isRequired,
  messageSid: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};

export default Message;
