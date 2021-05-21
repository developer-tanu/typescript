"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function returnType(num) {
    console.log('Result:' + num);
}
function addHandler(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
returnType(add(4, 6));
let combinedvalues;
combinedvalues = add;
console.log(combinedvalues(4, 7));
addHandler(10, 20, (result) => {
    console.log(result);
});
