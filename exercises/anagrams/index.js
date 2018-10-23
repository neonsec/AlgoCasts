// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    stringA = stringA.replace(/[^\w]/g,"")
    stringB = stringB.replace(/[^\w]/g,"")
    if(stringA.length != stringB.length)
        return false
    var charMap = {};
    var charMap2 = {};
    for(var ch of stringA){
        if(charMap[ch])
            charMap[ch] +=1
        else
            charMap[ch] = 1
    }
    for(var ch of stringB){
        if(charMap2[ch])
            charMap2[ch] +=1
        else
            charMap2[ch] = 1
    }
    for(var ch in charMap){
        if(charMap[ch] != charMap2[ch])
            return false
    }
    return true
}

module.exports = anagrams;
