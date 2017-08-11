import React from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actions/actionCreators.js';
const phoneNumRegex = /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{9,14}/;

let AddContact = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form id="contactForm"
        onSubmit={e => {
          e.preventDefault();
          if (!phoneNumRegex.test(input.value)) {
            return;
          }
          dispatch(addContact(input.value));
          input.value = '';
        }}
      >
        <div className="form-group">
          <label>Enter Number</label>
          <input
            className="form-control" id="number"
            ref={node => {
              input = node;
            }}
          />
          <br />
          <button className="btn btn-primary" type="submit">
            Add Contact
          </button>
        </div>
      </form>
    </div>
  );
};

AddContact = connect()(AddContact);

export default AddContact;
