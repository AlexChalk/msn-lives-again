import React, { Component } from 'react';

class ContactsWindow extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="well">
          <h3>Contacts</h3>
          <ul className="list-group" id="users"></ul>
        </div>
      </div>
    );
  }

}

export default ContactsWindow;
