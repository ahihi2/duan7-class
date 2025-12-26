// dùng hàm tính ax2 + bx + c
let giaiPtB2 = function (a, b, c) {
    let delta = (Math.pow(b,2) - 4 * a * c);
    if (delta < 0) {
        return ` phương trình vô nghiệm`;
    }
    else if (delta == 0) {
        alert(` Phương trình có nghiệm kép`);
        let x = (-b) / (2 * a);
        return ` Phương trình có nghiệm kép x1 = x2 = ${x}`;
    }
    else if(delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return ` Phương trình có 2 nghiệm phân biệt ${x1} và ${x2}`;
    }
}
console.log(giaiPtB2(2, 3, 1));
console.log(giaiPtB2(1,6,8));