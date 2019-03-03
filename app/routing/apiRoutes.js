

let employeesList = require('../data/employees.js');

module.exports = function (app) {


// GET method route
app.get('/api/employees', function (req, res) {
  res.json(employeesList);
  });
  
  // POST method route
  app.post('/api/employees', function (req, res) {
    if (employeesList.length < 10){
      employeesList.push(req.body);
    }
    res.end();
  });

  
    
}


