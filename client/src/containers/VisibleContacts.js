import { connect } from 'react-redux';
import { receive } from '../actions/actionCreators.js';
import ContactsWindow from '../components/ContactsWindow.js';

const mapStateToProps = state => {
  return {
    contacts: state.contacts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onWindowClick: id => {
      dispatch(receive(id));
    }
  };
};

const VisibleContacts = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsWindow);

export default VisibleContacts;
