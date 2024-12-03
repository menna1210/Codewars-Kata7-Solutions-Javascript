// Isograms

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

function isograms(word){
  return new Set(word.toLowerCase().split('')).size===word.length
}
console.log(isograms('isogram'));