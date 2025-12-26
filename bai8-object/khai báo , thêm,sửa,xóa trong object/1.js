let students = {
    address: {
        city:"Hanoi",
        country:"VietNam",
    },
    birdYear:2005,
    name:"Phùng Khánh Tùng",
    class:"10",
    getAge: function() {
        return 2025-this.birdYear;
    },
    scores:[8,9,10],
    diemTB: function() {
        dtb = this.scores.reduce((a,b)=>(a+b),0);
        return dtb/ (this.scores.length);
    },
    "1 fullname":"Vãi cả lol",
}
console.log(students.address);
console.log(students.birdYear);
console.log(students.address.city);
console.log(students.getAge());
console.log(students.name);
console.log(students["address"]);
console.log(students.scores);
console.log(students.diemTB());
console.log(students["1 fullname"]);
console.log(students["address"]);
let s1 = prompt(`Mời bạn nhập key bạn muốn tra cứu:`);
if(students[s1]) {
    console.log(students[s1]);
}
else {
    console.log("Key bạn nhập không hợp lệ");
}
students.email = "tungkaka200@gmail.com";
students["website"] = "http://botung.com";
console.log(students);
delete students.website;
console.log(students);
students.website = "sextop1.net";
console.log(students);











