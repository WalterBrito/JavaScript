// Write a JavaScript program to find the area of a triangle where lengths of the
// three of its sides are 5, 6, 7

var triangle = function(x, y, z) {
  var perimeter = (x + y + z) / 2;
  var area = Math.sqrt(perimeter * (perimeter - x) * (perimeter - y) * (perimeter - z));
  return Math.round(area);
}

console.log("Triangle area is: " + triangle(5, 6, 7) + " cm.");
