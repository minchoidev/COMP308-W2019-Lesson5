let mongoose = require('mongoose');

// create a model class

let favouriteSchema = mongoose.Schema({
    name: String,
    description: String
},
{
    collection: "favourite-things"
});

module.exports = mongoose.model('test2', favouriteSchema);
