import React from 'react';
import Contact from './Contact.js';

const ContactsWindow = ({ contacts, setActiveContact }) => ( 
  <div className="col-md-4">
    <div className="well" id="contacts">
      <h3>Contacts</h3>
        {contacts.map(contact => (
          <Contact key={contact.number} 
            setActiveContact={setActiveContact} 
            {...contact}/>
        ))}
    </div>
  </div>
);

export default ContactsWindow;
