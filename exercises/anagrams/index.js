// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
function buildCharMap(str){
    var charMap = {}
    for(var ch of str.replace(/[^\w]/g,"").toLowerCase()){        
            charMap[ch] = charMap[ch] + 1 || 1    
    }
    return charMap
}
function anagrams(stringA, stringB) {
    var charMap = buildCharMap(stringA)
    var charMap2 = buildCharMap(stringB)
    if(Object.keys(charMap).length != Object.keys(charMap2).length)
        return false;
    for(var ch in charMap){
        if(charMap[ch] != charMap2[ch])
            return false
    }
    return true
}

module.exports = anagrams;
