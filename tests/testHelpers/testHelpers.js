exports.addContact = (browser, number) => {
  browser
    .url('http:/localhost:3000')
    .waitForElementVisible('body', 1000)
    .setValue('input[id=number]', number)
    .click('#contactForm button')
    .pause(1000);
};
