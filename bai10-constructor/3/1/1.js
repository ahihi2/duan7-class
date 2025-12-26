const hs = function(name,lop,address,id,birdYear) {
    this.name = name;
    this.lop = lop;
    this.address = address;
    this.id = id;
    this.birdYear = birdYear;

    this.getName = function() {
        alert(` Ten cua ban la : ${this.name}`);
    }
}
let hs1 = new hs("tung",10,"hn",11,2005);
hs.prototype.email = "tung@gmail.com";
console.log(hs.prototype);
hs.prototype.getAge = function() {
    return 2025 - this.birdYear;
}
console.log(hs1.getAge());
console.log(Object.getPrototypeOf(hs1));
console.log(hs.prototype.isPrototypeOf(hs1));
hs.prototype.calcAge = function() {
    return (2025 - this.birdYear);
};
hs1.email = "tung@gmail.com";
console.log(hs1.calcAge());
console.log(hs1.hasOwnProperty("email"));
console.log(hs1.hasOwnProperty("getName"));
console.log(hs1);








 