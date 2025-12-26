// viết hàm đếm từ 
// const a = "tôi chăm học tôitôitôi , tôi chịu khó , tôi nhiều tiền";
//     let count = 0;
//     let targetWord = "tôi";
//     for(let i =0 ;i< a.length;i++) {
//         if(a.slice(i,i+targetWord.length) == targetWord) {
//             count++;
//         }
//     }
// alert(` Từ ${targetWord} xuất hiện ${count} lần`);

// hàm tách chữ và số
// function tachChuSo(a) {
//     let chu = "";
//     let so = "";
//     for(let i = 0;i <a.length;i++) {
//         let char = a[i];
//         if(isNaN(char)) {
//             chu += char;
//         }
//         else {
//             so += char;
//         }
//     }
//     return {chu,so};
// }
// let b = prompt("Mời nhập chuỗi:");
// let c = tachChuSo(b);
// alert(`
//     Chuỗi chữ : ${c.chu}
//     Chuỗi số : ${c.so}`);

// hàm chuẩn hóa input
// function chuanHoaString(name) {
//     name = name.trim().toLowerCase();
//     let str = name.split(" ");
//     let result = [];
//     for(let i = 0; i < str.length; i ++) {
//         if(str[i] != "") {
//             let word = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//             result.push(word);
//         }
//     }
//     let ten = result.join(" ");
//     return ten;
// }
// let s1 = prompt("Nhập vào tên của bạn:");
// alert(` Tên của bạn sau khi được chuẩn hóa: ${chuanHoaString(s1)}`);

// hàm lấy tên trong email
// function layTen(email) {
//     email = email.trim();
//     let id = email.indexOf("@");
//     let str = email.slice(0,id);
//     return str;
// }
// let s1 = prompt("Nhập email của bạn:");
// alert(layTen(s1));

// hàm che sdt 
function cheSDT(sdt) {
    sdt = String(sdt);
    while(sdt.length < 10 || sdt.length > 10) {
        alert("Số bạn nhập không hợp lệ vui lòng thử lại");
        sdt = prompt("Nhập lại số điện thoại:");
        continue;
    }
    let start = sdt.slice(0,2);
    let end = sdt.slice(sdt.length - 2);
    let mid = sdt.length - start.length - end.length;
    mid = "*".repeat(mid);
    let phone = start + mid + end;
    return phone;
}
let s1 = prompt("Nhập số điện thoại:");
alert(cheSDT(s1));