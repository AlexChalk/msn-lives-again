export const send = (message, receiver) => {
  return {
    type: 'SEND_MESSAGE',
    message,
    receiver
  };
};

export const receive = (message, sender) => {
  return {
    type: 'RECEIVE_MESSAGE',
    message,
    sender
  };
};
