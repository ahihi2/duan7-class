function hocSinh(name,id,lop,address,birdYear) {
    this.address = address;
    this.id = id;
    this.name = name;
    this.lop = lop;
    this.birdYear = birdYear;

    this.calcAge = function() {
        this.age = 2025-this.birdYear;
        return this.age;
    }
}
const hs1 = new hocSinh("tung",2310,10,"HN",2005);
const hs2 = new hocSinh("ktung",2320,11,"HCM",2006);
console.log(hs1);
console.log(hs2);
hocSinh.prototype.xinChao = function() {
    alert(` Xin chao ban ${this.name}`);
};
hocSinh.prototype.email = "tungok@gmail.com";
console.log(hs1.hasOwnProperty("email"));
console.log(hocSinh.prototype.hasOwnProperty("email"));

console.log(hs1);


