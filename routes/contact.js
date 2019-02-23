let express = require('express');
let router = express.Router();

// create a reference to the db schema
let contactModel = require('../models/contact');

/* GET Contact List page - READ Operation */
router.get('/', (req, res, next) => {        // if it has a param after '/', it would be like 'http://localhost:3000/contact-list/param'
    contactModel.find((err, contactList) => {
        if (err) {
            return console.error(err);
        }
        else {
            // console.log(contactList);

            res.render('contacts/index', {
                title: 'Contact List',
                contactList: contactList
            });

        }
    });
});

/* GET Route for the Add page 
   this will display the Add page */
router.get('/add', (req, res, next) => {
    res.render('contacts/add', {
        title: 'Add New Contact'
    });
});

/* POST Route for processing the Add page */
router.post('/add', (req, res, next) => {
    console.log(req.body);  // display values


    
    let newContact = contactModel({
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "age": req.body.age
    });

    contactModel.create(newContact, (err, contactModel) => {
        if(err) {               // 500 error
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the contact list
            res.redirect('/contact-list');
        }
    });


});


module.exports = router;