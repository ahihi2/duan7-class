// function tính S = 1!+2!+3!+....n! với n nhập từ bàn phím;
// let n = Number(prompt("Nhập 1 số n bất kỳ từ bàn phím:"));
let tinhGT = function(n) {
    let tong = 0;
    let gt = 1;
    for ( let i = 1; i <= n;i++) {
        gt*=i;
        tong+=gt;
    }
    return tong;
}
let a = Number(prompt("Nhập 1 số n bất kỳ từ bàn phím:"));
alert(tinhGT(a));