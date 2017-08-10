const messages = (state = [], action) => {
  switch (action.type) {
    case 'SEND_MESSAGE_SUCCESS':
      return [
        ...state,
        { interlocutor: action.interlocutor,
          messageSid: action.messageSid,
          timestamp: new Date(),
          body: action.body,
        }];
    default:
      return state;
  }
};

export default messages;
