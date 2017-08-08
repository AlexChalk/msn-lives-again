export const sendMessage = (body, to, from) => {
  // const axios = require('axios');
  // const data = {
  //   body: body,
  //   to: to,
  //   from: from,
  // };
  // let messageSid;
  // axios.post(window.location.origin + '/sms/outgoing', data)
  //   .then(function (response) {
  //     messageSid = response;
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  //  
  return {
    type: 'SEND_MESSAGE',
    body: body,
    from: from,
    // messageSid: messageSid,
    interlocutor: to,
  };
};

export const receiveMessage = (message, sender) => {
  return {
    type: 'RECEIVE_MESSAGE',
    message,
    sender
  };
};
