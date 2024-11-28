// Digit*Digit

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-35)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

function getDigit(num){
    return Number(num.toString().split('').map((n)=>Math.pow(n,2)).join(''))
}

console.log(getDigit(9119)); // Output: 811181
console.log(getDigit(765));  // Output: 493625
console.log(getDigit(0));    // Output: 0