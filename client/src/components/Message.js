import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ contact, body, timestamp, direction }) => (
  <div className={'well ' + direction} >
    <ul>
      <li>{body}</li>
      <li>{contact}</li>
      <li>{timestamp.toLocaleString()}</li>
    </ul>
  </div>
);

Message.propTypes = {
  contact: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.instanceOf(Date).isRequired,
  direction: PropTypes.string.isRequired,
};

export default Message;
