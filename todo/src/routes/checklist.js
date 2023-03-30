const express = require('express');

const router = express.Router();

const Checklist = require('../model/checklist');

router.get('/', async (request, response) => {
   try{
      let checklists = await Checklist.find({});
      response.status(200).render('checklists/index', {checklists: checklists})
   }catch(error){
    response.status(400).render('pages/error', {error:'Error rendering the page'});
   }
   
});


router.get('/new', async (request, response) => {
    try{
       let checklist = new Checklist();
         response.status(200).render('checklists/new', {checklist: checklist})
    }catch(error){
        response.status(400).render('pages/error', {error:'Error rendering the page'});
    }
});


router.post('/', async(request, response) => {
    let {name} = request.body.checklist;
    let checklist = new Checklist({name});
    
    try{
        await Checklist.save();
        response.redirect('/checklists');
    }catch(error){
        response.status(500).render('pages/error', {error:'Error creating the checklist'});
    }   
});
    
    
router.get('/:id', async (request, response) => {
    try{
     let checklist = await Checklist.findById(request.params.id);
     response.status(200).render('checklists/show', {checklist: checklist})
    }catch(error){
        response.status(500).render('pages/error', {error:'Error rendering the page'});
    }
   
    
    
    
    
});


router.put('/:id', async (request, response) => {
    let {name} = request.body;
    try{
        let checklist = await Checklist.findByIdAndUpdate(request.params.id, {name}, {new: true});
        response.status(200).json(checklist);
    }catch(error){
        response.status(422).json(error);
    }

});

router.delete('/:id', async (request, response) => {
    try{
        let checklist = await Checklist.findByIdAndDelete(request.params.id);
        response.status(200).json(checklist);
    }catch(error){
        response.status(422).json(error);
    }
});


module.exports = router;

