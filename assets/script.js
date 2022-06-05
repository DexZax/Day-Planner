var todaysDate = document.querySelector("#currentDay")


var grabDate = function() {
todaysDate.textContent = new Date().toString();
}

setInterval(grabDate)