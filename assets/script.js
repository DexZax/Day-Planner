var todaysDate = document.querySelector("#currentDay");
var timeBlock = $(".time-block");


// display date and grab the value of the hour
var grabDate = function () {
  todaysDate.textContent = moment().format("dddd, MMMM Do YYYY, h:mm");
  var currentHour = moment().format("H");

  return currentHour;
};
// update the date every second
setInterval(grabDate, 1000);

// load tasks when page loads
var loadTasks = function () {
    // set text'#' variables equal to the corosponding 'key' (textarea id)
    var text9 = localStorage.getItem(9);
    var text10 = localStorage.getItem(10);
    var text11 = localStorage.getItem(11);
    var text12 = localStorage.getItem(12);
    var text13 = localStorage.getItem(13);
    var text14 = localStorage.getItem(14);
    var text15 = localStorage.getItem(15);
    var text16 = localStorage.getItem(16);
    var text17 = localStorage.getItem(17);
  
    // reset textarea by using id's and setting their values to the declared vairables
    $("#9").val(text9);
    $("#10").val(text10);
    $("#11").val(text11);
    $("#12").val(text12);
    $("#13").val(text13);
    $("#14").val(text14);
    $("#15").val(text15);
    $("#16").val(text16);
    $("#17").val(text17);



    // loop through time blocks
    for (i = 9; i <= 17; i++) {
        var hour = i;
        // add a class to the textarea's based on the result of the 'determineClass' function
        $(".description").addClass(`${determineClass(grabDate(), i)}`);
      }
    
  };



// function to determine class of textarea's
function determineClass(currentHour, hour) {
    console.log(currentHour, hour)

    $(".description").removeClass("past present future");

  // if the hour of the text area is less than the current hour in the day then give it a class of "past"
  if (hour < currentHour) {
    return "past";
  }
  // if the hour of the textarea is equal to the current hour in the day, set the class to "present"
  if (hour == currentHour) {
    return "present";
  }
  // if the current hour of the day is less than the hour of the text area, set the class to "future"
  if (currentHour < hour) {
    return "future";
  }
}

// on click of the dave button in a particular row
$(".row").on("click", ".saveBtn", function () {
  // set the variable task list to the value of whats in the child textarea
  var tasktext = $(this).parent().find(".description").val().trim();
  // set the value of time equal to the id of the child text area
  var time = $(this).parent().find(".description").attr("id");
  // save both to local storage
  localStorage.setItem(time, tasktext);
});

// load tasks on page load
loadTasks();
