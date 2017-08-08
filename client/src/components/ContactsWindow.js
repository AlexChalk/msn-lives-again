import React from 'react';
import PropTypes from 'prop-types';

const ContactsWindow = ({ contacts }) => ( 
  <div className="col-md-4">
    <div className="well">
      <h3>Contacts</h3>
      <ul className="list-group" id="users"></ul>
    </div>
  </div>
);

// ContactsWindow.propTypes = {
//   contacts: PropTypes.array.isRequired
// };

export default ContactsWindow;
