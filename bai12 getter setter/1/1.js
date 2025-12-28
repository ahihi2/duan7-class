class School {
    constructor(name,id,birdYear,score) {
        this.name = name;
        this.id = id;
        this.birdYear = birdYear;
        this._score = score;
    }
    calcAge() {
        return 2025 - this.birdYear;
    }
    get score() {
        return this._score;
    }
    set score(value) {
        if(value >0 && value <= 100) {
            this._score = value;
        }
        else {
            console.log(` Diem so khong hop le`);
        }
    }
}
let s1 = new School("tung",2310,2005,95);
console.log(s1.id);
console.log(s1.birdYear);
console.log(s1.name);
console.log(s1.score);
s1.score = 75;
console.log(s1.score);




