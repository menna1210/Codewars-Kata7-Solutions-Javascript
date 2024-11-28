// Codewars Kata7 Solutions

// Descending Order

// Your task is to make a function that can take any non-negative integer as an argument and return
//  it with its digits in descending order.
//  Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(num){
return parseInt(num.toString().split('').sort((a,b)=>b-a).join(''),10)
}

console.log(descendingOrder(42145)); // Output: 54421
console.log(descendingOrder(145263)); // Output: 654321
console.log(descendingOrder(123456789)); // Output: 987654321