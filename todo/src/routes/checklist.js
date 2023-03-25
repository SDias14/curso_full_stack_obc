const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
    console.log('checklist');
    response.send('My todo app');
});

router.get('/:id', (request, response) => {
   const id = request.params.id;
    
    console.log(id);
    
    response.send('the id is: ' + id);
});

router.post('/', (request, response) => {
    console.log(request.body);
    response.status(201).json(request.body);
});

router.put('/:id', (request, response) => {
    const id = request.params.id;
    console.log(id);
    console.log(request.body);
    response.status(200).json(request.body);
});

router.delete('/:id', (request, response) => {
    const id = request.params.id;
    console.log(id);
    response.send('Deleted id: ' + id);
});


module.exports = router;

