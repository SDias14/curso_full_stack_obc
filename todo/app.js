const express = require('express');

const checkListRouter = require('./src/routes/checklist');

const app = express();
app.use(express.json());

app.use('/cheklists',checkListRouter);


app.listen(3000, () => console.log('Listening on port 3000...'));
