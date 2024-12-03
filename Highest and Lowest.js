// Highest and Lowest

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function gethighLow(numbers){
    let numbersArray = numbers.split(' ').map((n) => Number(n)).sort((a, b) => a - b);
    return `${numbersArray[numbersArray.length - 1]} ${numbersArray[0]}`;
}
console.log( gethighLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))