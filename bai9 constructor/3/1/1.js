const students = function(name,id,birdYear,address) {
    this.name = name;
    this.id = id;
    this.address = address;
    this.birdYear = birdYear;

    this.getAge = function() {
        this.age = 2025 - this.birdYear;
        return this.age;
    };
};
let s1 = new students("phung khanh tung",2310,2005,"hn");
console.log(s1);
s1.lop = "10a5";
console.log(s1);




