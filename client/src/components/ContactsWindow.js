import React from 'react';
import Contact from './Contact.js';

const ContactsWindow = ({ contacts }) => ( 
  <div className="col-md-4">
    <div className="well" id="contacts">
      <h3>Contacts</h3>
        {contacts.map(contact => (
          <Contact key={contact.number} {...contact} />
        ))}
    </div>
  </div>
);

export default ContactsWindow;
