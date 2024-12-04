// Mumbling
// This time no story, no theory. The examples below show you how to write function


function accum(s){
    return s.toLowerCase().split('').map((letter,i)=>letter.toUpperCase()+letter.repeat(i)).join('-')
}

console.log(accum('ZpglnRxqenU'));