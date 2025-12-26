// let students = "tùng,khánh tùng,phùng khánh tùng";
// let s1 = "abc acde ace oui";
// console.log(students.split(",",2));
// console.log(s1.split(" "));
function demKyTu(a) {
    let ktt = 0;
    let kth = 0;
    let kts = 0;
    let ktp = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] >= "a" && a[i] <= "z") {
            ktt++;
        }

        else if (a[i] >= "A" && a[i] <= "Z") {
            kth++;

        }
        else if (a[i] >= "0" && a[i] <= "9") {
            kts++;

        }
        else if (a[i] === " ") {
            ktp++;

        }

    }
    return `
          Chuỗi bạn vừa nhập: ${a}
          Số ký tự viết thường : ${ktt}
          Số ký tự viết hoa : ${kth}
          Số ký tự số : ${kts}
          Số ký tự khoảng trắng : ${ktp}`;
}
let s1 = prompt("Nhập vào 1 chuỗi bất kỳ");
console.log(demKyTu(s1));