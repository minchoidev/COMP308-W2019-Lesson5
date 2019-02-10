let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the db schema
let favourite = require('../models/favourite');

/* GET Favourite List page - READ Operation */
router.get('/', (req, res, next) =>{
    favourite.find((err, favouriteList) => {
        if(err) {
            return console.error(err);
        }
        else {
           // console.log(favouriteList);

            res.render('favourites/index', {
                title: 'Favourite List',
                favouriteList: favouriteList
            });
            
        }
    });
});

module.exports = router;