import React from 'react';
import { Link } from 'react-router-dom';
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
        <div className="well-sm new-conversation" >
          <Link to="/">New Conversation</Link>
        </div>
    </div>
  </div>
);

export default ContactsWindow;
