var todaysDate = document.querySelector("#currentDay");
var timeBlock = $(".time-block");
var currentHour = moment().format("H");

// display date and grab the value of the hour
var grabDate = function () {
  todaysDate.textContent = moment().format("dddd, MMMM Do YYYY, h:mm");
};
// update the date every second
setInterval(grabDate, 1000);

// load tasks when page loads
var loadTasks = function () {
  // set text'#' variables equal to the corosponding 'key' (textarea id) that has been saved
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

  // loop through textareas and give it a class based on results of if statements
  $(".description").each(function (i) {
    var hour = i + 9;

    if (hour < currentHour) {
      $(this).addClass("past");
    }
    if (hour == currentHour) {
      $(this).addClass("present");
    }
    if (hour > currentHour) {
      $(this).addClass("future");
    }
  });
};

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
