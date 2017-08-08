import { connect } from 'react-redux';
import { receive } from '../actions/actionCreators.js';
import ConversationWindow from '../components/ConversationWindow.js';

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onWindowClick: id => {
      dispatch(receive(id));
    }
  };
};

const VisibleConversations = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationWindow);

export default VisibleConversations;
