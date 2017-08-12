const contacts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONTACT_SUCCESS':
      return [
        ...state,
        { 
          number: action.number,
        }];
    case 'RECEIVE_MESSAGE':
      if (!state.includes({number: action.contact})) {
        return [
          ...state,
          { 
            number: action.contact,
          }];
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default contacts;
