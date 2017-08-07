import React, { Component } from 'react';

class ConversationWindow extends Component {
  render() {
    return (
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
  }

}

export default ConversationWindow;
