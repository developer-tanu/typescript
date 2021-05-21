function add(n1:number,n2:number){
    return n1 + n2;
}
function returnType(num:number):void
{
    console.log('Result:' +num);
}
function addHandler(n1:number,n2:number ,cb:(num:number)=>void)
{
    const result =n1+n2;
    cb(result);
}
returnType(add(4,6));
let combinedvalues:(a:number,b:number) =>  number;
combinedvalues = add;
console.log(combinedvalues(4,7));

addHandler(10,20,(result)=>
{
    console.log(result);
});