export const sendMessage = (body, to) => {
  return {
    type: 'SEND_MESSAGE',
    body: body,
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

export const setActiveContact = (number) => {
  return {
    type: 'SET_ACTIVE_CONTACT',
    number,
  };
};
