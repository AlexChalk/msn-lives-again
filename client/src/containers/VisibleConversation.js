import { connect } from 'react-redux';
import ConversationWindow from '../components/ConversationWindow.js';

const getContactMessages = (messages, activeContact) => {
  return messages.filter(m => m.contact === activeContact);
};

const mapStateToProps = state => {
  return {
    messages: getContactMessages(state.messages, state.activeContact)
  };
};

const VisibleConversation = connect(
  mapStateToProps)(ConversationWindow);

export default VisibleConversation;
