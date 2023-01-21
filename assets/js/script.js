// displays the current day following format: Monday, 1st January, 1999
$('#currentDay').text(moment().format("dddd, Do MMMM, YYYY"));

let rootEl = $('.container');

var OfficeHours = [
  '9 am',
  '10 am',
  '11 am',
  '12 pm',
  '1 pm',
  '2 pm',
  '3 pm',
  '4 pm',
  '5 pm',
];

for (var i = 0; i < OfficeHours.length; i++) {
// Create a new `<div>` for each row
  let rowEl = $('<div>').addClass("row time-block");

  // Create a new `<p>` for each row with the text from the array
  let timeEl = $('<p>').addClass("col-1 hour").text(OfficeHours[i]);

  // Create a new `<textarea>` for each row
  let textEl = $("<textarea>").addClass("col-10 description hour").attr("id", OfficeHours[i]);

  // Create a new `<bitton>` for each row
  let saveButtonEl = $('<button>').addClass('col-1 saveBtn');

//  Add this new `<div>` to the `<div>` container element.
  rootEl.append(rowEl);

//  Add new `<p>`, `<textarea>`, `<bitton>` to the `<div>` rowEl.
  rowEl.append(timeEl, textEl, saveButtonEl);

  let currentHour = moment().format("HH");
  console.log(currentHour);
  
  if (currentHour > OfficeHours[i]){
      textEl.addClass('future');
  }else if(currentHour < OfficeHours[i]){
          textEl.addClass('past');
        }else{
          textEl.addClass('present');
        }

}



// Alternatively use the `$.each` method
// $.each(abilities, function(i, ability) {
//    abilityEl.append("<div>" + ability + "</div>");
// })