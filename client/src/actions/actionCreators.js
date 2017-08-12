export const sendMessage = (body, to, from) => {
  return {
    type: 'SEND_MESSAGE',
    body: body,
    from: from,
    contact: to,
  };
};

export const receiveMessage = (message, sender) => {
  return {
    type: 'RECEIVE_MESSAGE',
    message,
    sender
  };
};

export const addContact = (number) => {
  return {
    type: 'ADD_CONTACT',
    number
  };
};

export const loadDatabase = () => {
  return {
    type: 'LOAD_DATABASE',
  };
};
