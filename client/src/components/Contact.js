import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Contact = ({ number }) => (
  <div className="well-sm contact" >
    <Link to={'/conversations/' + number.slice(1)}>{number}</Link>
  </div>
);

Contact.propTypes = {
  number: PropTypes.string.isRequired,
};

export default Contact;
