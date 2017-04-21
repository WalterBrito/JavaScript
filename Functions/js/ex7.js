// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

function vowelCount(str1) {
    var vowelList = 'aeiouAEIOU';
    var vCount = 0;

    for (var x = 0; x < str1.length; x++) {
        if (vowelList.indexOf(str1[x]) !== -1) {
            vCount += 1;
        }
    }
    return vCount;
}

console.log(vowelCount("The quick brown fox"));