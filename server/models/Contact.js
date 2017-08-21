const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const contactDataSchema = new Schema({
  number: { type: String, required: true, unique: true, },
});

const ContactData = mongoose.model('ContactData', contactDataSchema);

exports.loadAll = () => {
  return new Promise((resolve, reject) => {
    ContactData.find()
      .then(contactData => resolve(contactData))
      .catch(() => reject('Contact load failed.'));
  });
};

exports.saveNew = (req) => {
  return new Promise((resolve, reject) => {
    ContactData.find({ number: req.body.number }, (err, docs) => {
      if (docs.length){
        reject('Contact already exists');
      } else {
        const contactData = new ContactData({
          number: req.body.number, });
        contactData.save();
        resolve(contactData);
      }
    });
  });
};
