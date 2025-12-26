while (true) {
    let n = Number(prompt("Nhập số nguyên dương n :"));
    while (!Number.isInteger(n) && n <= 0) {
        n = Number(prompt("Nhập lại số nguyên dương n :"));
    }
    alert(`${n} hợp lệ`);
    let isFrame = true;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            isFrame = false;
            break;
        }
    }
    if (isFrame) {
        alert(`${n} là số nguyên tố`);
    }
    else {
        alert(`${n} không là số nguyên tố`);
    }
    let b = prompt((` Bấm 1 để kết thúc hoặc bỏ qua để tiếp tục `));
    if (b == 1)
        break;
}