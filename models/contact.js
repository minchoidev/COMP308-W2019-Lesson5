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

module.exports = mongoose.model('test', contactSchema);