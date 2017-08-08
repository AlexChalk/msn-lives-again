import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ interlocutor, body, timestamp }) => (
  <div className="well sent-message">
    <ul>
      <li>{body}</li>
      <li>{interlocutor}</li>
      <li>{timestamp}</li>
    </ul>
  </div>
);

Message.propTypes = {
  interlocutor: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired
};

export default Message;
