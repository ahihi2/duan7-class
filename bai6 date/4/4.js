// let arr1 = [1,2,3,4,5];
// let arr2 = [...arr1];
// console.log(arr1);
// arr2[0] = 0;
// console.log(arr2);
let sum = function(a,b,c) {
    return a+b+c;
}
let a = new Array(2,3,4);
console.log(sum(...a));
let a1 = [5,6,7];
let a2 = [...a,...a1];
console.log(a2);
let a3 = "hello";
let a4 = [...a3];
console.log(a4);