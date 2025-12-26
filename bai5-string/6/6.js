// function checkPass() {
//      while(true) {
//         pass = prompt("Nhập mật khẩu:");
//         if(pass === null) return null;
//         pass = pass.trim();
//         if(pass.length < 6 || pass.length > 12) {
//             alert("Mật khẩu phải chứa từ 6-12 ký tự:");
//             continue;
//         }
//         if(pass.includes(" ")) {
//             alert("Mật khẩu không được chứa khoảng trắng");
//             continue;
//         }
//         let hasUpper = false;
//         let hasLower = false;
//         let hasDigi = false;
//         if(/[a-z]/.test(pass)) {
//             hasLower = true;
//         }
//         else {
//             alert("Mật khẩu phải chứa chữ thường!");
//             continue;
//         }
//         if(/[A-Z]/.test(pass)) {
//             hasUpper = true;
//         }
//         else {
//             alert("Mật khẩu phải chứa chữ hoa");
//             continue;
//         }
//         if(/[0-9]/.test(pass)) {
//             hasDigi = true;
//         }
//         else {
//             alert("Mật khẩu phải chứa số");
//             continue;
//         }
//        alert("Mật khẩu hợp lệ");
//        return pass;
//      }
// }
// checkPass();

function chuanHoaMaSv(maSv) {
    let arrMaSv = maSv.split("-");
    if(arrMaSv.length != 2) {
        alert("Mã sinh viên sai vui lòng nhập lại");
        return;
    }
    let s1 = arrMaSv[0].toUpperCase();
    let s2 = arrMaSv[1].padStart(5,"0");
    return s1 + "-" + s2;
}
alert(chuanHoaMaSv("1-11"));