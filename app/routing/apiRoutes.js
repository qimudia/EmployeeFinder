

let employeesList = require('../data/employees.js');

module.exports = function (app) {


// GET method route
app.get('/api/employees', function (req, res) {
  res.json(employeesList);
  });
  
  // POST method route
  app.post('/api/employees', function (req, res) {
    employeesList.push(req.body); 

    
    res.end();
    //res.sendFile('POST request to the homepage')
  });


     /**
   * If there are fewer than 5 reservations, add the new reservation to the tablelist
   * Otherwise add the new reservation to the waitlist
   */
  /*app.post('/api/tables', function (req, res) {
    if (tableList.length < 5) {
      tableList.push(req.body); 
    } else {
      waitingList.push(req.body);
    }

    res.end();
  });*/
}

