// Moment script
const today = moment();

// Display current day, date and time
$("#currentDay").text(moment().format('LLLL'));

//To change colors depending on event being past, present or in the future
$(document).ready( function() {
    colorChange ();
    renderText();
});

function colorChange () {
    
    const currentTime = moment().hours();
    console.log("Current Time" + currentTime);
       
// To determine the "timeline" of time blocks
    $(".input").each(function () {
        const timeNow = parseInt($(this).attr("id"));
        console.log(timeNow);

        if (currentTime > timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } 
        else if (currentTime < timeNow) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } 
        else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}
// Button 
var todoText;
var timeEntry;

$(".saveBtn").click(function() {
    todoText = $(this).siblings(".input").val();
    console.log(todoText);
    timeEntry = $(this).siblings(".hour").text();
    console.log(timeEntry);
    localStorage.setItem(timeEntry, JSON.stringify(todoText));

    colorChange ();
    renderText ();
    
});

    // Add and show Calendar Events

    function renderText () {   
    var savetodoText8am = JSON.parse(localStorage.getItem("8:00am"));
    $("#8").val("");
    $("#8").val(savetodoText8am);

    var savetodoText9 = JSON.parse(localStorage.getItem("9:00am"));
    $("#9").val("");
    $("#9").val(savetodoText9);
    
    var savetodoText10 = JSON.parse(localStorage.getItem("10:00am"));
    $("#10").val("");
    $("#10").val(savetodoText10);
    
    var savetodoText11 = JSON.parse(localStorage.getItem("11:00am"));
    $("#11").val("");
    $("#11").val(savetodoText11);
    
    var savetodoText12 = JSON.parse(localStorage.getItem("12:00pm"));
    $("#12").val("");
    $("#12").val(savetodoText12);
    
    var savetodoText1 = JSON.parse(localStorage.getItem("1:00pm"));
    $("#13").val("");
    $("#13").val(savetodoText1);

    var savetodoText2 = JSON.parse(localStorage.getItem("2:00pm"));
    $("#14").val("");
    $("#14").val(savetodoText2);

    var saveEntryText3 = JSON.parse(localStorage.getItem("3:00pm"));
    $("#15").val("");
    $("#15").val(saveEntryText3);

    var savetodoText4 = JSON.parse(localStorage.getItem("4:00pm"));
    $("#16").val("");
    $("#16").val(savetodoText4);

    var savetodoText5 = JSON.parse(localStorage.getItem("5:00pm"));
    $("#17").val("");
    $("#17").val(savetodoText5);

    };