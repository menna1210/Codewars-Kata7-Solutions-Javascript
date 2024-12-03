//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str){
    str =str.toLowerCase();

    let countX = 0
    let countO =0;
    for(let char of str){
        if(char==='x') countX++;
        if(char==='o')countO++;
    }
    return countX === countO;
}
console.log(XO("ooxx"));    // true
console.log(XO("xooxx"));   // false
console.log(XO("ooxXm"));   // true
console.log(XO("zpzpzpp")); // true
console.log(XO("zzoo"));    // false