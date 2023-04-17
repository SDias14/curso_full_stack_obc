// Description: This file contains the routes for the checklist
// Import express
const express = require('express');
// this is the router object coming from express. It is used to define routes
const router = express.Router();

//checklist model coming from the model file. This is the model that will be used to create the checklist
const Checklist = require('../model/checklist');

// this route will render the index page of the checklist with all the checklists
router.get('/', async (request, response) => { 
   try{
      let checklists = await Checklist.find({});
      //this checklists variable will be passed to the index.ejs file. How ? The index.ejs file is rendered and the checklists variable is passed to it. The checklists variable is then used in the index.ejs file to display the checklists.the variable contains the checklists that are returned from the database. The checklists are returned from the database as an array of objects. Each object represents a checklist. format: [{name: 'checklist1', _id: '1234567890'}, {name: 'checklist2', _id: '0987654321'}]
      response.status(200).render('checklists/index', {checklists: checklists})
   }catch(error){
    response.status(400).render('pages/error', {error:'Error rendering the page'});
   }
   
});

// this route will render the new checklist page
router.get('/new', async (request, response) => {
    try{
       let checklist = new Checklist(); // receiving an empty checklist object coming from the model
        response.status(200).render('checklists/new', {checklist: checklist})//this is going to render the new.ejs file. The new.ejs file is rendered and the checklist variable is passed to it. The checklist variable is then used in the new.ejs file to be inserted in the form and then sent to the server. The checklist variable will receive a new checklist object coming from the model. The checklist object will be created when the form is submitted
    }catch(error){
        response.status(500).render('pages/error', {error:'Error rendering the page'});
    }
});
// route to edit a checklist. This route will render the edit page of the checklist receiving the id of the checklist as a parameter. The id of the checklist is passed in the url coming from the index.ejs file
router.get('/:id/edit', async (request, response) => {
    try{
        let checklist = await Checklist.findById(request.params.id);
        response.status(200).render('checklists/edit', {checklist: checklist})
    }catch(error){
        response.status(500).render('pages/error', {error:'Error rendering the update page'});
    }

});

// route to create a new checklist
router.post('/', async(request, response) => {
    // receiving the name of the checklist from the form. The name of the checklist is passed in the body of the request
    let {name} = request.body.checklist;
    // creating a new checklist object coming from the model. The name of the checklist is passed to the constructor
    let checklist = new Checklist({name});  
    try{
        await checklist.save(); // saving the checklist to the database
        response.redirect('/checklists'); // redirecting to the index page of the checklist
    }catch(error){
        response.status(422).render('checklists/new', {checklist: {checklist, error}});
    }   
});
    
  // route to show a single checklist  
router.get('/:id', async (request, response) => {
    try{
     let checklist = await Checklist.findById(request.params.id);
     response.status(200).render('checklists/show', {checklist: checklist})// returning the checklist object to the show.ejs file. How ? The show.ejs file is rendered and the checklist variable is passed to it. The checklist variable is then used in the show.ejs file to display the checklist. The checklist variable contains the checklist that is returned from the database. The checklist is returned from the database as an object. format: {name: 'checklist1', _id: '1234567890'} to show the specific checklist, the id of the checklist is passed in the url. The id is passed as a parameter in the url. The id is then used to find the checklist in the database. The checklist is then returned from the database and passed to the show.ejs file
    }catch(error){
        response.status(500).render('pages/error', {error:'Error rendering the page'});
    }
   
    
    
    
    
});

// route to update a checklist. This route will update the checklist receiving the id of the checklist as a parameter. The id of the checklist is passed in the url coming from the index.ejs file and when the edit button is clicked the id of the checklist is passed in the url to this route
router.put('/:id', async (request, response) => {
    let {name} = request.body.checklist; // receiving the name of the checklist from the form. The name of the checklist is passed in the body of the request
    let checklist =await Checklist.findById(request.params.id); // finding the checklist in the database using the id of the checklist
    try{
        await checklist.updateOne({name});// updating the checklist in the database
        response.redirect('/checklists');// redirecting to the index page of the checklist
    }catch(error){
       let errors = error.errors;
         response.status(422).render('checklists/edit', {checklist:{...checklist, errors}});
    }

});
// route to delete a checklist. This route will delete the checklist receiving the id of the checklist as a parameter. The id of the checklist is passed in the url coming from the index.ejs file and when the delete button is clicked the id of the checklist is passed in the url to this route. this route does not render a page. It just deletes the checklist from the database and redirects to the index page of the checklist.
router.delete('/:id', async (request, response) => {
    try{
        let checklist = await Checklist.findByIdAndDelete(request.params.id);
        response.redirect('/checklists');
    }catch(error){
        response.status(500).render('pages/error', {error:'Error rendering the page delete'});
    }
});


module.exports = router;



