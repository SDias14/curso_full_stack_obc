// Description: This file contains the routes for the index page
// Import express
const express = require('express');

// this is the router object coming from express. It is used to define routes
const router = express.Router();

// this is the controller object coming from the controller file
// the controller file contains the functions that will be called when a route is hit Get is the function that will be called when a GET request is made to the route
router.get('/', async (req, res) => {
    res.render('pages/index');
});
//in order to use this router in other files, we need to export it. This module is imported in the app.js file
module.exports = router;