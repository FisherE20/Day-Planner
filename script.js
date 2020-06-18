$(document).ready(function () {

let date = moment().format("MMMM Do YYYY, h:mm:ss a");
let getHours = moment().format("H");

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
$("#currentDay").append(date);

  // WHEN I click the save button for that timeblock
  // THEN the text for that event is saved in local storage

   $("#btn1").on("click", function () {
     event.preventDefault();
    localStorage.setItem(time1, $("#input1").val());
    
      localStorage.getItem(time1, $("#input1").val());
  
     
   });  

  $("#btn2").on("click", function () {
    localStorage.setItem(time2, $("#input2").val());
    
      localStorage.getItem(time2, $("#input2").val());
     
    
  });

  $("#btn3").on("click", function () {
    localStorage.setItem(time3, $("#input3").val());
    
    localStorage.getItem(time3, $("#input3").val());
    
  });

  $("#btn4").on("click", function () {
    localStorage.setItem(time4, $("#input4").val());
    
    localStorage.getItem(time4, $("#input4").val());
   
  });

  $("#btn5").on("click", function () {
    localStorage.setItem(time5, $("#input5").val());
    
      localStorage.getItem(time5, $("#input5").val());
    
  });

  $("#btn6").on("click", function () {
    localStorage.setItem(time6, $("#input6").val());
    
    localStorage.getItem(time6, $("#input"6).val());
    
  });

  $("#btn7").on("click", function () {
    localStorage.setItem(time7, $("#input7").val());
    
      localStorage.getItem(time7, $("#input7").val());
  });

  $("#btn8").on("click", function () {
    localStorage.setItem(time8, $("#input8").val());
    
      localStorage.getItem(time8, $("#input8").val());
    
  });

  $("#btn9").on("click", function () {
    localStorage.setItem(time9, $("#input9").val());
    
    localStorage.getItem(time9, $("#input9").val());
    
  });

  

 
   console.log(getHours);
  $(".description").each(function(){
    var timeSlot= $(this).attr("data-hour");
     console.log(timeSlot);
    if(parseInt(getHours)  > parseInt(timeSlot)){
      $(this).addClass("past");
      $(this).prop('disabled', true);
      console.log('greater than');
    }else if (parseInt(getHours)  == parseInt(timeSlot)) {
      $(this).removeClass("future");
      $(this).addClass("present");
      console.log('equal to');
    }else {
      $(this).addClass("future"); 
      console.log('less than');
    };
  });



});


