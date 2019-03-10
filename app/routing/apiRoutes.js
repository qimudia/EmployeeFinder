let employeesList = require("../data/employees.js");

module.exports = function(app) {
  // GET method route
  app.get("/api/employees", function(req, res) {
    res.json(employeesList);
  });

   app.post("/api/employees", function(req, res) {
    employeesList.push(req.body);
    //compare this users record survey to existing surveys
 
    let userSurvey = req.body;
    employeesList.push(req.body);
    //console.log(userSurvey);

    let matchingUser = employeesList[0];
    let minDiff = 0; //current value of the minimum difference
    let thisSum = 0;
    let cnt = 0;
    for (let i = 0; i < employeesList.length; i++) {
      let empSurvey = employeesList[i];
      for (j = 0; j < empSurvey.scores.length; j++) {
        thisSum += Math.abs(empSurvey.scores[j] - Number(userSurvey.scores[j]));
      }
      if (cnt === 0) {
        minDiff = thisSum;
        matchingUser = employeesList[i];
        cnt++;
      } else if (thisSum > minDiff ) {
          minDiff = thisSum;
          matchingUser = employeesList[i];
      }
    }
    console.log(matchingUser);
    res.json(matchingUser);
    //res.sendFile('POST request to the homepage')
  });
};
