//  hàm tính giai thừa nhập từi bàn phím
// function tinhGT(n) {
//     let tong= 0;
//     for(let i =0;i <= n;i++) {
//         tong+=i;
//     }
//     return tong;
// }
// let a = Number(prompt("Nhập 1 số bất kỳ từ bàn phím:"));
// alert(tinhGT(a));

// giải pt bậc 2 ax2 + bx + c = 0
let giaiPTBac2 = function (a, b, c) {
    while (true) {
        if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
            alert("Nhập không hợp lệ vui lòng nhập lại");
        }
        break;
    }
    if (a == 0) {
        if (b == 0) {
            if (c == 0) {
                alert(` Phương trình vô số nghiệm`);
            }
            else {
                alert(` Phương trình vô nghiệm`);
            }
        }
        else {
            alert(`Phương trình có nghiệm duy nhất x = ${(-c) / b}`);
        }
        return;
    }
    let delta = (b * b) - 4 * a * c;
    if (delta < 0) {
        alert(` Phương trình vô nghiệm`);
    }
    else if (delta == 0) {
        let x = (-b) / (2 * a);
        alert(` Phương trình có nghiệm kép x = ${x}`);
    }
    else if (delta > 0) {
        let x1 = ((-b) + Math.sqrt(delta)) / (2 * a);
        let x2 = ((-b) - Math.sqrt(delta)) / (2 * a);
        alert(` Phương trình có 2 nghiệm kép x1 = ${x1}, x2 = ${x2}`);
    }
}
let c = Number(prompt(` Nhập a:`));
let y = Number(prompt(` Nhập b:`));
let z = Number(prompt(` Nhập c:`));
if (!Number.isNaN(c) && !Number.isNaN(y) && !Number.isNaN(z)) {
    alert(`Dữ liệu hợp lệ , phương trình của bạn có dạng ${c}x2 + ${y}x + ${z}`);
}
giaiPTBac2(c, y, z);
// function giaiPtB2(a, b, c) {
//     // kiểm tra input hợp lệ
//     if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
//         alert("Vui lòng nhập số hợp lệ cho a, b, c.");
//         return;
//     }

//     // nếu a = 0 -> phương trình bậc nhất hoặc vô nghiệm / vô số nghiệm
//     if (a === 0) {
//         if (b === 0) {
//             if (c === 0) {
//                 alert("Phương trình có vô số nghiệm.");
//             } else {
//                 alert("Phương trình vô nghiệm.");
//             }
//         } else {
//             let x = -c / b;
//             alert(`Phương trình bậc nhất có nghiệm x = ${x}`);
//         }
//         return;
//     }

//     const delta = b * b - 4 * a * c;

//     if (delta > 0) {
//         const sq = Math.sqrt(delta);
//         const x1 = (-b + sq) / (2 * a);
//         const x2 = (-b - sq) / (2 * a);
//         alert(`Phương trình có 2 nghiệm phân biệt:\nx1 = ${x1}\nx2 = ${x2}`);
//     } else if (delta === 0) {
//         const x = -b / (2 * a);
//         alert(`Phương trình có nghiệm kép: x1 = x2 = ${x}`);
//     } else {
//         alert("Phương trình vô nghiệm (không có nghiệm thực).");
//     }
// }

// // dùng biến rõ ràng từ prompt
// const a = Number(prompt("Nhập a:"));
// const b = Number(prompt("Nhập b:"));
// const c = Number(prompt("Nhập c:"));

// if (!Number.isNaN(a) && !Number.isNaN(b) && !Number.isNaN(c)) {
//     alert(`Nhập thành công, phương trình có dạng: ${a}x^2 + ${b}x + ${c}`);
// } else {
//     alert("Một trong các giá trị bạn nhập không phải số.");
// }

// giaiPtB2(a, b, c);
