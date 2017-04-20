// Write a JavaScript program where the program takes a random integer between 1 to
// 10, the user is then prompted to input a guess number. If the user input matches
// with guess number, the program will display a message "Good Work" otherwise
// display a message "Not matched".

var guessNumber = Math.ceil(Math.random() * 10);
var choice = prompt("Enter a number between 1 and 10: ");

if (choice === guessNumber) {
  alert("Good Work");
} else {
  alert("Not matched,  the number was " + guessNumber);
}
