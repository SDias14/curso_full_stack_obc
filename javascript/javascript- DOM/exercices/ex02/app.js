const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const name = req.query.name;

    res.send(`<h1>Hello ${name}!</h1>`);
});

app.listen(3000, () => {
    console.log('Server is running port 3000!');
});