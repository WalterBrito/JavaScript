// Write a JavaScript program to get the current date.
// Example: mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

var today = new Date();
var month = today.getMonth();
var day = today.getDate();
var year = today.getFullYear();

console.log("Today is: " + month + "/" + day + "/" + year);
