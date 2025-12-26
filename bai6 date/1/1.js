// const timenow = new Date(2025,11,13);
// console.log(timenow);
// console.log(timenow.toLocaleDateString());
// const newDate = new Date("2025-11-13T23:12:24");
// console.log(newDate);
// console.log(newDate.toLocaleDateString());
// function checkNamSinh(year) {
//     let birdYear = Number(year);
//     if(!Number.isInteger(birdYear) || birdYear <= 0) {
//         alert("Năm sinh không hợp lệ, phải là số nguyên lớn hơn 0");
//         return;
//     }
//     let currentYear = new Date().getFullYear();
//     let age = currentYear - birdYear;
//     alert(` Tuổi của bạn là : ${age}`);
// }
// let input = prompt("Nhập năm sinh của bạn:");
// checkNamSinh(input);

let counter = 0;
let count = () => {
    console.log(counter++);
    if (counter == 5) {
        clearInterval(intee);
    }
}
let intee = setInterval(count, 1000);
