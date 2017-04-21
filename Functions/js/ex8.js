// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. Go to the editor
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and
// itself.

function testPrime(n) {
    if (n === 1) {
        return false;
    } else if  (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x ++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log(testPrime(37));  // Prime
console.log(testPrime(45));  // Not Prime