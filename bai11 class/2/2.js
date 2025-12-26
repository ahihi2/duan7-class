class hocSinh {
    constructor(name,birdYear,id) {
        this.name = name;
        this.birdYear = birdYear;
        this.id = id;
    }
    calcAge(n) {
        return n - this.birdYear;
    };
    static showName() {
        return this.name;
    };
};
let hs1 = new hocSinh("tung",2005,23);
let hs2 = new hocSinh("ktung",2002,21);
let hs3 = new hocSinh("bo tung ok",2003,22);
console.log(hs1);
console.log(hocSinh.showName());
console.log(hs2.calcAge(2025));

;

