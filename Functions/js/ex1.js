// Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

function numberRev(n) {
    n = n + "";
    return n.split('').reverse().join('');
};

console.log("Reverse number: ", numberRev(32243));

