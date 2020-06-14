// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
$(function (){
    $('#schedulerContainer').dxScheduler({
        dataSource: data,
        currentData:new Date(2020/06/11),
        startDayHour: 8,
        endDayHour: 19,
        views: ["month", "week", "workWeek", "day"],
        currentView: "workWeek",
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

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// ```

// THEN I can enter an event
     onAppointmentFormCreated: function (e) {
            var form = e.form;
            var formItems= form.option("items");

            form.itemOption("startDate",{
                helpText: "Select a date between June 15 and 21",
                editorOptions: {
                    min: new Date(2020, 06, 15),
                    max: new Date(2020, 06, 21),
                    format: "datetime"
                }
            });

            form.itemOption("description", {
                validationRules: [{
                    type: "required",
                    message: "description is required"
                }]
            });

            form.itemOption("text", {
                validationRules: [{
                    type: "required",
                    message: "Subject is required"
                }]
            });

            formItems.push({
                dataField: "location",
                editorType: "dxTextBox",
                label: {
                    text: "Location"
                }
            });

            form.option({
                items: "formItems",
            });
        }

    });
// WHEN I click the save button for that timeblock
saveBtn.addEventListener('click', function(){
    // THEN the text for that event is saved in local storage
    $('#test').html("Test");
    localStorage.content = $('#test').html();
    $('#test').html(localStorage.content);
})

// WHEN I refresh the page
// THEN the saved events persist
// ```
    

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