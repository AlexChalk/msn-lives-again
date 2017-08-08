import React from 'react';
import PropTypes from 'prop-types';

const ConversationWindow = ({ messages, onWindowClick }) => ( 
  <div className="col-md-8">
    <div className="chat" id="chat"></div>
    <form id="messageForm">
      <div className="form-group">
        <label>Enter Message</label>
        <textarea className="form-control" id="message"></textarea>
        <br />
        <input type="submit" className="btn btn-primary" 
          value="Send Message" /> 
      </div>
    </form>
  </div>
);

// ConversationWindow.propTypes = {
//   messages: PropTypes.array.isRequired,
//   onWindowClick: PropTypes.func.isRequired
// };

export default ConversationWindow;
