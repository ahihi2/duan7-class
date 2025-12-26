function isNameValid(name) {
    // Không được có khoảng trắng
    if (name.includes(" ")) {
        alert("Không được viết thừa khoảng trắng");
        return false;
    }

    // Không được bắt đầu bằng số
    if (!isNaN(name.charAt(0))) {
        alert("Không được bắt đầu bằng số");
        return false;
    }

    // Không được chứa "admin"
    if (name.toLowerCase().includes("admin")) {
        alert("Không được chứa từ admin");
        return false;
    }

    // Độ dài phải từ 3 đến 10 ký tự
    if (name.length < 3 || name.length > 10) {
        alert("Độ dài tên không hợp lệ");
        return false;
    }

    return true;
}

isNameValid("tùng");
