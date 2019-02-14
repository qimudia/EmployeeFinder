
module.exports = function (app){
const displayResult = function (data) {
// To display name and image
  $('#match-name').text(data.name);
  $('#match-image').attr('src', data.link);

  $('#results').modal('toggle');
};
displayResult();

/*$(function(){*/

const render = function (employeesArray, ) {
  for (let i = 0; i < employeesArray.length; i++) {
    $('#name').append(`<p>${employeesArray[i].name}</p>`);
    $('#link').append(`<p>${employeesArray[i].link}</p>`);
    $('#question1').append(`<p>${employeesArray[i].scores[0]}</p>`);
    $('#question2').append(`<p>${employeesArray[i].scores[1]}</p>`);
    $('#question3').append(`<p>${employeesArray[i].scores[2]}</p>`);
    $('#question4').append(`<p>${employeesArray[i].scores[3]}</p>`);
    $('#question5').append(`<p>${employeesArray[i].scores[4]}</p>`);
    $('#question6').append(`<p>${employeesArray[i].scores[5]}</p>`);
    $('#question7').append(`<p>${employeesArray[i].scores[6]}</p>`);
    $('#question8').append(`<p>${employeesArray[i].scores[7]}</p>`);
    $('#question9').append(`<p>${employeesArray[i].scores[8]}</p>`);
    $('#question10').append(`<p>${employeesArray[i].scores[9]}</p>`);

  }
}

const getemployees = function () {
  $.ajax({
    method: 'GET',
    url: 'api/employees'
  }).then(function (data) {
    render(data, $('.employees'));
  });
}

getemployees();

$('#clear').on('click', clearAll);
/*});*/


//Add employees function

/*$(function () {

  /**
   * Get the form info from the page.
   * Clear the form. 
   * Send the data in a POST request.
   */
const employeesInfo = function (event) {
  event.preventDefault();

  // Here we grab the form elements
  const userInfo = {
    name: $('#name').val().trim(),
    link: $('#link').val().trim(),
    scores: [
      $('#question1').val(),
      $('#question2').val(),
      $('#question3').val(),
      $('#question4').val(),
      $('#question5').val(),
      $('#question6').val(),
      $('#question7').val(),
      $('#question8').val(),
      $('#question9').val(),
      $('#question10').val()
    ]
  };
  $.ajax({
    method: 'POST',
    url: 'api/employees',
    data: userInfo
  })
  // Clear the form after submitting

  $('#name').val('');
  $('#link').val('');
  $('#question1').val(''),
    $('#question2').val(''),
    $('#question3').val(''),
    $('#question4').val(''),
    $('#question5').val(''),
    $('#question6').val(''),
    $('#question7').val(''),
    $('#question8').val(''),
    $('#question9').val(''),
    $('#question10').val('')

    const checkForm = function(form){
    // validation fails if the input is blank
    if(form.inputfield.value == "") {
      alert("Error: 'Please fill out all fields before submitting!");
      form.inputfield.focus();
      return false;
   }
    checkForm();

  render();
}

$('#submit').on('click', employeesInfo)
/*});*/
};

};