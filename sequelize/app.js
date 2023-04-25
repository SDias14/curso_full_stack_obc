const express = require('express');

const routes = require('./routes/routes');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// associating models
require('./config/associations');


const app = express();

app.use(express.json());
app.use(routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(3000 , () => {
    console.log('Server is running on port 3000');

});





