import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ body, timestamp, direction }) => (
  <div className={'well ' + direction} >
    <ul>
      <li>{body}</li>
      <li>{new Date(timestamp).toLocaleString()}</li>
    </ul>
  </div>
);

Message.propTypes = {
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
};

export default Message;
