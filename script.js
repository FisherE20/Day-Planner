$(document).ready(function () {

let date = moment().format("MMMM Do YYYY, h:mm:ss a");
let getHours = moment().format("h:mm");

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
$("#currentDay").append(date);

$(window).on("load", function() {
  localStorage.getItem('input1');
  localStorage.getItem('input2');
  localStorage.getItem('input3');
  localStorage.getItem('input4');
  localStorage.getItem('input5');
  localStorage.getItem('input6');
  localStorage.getItem('input7');
  localStorage.getItem('input8');
  localStorage.getItem('input9');
  localStorage.getItem('input10');
  localStorage.getItem('input11');
  localStorage.getItem('input12');
  localStorage.getItem('input13');
  localStorage.getItem('input14');
  localStorage.getItem('input15');
  localStorage.getItem('input16');
  localStorage.getItem('input17');
  });

  

  // WHEN I click the save button for that timeblock
  // THEN the text for that event is saved in local storage
  $("#btn1").on("click", function () {
    event.preventDefault();

    if ($("#input1").val()) {
      localStorage.removeItem("input1");
    }
    localStorage.setItem(time1, $("#input1").val());
  });  

  $("#btn2").on("click", function () {
    if ($("#input2").val()) {
      localStorage.removeItem("input2");
    }
    localStorage.setItem(time2, $("#input2").val());
    
  });

  $("#btn3").on("click", function () {
    if ($("#input3").val()) {
      localStorage.removeItem("input3");
    }
    localStorage.setItem(time3, $("#input3").val());
    
  });

  $("#btn4").on("click", function () {
    if ($("#input4").val()) {
      localStorage.removeItem("input4");
    }
    localStorage.setItem(time4, $("#input4").val());
   
  });

  $("#btn5").on("click", function () {
    if ($("#input5").val()) {
      localStorage.removeItem("input5");
    }
    localStorage.setItem(time5, $("#input5").val());
    
  });

  $("#btn6").on("click", function () {
    if ($("#input6").val()) {
      localStorage.removeItem("input6");
    }
    localStorage.setItem(time6, $("#input6").val());
    
  });

  $("#btn7").on("click", function () {
    if ($("#input7").val()) {
      localStorage.removeItem("input7");
    }
    localStorage.setItem(time7, $("#input7").val());
    
  });

  $("#btn8").on("click", function () {
    if ($("#input8").val()) {
      localStorage.removeItem("input8");
    }
    localStorage.setItem(time8, $("#input8").val());
    
  });

  $("#btn9").on("click", function () {
    if ($("#input9").val()) {
      localStorage.removeItem("input9");
    }
    localStorage.setItem(time9, $("#input9").val());
    
  });

  $("#btn10").on("click", function () {
    if ($("#input10").val()) {
      localStorage.removeItem("input10");
    }
    localStorage.setItem(time10, $("#input10").val());
    
  });

  $("#btn11").on("click", function () {
    if ($("#input11").val()) {
      localStorage.removeItem("input11");
    }
    localStorage.setItem(time11, $("#input11").val());
    
  });

  $("#btn12").on("click", function () {
    if ($("#input12").val()) {
      localStorage.removeItem("input12");
    }
    localStorage.setItem(time12, $("#input12").val());
    
  });

  $("#btn13").on("click", function () {
    if ($("#input13").val()) {
      localStorage.removeItem("input13");
    }
    localStorage.setItem(time13, $("#input13").val());
    
  });

  $("#btn14").on("click", function () {
    if ($("#input14").val()) {
      localStorage.removeItem("input14");
    }
    localStorage.setItem(time14, $("#input14").val());
   
  });

  $("#btn15").on("click", function () {
    if ($("#input15").val()) {
      localStorage.removeItem("input15");
    }
    localStorage.setItem(time15, $("#input15").val());
    
  });

  $("#btn16").on("click", function () {
    if ($("#input16").val()) {
      localStorage.removeItem("input16");
    }
    localStorage.setItem(time16, $("#input16").val());
    
  });

  $("#btn17").on("click", function () {
    if ($("#input17").val()) {
      localStorage.removeItem("input17");
    }
    localStorage.setItem(time17, $("#input17").val());
    
  });

  // // WHEN I view the timeblocks for that day
  // // THEN each timeblock is color coded to indicate whether it is in the past, present, or future
  
  // function checkTime(){
  //   setInterval( function(){
      
      
      
  
  $(".description").each(function(){
    var timeSlot= $(this).attr("id");
    if(getHours > timeSlot){
      $(this).prop('disabled', true);
    }else if (getHours == timeSlot) {
      $(this).removeClass("future");
      $(this).addClass("present");
    }else {
      $(this).addClass("future");
    };
  });

  //when this area is uncommented it takes of the displayed date
  
//   $("button").each(function(){
//   var currentBtn = $(this).attr(saveBtn);
//   if(getHours > currentBtn){
//     $(this).prop('disabled', true);
//   };

// });

// }, 1000);

// };

});


