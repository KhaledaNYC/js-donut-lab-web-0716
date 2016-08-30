//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts



//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
var guests = prompt("How many guests?");
var donuts = prompt("How many donuts?");



if (parseInt(guests) <= parseInt(donuts)) {
  alert('We have ' + guests + ' guests and ' + donuts + ' donuts'.  'I think we have enough for everyone!');
} else {
  alert(donuts + ' donuts is not enough for ' + guests + ' guests.');
}
//use parseInt to convert the users answer from a string to an integer.

//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
