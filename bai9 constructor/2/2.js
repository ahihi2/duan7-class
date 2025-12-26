const students = {
    name: "Phung Khánh Tùng",
    birdYear:2005,
    getAge :function () {
        this.age = 2025 - this.birdYear;
        return this.age;
    },

};
console.log(students.name);
console.log(students.birdYear);
console.log(students.getAge());
console.log(students);
students.address = "Hn";
console.log(students);
delete students.name;
console.log(students);
students["a bc"] = "vcl";
console.log(students);




