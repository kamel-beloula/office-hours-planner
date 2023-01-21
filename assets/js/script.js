// displays the current day following format: Monday, 1st January, 1999
$('#currentDay').text(moment().format("dddd, Do MMMM, YYYY"));

let rootEl = $('.container');

const OfficeHoursStart = 9; 
const OfficeHoursEnd = 17;

for (var hour = OfficeHoursStart; hour <= OfficeHoursEnd; hour++) {
// Create a new `<div>` for each row
  let rowEl = $('<div>').addClass("row time-block");

  // Create a new `<p>` for each row with the text from the array
  let timeEl = $('<p>').addClass("col-1 hour").text(moment(hour, "HH").format("h a"));

  // Create a new `<textarea>` for each row
  let textEl = $("<textarea>").addClass("col-10 description hour");

  // Create a new `<bitton>` for each row
  let saveButtonEl = $('<button>').addClass('col-1 saveBtn');

//  Add this new `<div>` to the `<div>` container element.
  rootEl.append(rowEl);

//  Add new `<p>`, `<textarea>`, `<bitton>` to the `<div>` rowEl.
  rowEl.append(timeEl, textEl, saveButtonEl);

  //add different classes to the textElement based on the id
  let currentHour = moment().format("HH");

  if (currentHour > hour){
    textEl.addClass('past');

  }else 
      if(currentHour == hour){
        textEl.addClass('present');

      }else{
        textEl.addClass('future');
      }

}
