import { connect } from 'react-redux';
import MessageWindow from '../components/MessageWindow.js';

const getContactMessages = (messages, activeContact) => {
  return messages.filter(m => m.contact === activeContact);
};

const mapStateToProps = state => {
  return {
    messages: getContactMessages(state.messages, state.activeContact)
  };
};

const MessageWindowContainer = connect(
  mapStateToProps)(MessageWindow);

export default MessageWindowContainer;
