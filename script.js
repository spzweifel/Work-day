var container = $(".time-block")


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



$(function () {

container.on("click", ".btn", function(){
  console.log($(this).parent().attr("id"));
  var textInput = $(this).parent().children().eq(1).val();
  console.log(textInput);

  localStorage.setItem("textInput", textInput);
  var output = localStorage.getItem("textInput");
  console.log(output, '${output}');
  localStorage.getItem("textInput", textInput)
  //$('.description').val(localStorage.getItem('textInput'));
})

  //$(document).ready(function() {
//   $(input[name=server]).val(localStorage.getItem("server"));
// });

  //act 9 and 10 event delegation
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var day = dayjs().format('dddd MMMM DD, YYYY hh:mm:ss')
  $('#currentDay').text(day)

});

// function save() {
//   var value = document.getElementById("btn").value
//   sessionStorage.setItem()
//   display()
// }

// function display() {
//   var saveBtn = getElementById("saveBtn")
//   saveBtn.innerHTML = "description"
//   for (var i = 0; i < sessionStorage.length; i++)
//     var a = sessionStorage.description(i)
//     var b = sessionStorage.getItem(a)
// }