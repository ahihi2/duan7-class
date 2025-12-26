function nhapDiem() {
    let arr = [];
    let n = parseInt(prompt("Nhập số điểm số mà bạn muốn nhập (số nguyên và lớn hơn 0):"));
    while (true) {
        if (!Number.isInteger(n) || n <= 0) {
            n = parseInt(prompt("Vui lòng nhập lại (số nguyên và lớn hơn 0):"));
            continue;
        }
        else {
            break;
        }
    }
    for (let i = 0; i < n; i++) {
        let a = Number(prompt(` Điểm thứ ${i + 1}:`));
        arr.push(a);
    }
    alert(` Mảng điểm sau khi nhập: ${arr}`);
    return arr;
}
function tinhDTB(arr) {
    let dtb = arr.reduce((a,b) => a+b,0);
    return dtb/ (arr.length);

}
let a =nhapDiem(); 
alert(tinhDTB(a));
