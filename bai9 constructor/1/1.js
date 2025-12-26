const students = function(hoten,lop,maSV,namSinh) {
    this.hoten = hoten;
    this.lop = lop;
    this.maSV = maSV;
    this.namSinh = namSinh;
     
    this.calcAge = function () {
        this.age = 2025 - this.namSinh;
        return this.age;
    }
}
let s1 = new students("tùng","10a6",2310,2005);
let s2 = new students("tùngok","10a2",2311,2002);
let s3 = new students("bố tùng","10a3",2312,2003);
let s4 = Object.keys(s1);
// Object.freeze(s1);
Object.seal(s1);
s1.hoten = "ddax sua doi";
s1.gt = "nam";
console.log(s1);
delete s1.namSinh;
console.log(s1);










