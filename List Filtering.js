// List Filtering

// In this kata you will create a function that
// takes a list of non-negative integers and strings and returns a new list with the strings filtered out.


function filterList(x){
    return x.filter((Element=>typeof Element!=='string'))
}
console.log(filterList([1,2,'a','b']));