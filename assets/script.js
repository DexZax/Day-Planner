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
        $(row).addClass("row time-block");

        var hourBox = document.createElement('div');
        $(hourBox).addClass("col-1 hour").text(hour);

        var taskBox = document.createElement("textarea");
        $(taskBox).addClass(`col-10 description ${determineClass(grabDate(), i)}`);

        var saveBtn = document.createElement("button");
        $(saveBtn).addClass("col-1 saveBtn").text("Save");

        row.appendChild(hourBox);
        row.appendChild(taskBox);
        row.appendChild(saveBtn);
        container.appendChild(row);
        
    };
    
};

function determineClass(currentHour, hour) {
    console.log(currentHour, hour)
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


createTimeBlock();