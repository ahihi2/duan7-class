function nhapMang(n) {
    alert(` Mảng có độ dài là ${n}`);
    let arr1 = [];
    for (let i = 0; i < n; i++) {
        let a = prompt(` Phần tử thứ ${i}:`);
        arr1.push(a);
    }
    return arr1;

}
function xuatMang(arr) {
    for (let i in arr) {
        alert(` arr[${i}] = ${arr[i]}`)
    }
}
function daoNguocMang(arr1) {
    let s1 = [...arr1];
    s1.reverse();
    return s1;

}
function tongPTMang(arr) {
    let tong = 0;
    for (let i in arr) {
        tong += Number(arr[i]);
    }
    return tong;

}
function checkMang(arr) {
    let n = Number(prompt(` Nhập vào 1 số bất kỳ:`));
    for(let i in arr) {
        if(Number(arr[i]) === n) {
            alert(` ${n} thuộc trong mảng với index ${i}`);
            return i;
        }
    }
    alert(` ${n} không thuộc trong mảng`);
    return -1;
}
let s1 = Number(prompt("Nhập vào độ dài của mảng:"));
let a = nhapMang(s1);
alert(" Xuất mảng:");
xuatMang(a);
alert(" Đảo ngược mảng:" + daoNguocMang(a));
alert(` Tổng của mảng là : ${tongPTMang(a)}`);
alert(" Kiểm tra 1 số có thuộc mảng không:");
checkMang(a);