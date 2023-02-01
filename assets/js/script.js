// displays the current day date following format: Monday, 1st January, 1999
$("#currentDay").text(moment().format("dddd, Do MMMM, YYYY"));

// variables
//main page container
let rootEl = $(".container");
// current hour following moment format
let currentHour = moment().format("HH");

// create an array for the tasks retreived from the localstorage
const hourlyTask = "hourlyTask";
const hourlyTaskString = localStorage.getItem(hourlyTask);
const dailyPlan = JSON.parse(hourlyTaskString) ?? Array(24);

// create a loop to dynamically create the different page elements
for (var hour = 9; hour <= 17; hour++) {
  // Create a new `<div>` for each row
  let rowEl = $("<div>").addClass("row time-block");

  // Create a new `<p>` for each row with the text from the array
  let timeEl = $("<p>")
    .addClass("col-1 hour")
    .text(moment(hour, "HH").format("h a"));

  // Create a new `<textarea>` for each row
  let textEl = $("<textarea>")
    .addClass("col-10 description hour")
    .attr("id", hour);

  // add a class to the '<textarea>' according to the "hour value" vs "current hour"
  if (currentHour > hour) {
    textEl.addClass("past");
  } else if (currentHour == hour) {
    textEl.addClass("present");
  } else {
    textEl.addClass("future");
  }

  // Create a new `<button>` for each row
  let saveButtonEl = $("<button>").addClass("col-1 saveBtn");

  //create a new '<i>' in each '<button>' for the flppy disc icon
  let floppyDiskIcon = $("<i>").addClass("fas fa-save").attr("data-hour", hour);

  //  Add this new `<div>` to the `<div>` container element.
  rootEl.append(rowEl);

  //  Add new `<p>`, `<textarea>`, `<button>` to the `<div>` rowEl.
  rowEl.append(timeEl, textEl, saveButtonEl);

  //  Add new `<i>` to the `<button>` element.
  saveButtonEl.append(floppyDiskIcon);
}

// create a function to save the daily task to the localstorage on clicking the save button
rootEl.on("click", ".fas", function () {
  var savedHour = $(this).attr("data-hour");
  dailyPlan[savedHour] = $("#" + savedHour).val();
  localStorage.setItem(hourlyTask, JSON.stringify(dailyPlan));
  alert("Your task was succeddfully saved!");
});

// create a function to loead the tasks from the localstorage when the page refreshes
var savedHour = $("i").attr("data-hour");
function loadDailyTask() {
  for (savedHour = 9; savedHour <= 17; savedHour++) {
    $("#" + savedHour).text(dailyPlan[savedHour]);
  }
}
loadDailyTask();
