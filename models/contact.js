let mongoose = require('mongoose');

// create a model class

let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
},
{
    collection: "contacts"
});

module.exports = mongoose.model('contact', contactSchema); // model name and model schema