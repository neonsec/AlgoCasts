// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    var charMap = {};
    var max = -Infinity
    for(var ch of str){
        if(charMap[ch]) 
            charMap[ch]++
        else 
            charMap[ch] = 1   
    }

    for(var ch in charMap){
        if(charMap[ch] > max)
            max = ch;
    }
    return max;
}

module.exports = maxChar;
