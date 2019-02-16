const displayResult = function(data) {
  // To display name and image
  $("#match-name").text(data.name);
  $("#match-image").attr("src", data.link);

  $("#results").modal("toggle");
};
displayResult();

$(function() {
  const render = function(employeesArray, parent) {
    for (let i = 0; i < employeesArray.length; i++) {
      const employeesSurvey = $("<div>").addClass("box");
      employeesSurvey.append(`<p>${employeesArray[i].name}</p>`);
      employeesSurvey.append(`<p>${employeesArray[i].link}</p>`);
      employeesSurvey.append(`<p>${employeesArray[i].scores[0]}</p>`);
      employeesSurvey.append(`<p>${employeesArray[i].scores[1]}</p>`);
      employeesSurvey.append(`<p>${employeesArray[i].scores[2]}</p>`);
      employeesSurvey.append(`<p>${employeesArray[i].scores[3]}</p>`);
      employeesSurvey.append(`<p>${employeesArray[i].scores[4]}</p>`);
      employeesSurvey.append(`<p>${employeesArray[i].scores[5]}</p>`);
      employeesSurvey.append(`<p>${employeesArray[i].scores[6]}</p>`);
      employeesSurvey.append(`<p>${employeesArray[i].scores[7]}</p>`);
      employeesSurvey.append(`<p>${employeesArray[i].scores[8]}</p>`);
      employeesSurvey.append(`<p>${employeesArray[i].scores[9]}</p>`);

      parent.append(employeesSurvey);
    }
  };

  const getemployees = function() {
    $.ajax({
      method: "GET",
      url: "api/employees"
    }).then(function(data) {
      render(data, $(".employees"));
    });
  };

  getemployees();

  $("#clear").on("click", clearAll);
});

//Add employees function

$(function() {
  console.log("aaaaaaa SURVEY SURVEY SURVEY SEUSDSDSD");
  const employeesInfo = function(event) {
    event.preventDefault();

    console.log("SURVEY SURVEY SURVEY SEUSDSDSD");
    // Here we grab the form elements
    const userInfo = {
      name: $("#name")
        .val()
        .trim(),
      link: $("#link")
        .val()
        .trim(),
      scores: [
        $("#question1").val(),
        $("#question2").val(),
        $("#question3").val(),
        $("#question4").val(),
        $("#question5").val(),
        $("#question6").val(),
        $("#question7").val(),
        $("#question8").val(),
        $("#question9").val(),
        $("#question10").val()
      ]
    };
    /*
function difference(scores1, scores2) {
      return Math.abs(scores1 - scores2);
} 
const scores1 = ["1", "2", "3", "4", "5", "12"];
var scores2 = ["4", "8", "15", "16", "23", "42", "12"];

for (var i = 0; i < scores2.length; i++) {
    for (var j = 0; j < scores1.length; j++) {
        if (scores2[i] == scores1[j]) {
          $('div:contains("'+scores1[j]+'")').append("<div class='assignment'>"+scores2[i]+" - appended</div>");
        }
    }
} 
*/
    // Clear the form after submitting

    $("#name").val("");
    $("#link").val("");
    $("#question1").val("");
    $("#question2").val("");
    $("#question3").val("");
    $("#question4").val("");
    $("#question5").val("");
    $("#question6").val("");
    $("#question7").val("");
    $("#question8").val("");
    $("#question9").val("");
    $("#question10").val("");

    $.ajax({
      method: "POST",
      url: "api/employees",
      data: userInfo
    });
    render();
  };
 
  $("#submit").on("click", employeesInfo);
});
