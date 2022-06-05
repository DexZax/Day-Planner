var todaysDate = document.querySelector("#currentDay");
var container = document.querySelector(".container");


var grabDate = function() {
todaysDate.textContent = new Date().toString();
var currentHour = Number(new Date().toString().split(" ")[4].split(":")[0]);
return currentHour;
}

setInterval(grabDate, 1000);

function createTimeBlock() {
    determineClass();
    for (var i = 9; i <= 17; i++) {
        var hour = i;

        var row = document.createElement('div');
        row.classList.add("time-block");
        row.classList.add("row")

        var hourBox = document.createElement('div');
        hourBox.classList.add("hour");
        hourBox.classList.add("col-1")
        hourBox.textContent = hour;

        var taskBox = document.createElement("textarea");
        taskBox.classList.add(`${determineClass(grabDate(), i)}`);
        taskBox.classList.add("col-10")
        taskBox.classList.add("description")

        var saveBtn = document.createElement("button");
        saveBtn.classList.add("saveBtn");
        saveBtn.classList.add("col-1");
        saveBtn.textContent = "Save";
        saveBtn.addEventListener("click", saveTask());

        row.appendChild(hourBox);
        row.appendChild(taskBox);
        row.appendChild(saveBtn);
        container.appendChild(row);
    };
};

function determineClass(currentHour, hour) {
   
    if (hour < currentHour) {
        return "past"
    }
    if (hour === currentHour) {
        return "present"
    }
    if (currentHour < hour) {
        return "future"
    }
}

var saveTask = function() {
    console.log("save")
}

createTimeBlock();