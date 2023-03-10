// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
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
  });
  
  function submitValue(id) {
    let noteId = "note-" +id;
    let note = document.getElementById(noteId).value;
    localStorage.setItem(id, note);
    console.log(note);
  }
  var d = new Date(); 
  let currentHour = d.getHours();
  
  for (let i=0; i <currentHour;i++) {
     let id = "hour-" +i;
     let name = "row time-block past"
     document.getElementById(id).className = name;
  }
  let id = "hour-" +currentHour;
  let name = "row time-block present"
  document.getElementById(id).className = name;
  
  for (let i=currentHour+1; i <24;i++) {
    let id = "hour-" +i;
    let name = "row time-block future"
    document.getElementById(id).className = name;
  }
  for(var key in localStorage) { 
    
    if(localStorage.getItem(key)) {
      let noteId = "note-" +key;
      document.getElementById(noteId).value = localStorage.getItem(key);
    }
    
  }