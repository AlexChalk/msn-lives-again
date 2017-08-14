import { connect } from 'react-redux';
import { sendMessage } from '../actions/actionCreators.js';
import SendMessage from '../components/SendMessage.js';

const mapStateToProps = state => {
  return {
    activeContact: state.activeContact
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: (body, to) => {
      dispatch(sendMessage(body, to));
    }
  };
};

const SendMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SendMessage);

export default SendMessageContainer;
