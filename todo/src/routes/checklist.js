const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
    console.log('checklist');
    response.send('My todo app');
});

module.exports = router;

