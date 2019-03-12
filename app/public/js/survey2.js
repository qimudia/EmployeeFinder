$(function(){
    const render = function(dataList, parent) {
      for (let i = 0; i < dataList.length; i++) {
        const employees = $('<div>').addClass('box');
        employees.append(`<h3>${dataList[i].name}</h3>`);
        employees.append(`<p>${dataList[i].link}</p>`);
        employees.append(`<p>${dataList[i].scores[0]}</p>`);
        employees.append(`<p>${dataList[i].scores[1]}</p>`);
        employees.append(`<p>${dataList[i].scores[2]}</p>`);
        employees.append(`<p>${dataList[i].scores[3]}</p>`);
        employees.append(`<p>${dataList[i].scores[4]}</p>`);
        employees.append(`<p>${dataList[i].scores[5]}</p>`);
        employees.append(`<p>${dataList[i].scores[6]}</p>`);
        employees.append(`<p>${dataList[i].scores[7]}</p>`);
        employees.append(`<p>${dataList[i].scores[8]}</p>`);
        employees.append(`<p>${dataList[i].scores[9]}</p>`);
        
        parent.append(employees)
    }
   }
  
    const getEmployees = function(){
       $.ajax({
         method: 'GET',
         url:'/api/employees'
        }).then(function(data){
          render(data, $('.employees'));
        });
      }
      getEmployees();
       
  //Add employees function
   const employeesInfo = function(event) {
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

      // Clear the form after submitting
  
      $('#name').val('');
      $('#link').val('');
      $('#question1').val('');
      $('#question2').val('');
      $('#question3').val('');
      $('#question4').val('');
      $('#question5').val('');
      $('#question6').val('');
      $('#question7').val('');
      $('#question8').val('');
      $('#question9').val('');
      $('#question10').val('');


      $.ajax({
        method: 'POST',
        url: 'api/employees',
        data: userInfo
      }).then(function(data){
        window.alert("We have got a match: " + data.name + ",  "+ data.link) 
      });
      
    }

  
  
    $('#submit').on('click', employeesInfo); 
});
    
        
  
      

