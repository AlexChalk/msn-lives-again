const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactDataSchema = new Schema({
  number: { type: String, required: true, unique: true, },
});

const ContactData = mongoose.model('ContactData', contactDataSchema);

exports.loadAll = (req, res) => {
  ContactData.find()
    .then(contactData => res.status(201).send(contactData))
    .catch(error => res.status(400).send(error));
};

exports.saveNew = (req, res) => {
  ContactData.find({ number: req.body.number }, (err, docs) => {
    if (docs.length){
      return res.status(400).send('Contact already exists');
    } else {
      const contactData = new ContactData({
        number: req.body.number, });
      contactData.save();
      res.status(200).send(contactData);
    }
  });
};
