import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ interlocutor, body, timestamp, direction }) => (
  <div className={'well ' + direction} >
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
  direction: PropTypes.string.isRequired,
};

export default Message;
