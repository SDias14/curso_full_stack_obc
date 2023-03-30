const express = require('express');
const path = require('path');

const checkListRouter = require('./src/routes/checklist');
const rootRouter = require('./src/routes/index');

require('./config/database')

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public'))); // static files

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use('/', rootRouter);
app.use('/checklists',checkListRouter);


app.listen(3000, () => console.log('Listening on port 3000...'));
