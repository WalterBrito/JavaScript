// Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in celsius and f = temperature in fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

// convert celsius to fahrenheit
function cToF(celsius) {
  var c = celsius;
  var celToFah = c * 9 / 5 + 32;
  var message = c + '\xB0C is ' + celToFah + ' \xB0F.';
  console.log(message);
}

// Covert fahrenheit to celsius
function fToC(fahrenheit) {
  var f = fahrenheit
  var fToCel = (f - 32) * 5 / 9;
  var message = f + '\xB0F is ' + fToCel + '\xB0C.';
  console.log(message);
}

cToF(60);
fToC(45);
