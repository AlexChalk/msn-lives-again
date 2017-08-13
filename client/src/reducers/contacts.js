const contacts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONTACT_SUCCESS':
      return [
        ...state,
        { 
          number: action.number,
        }];
    case 'RECEIVE_MESSAGE':
      if (!state.filter((obj) => { 
        return obj.number === action.contact; })[0]) {
        return [
          ...state,
          { 
            number: action.contact,
          }];
      } else {
        return state;
      }
    case 'LOAD_CONTACTS_SUCCESS':
      return(action.response);
    default:
      return state;
  }
};

export default contacts;
