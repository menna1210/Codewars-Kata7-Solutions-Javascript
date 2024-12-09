// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


function findWord(x){
    return Math.min(...x.split(' ').map((word)=>word.length))
}

console.log(findWord('bitcoin take over thee world maybe who knows perhaps'));