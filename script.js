// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
$(document).ready(function(){


// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
$(function (){
    $('#schedulerContainer').dxScheduler({
        dataSource: data,
        currentData:new Date(2020/06/11),
        startDayHour: 8,
        endDayHour: 19,
        views: ["day"],
        currentView: "day",
        resource: [{
            dataSource: resourcsData,
            allowMultiple: true,
            field: "ownerId",
            label: "Owner"
        }]   
    });

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
$(".timeBlock").on('click', function(){
    $("div#form1").append(
        // Creating Form Div and Adding <h2> and <p> Paragraph Tag in it.
        $("<h3/>").text("Contact Form"), $("<p/>").text("This is my form. Please fill it out. It's awesome!"), $("<form/>", {
        action: '#',
        method: '#'
        }).append(
        // Create <form> Tag and Appending in HTML id="descrip".
        $("<input/>", {
        type: 'text',
        id: 'vevent',
        name: 'event',
        placeholder: 'Event'
        }), // Creating Input Element With Attribute.
        $("<input/>", {
        type: 'text',
        id: 'vtime',
        name: 'time',
        placeholder: 'Start Time'
        }), $("<textarea/>", {
        rows: '5px',
        cols: '27px',
        type: 'text',
        id: 'vdes',
        name: 'description',
        placeholder: 'description'
        }), $("<br/>"), $("<input/>", {
        type: 'submit',
        id: 'submit',
        value: 'Submit'
        })))
        });
 

});

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// ```

// THEN I can enter an event
  
// WHEN I click the save button for that timeblock
$(".saveBtn").on("click", function(event){
    // THEN the text for that event is saved in local storage
    $('#test').html("Test");
    localStorage.content = $('#test').html();
    $('#test').html(localStorage.content)
});

// WHEN I refresh the page
// THEN the saved events persist
// ```
    
})
//function settingDate(date, day){
    //     date= new Date(date);
    //     date.setDate(0);
    //     date.setHours(23);
    //     return date;
    // }


// function getDatesBetween(date1, date2){
//     let range1 = new Date(date1);
//     let range2 = new Date(date2);
//     // console.log(range1 + "" + range2);
//     date1= settingDate(date1, 31);
//     date2= settingDate(date2, 31);
//     // console.log(date1 + "" + date2);
//     let temp;
//     let dates= [];
//     while(date1<=date2){
//        if(date1.getDate()!=31){
//            temp=settingDate(date1,0);
//            if (temp >= range1 && temp<= range2) dates.push(temp);
//        } else{
//            temp=new Date(date1);
//            if (temp>=range1 && temp<=range2) dates.push(temp);
//            date1.setMonth(date1.getMonth() + 1);
//        }
//     }
//     // console.log(dates);
// }

//let content=getDatesBetween("2020/06/15", "2021/06/21");
// document.getElementById("timetable").innerHTML = content;