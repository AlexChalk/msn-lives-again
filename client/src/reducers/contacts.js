const contacts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONTACT_SUCCESS':
      return [
        ...state,
        { 
          number: action.number,
        }];
    case 'LOAD_CONTACTS_SUCCESS':
      return(action.response);
    default:
      return state;
  }
};

export default contacts;
