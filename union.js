"use strict";
function combine(input1, input2, resultCoversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultCoversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // if(resultCoversion === 'as-number')
    // {
    //     return +result;
    // }
    // else{
    //     return result.toString();
    // }
    return result;
}
const combineAges = combine(10, 20, 'as-number');
console.log(combineAges);
const combineStringAges = combine("10", "20", 'as-number');
console.log(combineStringAges);
const combineNames = combine("max", "millian", 'as-text');
console.log(combineNames);
