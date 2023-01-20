alert("hello");

// displays the current day following format: Monday 1st Jan, 1999
var currentDay = moment().format("dddd, Do MMMM YYYY");
$('#currentDay').text(currentDay);