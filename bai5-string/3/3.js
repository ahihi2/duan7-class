// hàm kiểm tra mật khẩu hợp lệ
function isPassWordOk(pass) {
    while(true) {
        pass = prompt("Nhập lại mật khẩu của bạn:");
        if(pass.length < 6) {
            alert("Mật khẩu quá ngắn.Vui lòng nhập lại!");
            continue;
        }
        if(!/[A-Z]/.test(pass)) {
            alert("Mật khẩu phải chứa ít nhất 1 ký tự viết hoa");
            continue;
        }
        if(!/[a-z]/.test(pass)) {
            alert("Mật khẩu phải chứa ít nhất 1 chữ thường");
            continue;
        }
        if(!/[0-9]/.test(pass)) {
            alert("Mật khẩu phải chứa ít nhất 1 chữ số");
            continue;
        }
        // alert(`Mật khẩu hợp lệ,mật khẩu của bạn là : ${pass}`);
        return pass;
    }
}

