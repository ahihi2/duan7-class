// let arr1 = ["a",2,4,7];
// console.log(arr1);
// let arr2 = new Array("s",3,5,7,8);
// console.log(arr2);
// let arr3 = new Array(5);
// console.log(arr3);
let s1 = [1, 2, 3, 4];
s1.unshift(0, "tùng", "ok");
console.log(s1);
let s2 = s1.pop();
console.log(s1);
console.log(s2);
let s3 = s1.shift();
console.log(s1);
console.log(s3);
let s4 = s1.shift();
console.log(s1);
console.log(s4);
let a1 = [1, 2, 3, 4, 5, 6, 5];
let a2 = a1.slice();
console.log(a2);
console.log(a1.indexOf(5));
console.log(a1.lastIndexOf(5));
console.log(a1.reverse());
console.log(a1);
let c1 = [1, 2, 3, 4];
let c2 = c1.join(" + ");
console.log(c2);
// pop() loại bỏ phần tử cuối của mảng và làm thay đổi mảng gốc , trả về giá trị đã loại bỏ
// shift() loại bỏ phần tử đầu của mảng và trả về giá trị đã bị loại bỏ,làm thay đổi mảng gốc
// push() thêm phần tử vào cuối mảng gốc
// unshift() thêm phần tử vào đầu mảng gốc
