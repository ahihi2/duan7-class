class School {
    constructor(name,id,birdYear) {
        this.name = name;
        this.id = id;
        this.birdYear = birdYear;
    }
    calcAge() {
        return 2025 - this.birdYear;
    };
};
class Students extends School {
    constructor(name,id,birdYear,major) {
        super(name,id,birdYear);
        this.major = major;
    }
    showInfor() {
        console.log(` ${this.name} dang hoc ${this.major}`);
    }
};
let s1 = new School("tung",2310,2005);
console.log(s1.name);
console.log(s1.calcAge());
let s2 = new Students("ktung",1,2006);
console.log(s2);
s2.showInfor();

