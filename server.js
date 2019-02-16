//require dependencies
const express = require('express');
const path = require('path');
const employees = require('./app/data/employees.js');
//const employeesInfo = require('./app/public/js/survey.js');

//creating a server
const app = express();

// Set PORT to 8080
const PORT = 8080;

// Sets up our server to parse our request body for usage
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets our server to use the public directory for static assets
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// -----------------

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// Starts the server...
app.listen(PORT, function(){
    console.log(`Server is listening on PORT: ${PORT}`);
});

