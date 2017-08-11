const contacts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONTACT_SUCCESS':
      return [
        ...state,
        { number: action.number,
        }];
    default:
      return state;
  }
};

export default contacts;
