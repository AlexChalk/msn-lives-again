# Twilio Messenger

An instant messaging application built to manage Twilio-based SMS communications. MERN stack, with Redux used to manage application state.

![screenshot of app](http://i.imgur.com/xiJaSKH.png)

## Use Notes

Contact numbers must be added in international format with a leading `+`, otherwise they will not be accepted.

## Setup

This guide assumes a UNIX operating system, a working installation of node, a running mongodb server at `localhost:27017`, and a Twilio account with an SMS-enabled number:

### Local Setup

* Clone repo: `git clone git@github.com:adc17/msn-lives-again.git`
* Install dependencies: `cd msn-lives-again && npm i && cd client && npm i && cd ..`


* Set three environmental variables: `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, and `TWILIO_PHONE_NUMBER`. If you are using bash, set them in `~/.bash_profile`; if you are using zshell set them in `~/.zshenv`. The format is this: `export TWILIO_ACCOUNT_SID=XXXXXXXXX`. Remember to restart your shell once you're done.
* Host project: `npm run start-servers`.

### Ngrok

* At the moment, you can send messages, but you will not see your recipients' replies. To receive them you must expose your local server to the web, which you can do using ngrok: `brew install ngrok`.

* Run `ngrok http 3000` and copy the forwarding address to your clipboard.

  ![ngrok-address-location](http://i.imgur.com/BJLDsJ4.png)

* Head to https://www.twilio.com/console/phone-numbers/ and find the number you chose as your `TWILIO_PHONE_NUMBER`. Click on it and scroll down. In the 'Messages' section, enter `your-ngrok-forwarding-address/sms/incoming`.

  ![twilio-message-setup](http://i.imgur.com/7QQeWjM.png)

You should now be up and running.

## Tests

1. Set a variable that tells the app to use a testing database: `export MONGODB_URI=mongodb://localhost:27017/twilio-messenger-test`.
2. Boot servers: `npm run start-servers`.
3. Run tests: `npm run e2e-tests`. n.b. This will download and boot selenium webserver on your machine—if you already have an instance of selenium webserver running, instead use `npm run e2e-tests --no-selenium-setup`.
4. Clean e2e testing database: `npm run drop-test-db`.
5. Switch back to the development databse: `unset MONGODB_URI`.

## Why is there no controller directory on the backend?

Since the application's API is comprised of only five routes at present, I don't think the time is right to split the root methods into separate controller files. The routes file is currently <50 lines of code, and I think that's modular enough for now. But as the application grows, this is a change I will definitely implement.