// tạo function chào
// function hello(name) {
//     alert(`Xin chào ${name}!.Chào mừng đến với khóa học js`);
// }
// hello("tung");
// let a = prompt("Hãy nhập tên của bạn:");
// function hello(b) {
//     alert(`xin chào bạn ${b} đã đến với khóa học js`);
// }
// hello(a);
// let tong = (a,b) => (a+b);
// let hieu = (a,b) => (a-b);
// let tich = function(x,y,z) {
//     let sum = tong(x,y);
//     let thuong = sum + hieu(sum,z);
//     return thuong;
// }
// alert(tich(2,3,4));
let a = (a, b) => {
    let tong = a + b;
    let hieu = a - b;
    let tich = tong * hieu;
    return tich;
}
alert(a(4, 5));
let b = function (a, b) {
    return a + b;
}
function c(a, b) {
    return a + b;
}

