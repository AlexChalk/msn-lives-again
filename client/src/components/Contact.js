import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Contact = ({ number }) => (
  <div className="well-sm contact" id={number}>
    <Link to={'/conversations/' + number}>{number}</Link>
  </div>
);

Contact.propTypes = {
  number: PropTypes.string.isRequired,
};

export default Contact;
