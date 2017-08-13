const messages = (state = [], action) => {
  switch (action.type) {
    case 'SEND_MESSAGE_SUCCESS':
      return [
        ...state,
        { contact: action.contact,
          messageSid: action.messageSid,
          direction: 'outgoing',
          timestamp: new Date().toString(),
          body: action.body,
        }];
    case 'RECEIVE_MESSAGE':
      return [
        ...state,
        { contact: action.contact,
          messageSid: action.messageSid,
          direction: 'incoming',
          timestamp: new Date().toString(),
          body: action.body,
        }];
    case 'LOAD_MESSAGES_SUCCESS':
      return(action.response);
    default:
      return state;
  }
};

export default messages;
