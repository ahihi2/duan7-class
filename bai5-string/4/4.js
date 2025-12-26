function maHoaTinNhan(mess) {
    const a = "abcdefghijklmnopqrstuvwxyz";
    const b = "zyxvbnmasdfghjklqwertyuiop";
    let result = "";
    for (let i = 0; i < mess.length; i++) {
        let char = mess[i].toLowerCase();
        if (a.includes(char)) {
            let index = a.charAt(char);
            result += b[index];
        }
        else {
            result += char;
        }
    }
    return result;
}
let s1 = prompt("Nhập vào 1 đoạn văn bản:");
let kp = maHoaTinNhan(s1);
alert(`Tin nhắn được mã hóa : ${kp}`);