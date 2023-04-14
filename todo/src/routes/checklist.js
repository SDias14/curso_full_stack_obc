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

// route to render the new checklist form
router.get('/new', async (request, response) => {
    try{
       let checklist = new Checklist();
        response.status(200).render('checklists/new', {checklist: checklist})
    }catch(error){
        response.status(500).render('pages/error', {error:'Error rendering the page'});
    }
});

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
    let {name} = request.body.checklist;
    let checklist = new Checklist({name});  
    try{
        await checklist.save();
        response.redirect('/checklists');
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


router.put('/:id', async (request, response) => {
    let {name} = request.body.checklist;
    let checklist =await Checklist.findById(request.params.id);
    try{
        await checklist.updateOne({name});
        response.redirect('/checklists');
    }catch(error){
       let errors = error.errors;
         response.status(422).render('checklists/edit', {checklist:{...checklist, errors}});
    }

});

router.delete('/:id', async (request, response) => {
    try{
        let checklist = await Checklist.findByIdAndDelete(request.params.id);
        response.redirect('/checklists');
    }catch(error){
        response.status(500).render('pages/error', {error:'Error rendering the page delete'});
    }
});


module.exports = router;



