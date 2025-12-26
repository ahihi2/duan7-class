class student {
    constructor(name,id,birdYear,homeTown){
        this.name = name;
        this.id= id;
        this.birdYear = birdYear;
        this.homeTown = homeTown;
    }
    getAge() {
        this.age = 2025 - this.birdYear;
        return this.age;
    };
    showInfor() {
        return `${this.name} ${this.birdYear} ${this.homeTown}`;
    }
}
const hs1 = new student("tung",2310,2005,"HN");
console.log(hs1);
console.log(hs1.showInfor());
console.log(hs1.hasOwnProperty("getAge"));
console.log(hs1.prototype);
console.log(Object.getPrototypeOf(hs1));


