import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Contact = ({ number, setActiveContact }) => (
  <div onClick={() => setActiveContact(number)}
    className="well-sm contact" id={number}>
    <Link to={'/conversations/' + number}>{number}</Link>
  </div>
);

Contact.propTypes = {
  number: PropTypes.string.isRequired,
  setActiveContact: PropTypes.func.isRequired,
};

export default Contact;
