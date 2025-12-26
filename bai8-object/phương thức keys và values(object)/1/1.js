let tungOk = {name:"Phùng Khánh Tùng" , age:20};
let boTung = {};
let tungdz = {class:10,address:"Hn"};
let tung1 = {city:"HCM"};
let s1 = Object.keys(tungOk);
let s2 = Object.values(tungOk);
let s3 = Object.entries(tungOk);
console.log(s1);
console.log(s2);
console.log(s3);
Object.assign(boTung,tungOk,tungdz);
console.log(boTung);
const tung = { ...tungOk,...tungdz,...tung1};
console.log(tung);
console.log(tungOk.hasOwnProperty("name"));
console.log(tungOk.hasOwnProperty("class"));



