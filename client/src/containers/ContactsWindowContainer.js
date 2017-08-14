import { connect } from 'react-redux';
import { setActiveContact } from '../actions/actionCreators.js';
import ContactsWindow from '../components/ContactsWindow.js';

const mapStateToProps = state => {
  return {
    contacts: state.contacts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setActiveContact: id => {
      dispatch(setActiveContact(id));
    }
  };
};

const ContactsWindowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsWindow);

export default ContactsWindowContainer;
