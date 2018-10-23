// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
//sol 1
// function reverse(str) {
//     return str.split("").reverse().join("");
// }
 //sol 2
 function reverse(str) {
     let reverseStr = ""
    for(let char of str)
        reverseStr = char + reverseStr;       
    return reverseStr;
}


module.exports = reverse;
