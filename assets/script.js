var todaysDate = document.querySelector("#currentDay")
var container = document.querySelector(".container")

var grabDate = function() {
todaysDate.textContent = new Date().toString();
}

setInterval(grabDate);

function createTimeBlock() {
    for (var i = 9; i <= 17; i++) {
        var currentHour = i <= 12 ? i : i - 12;

        var row = document.createElement('div');
        $(row).addClass("row time-block");

        var hourBox = document.createElement('div');
        $(hourBox).addClass("col-1 hour").text(currentHour);

        var taskBox = document.createElement("textarea");
        $(taskBox).addClass("col-10 description");

        var saveBtn = document.createElement("button");
        $(saveBtn).addClass("col-1 saveBtn").text("Save");

        row.appendChild(hourBox);
        row.appendChild(taskBox);
        row.appendChild(saveBtn);
        container.appendChild(row);
    };
};
createTimeBlock();