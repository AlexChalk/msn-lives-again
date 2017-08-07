const messages = (state = [], action) => {
  console.log('The message will happen');
  console.log(state, action);
  return state;
};

export default messages;
