const hs = {
    name:"tungf",
    lop:"1a",
    birdYear:2005,
    email:"tung@gmail.com",
    getAge : function() {
        this.age = 2025 - this.birdYear;
        return this.age;
    },
}
console.log(hs.name);
console.log(hs.getAge());
console.log(hs);
hs.yahoo = "tungok@yahoo.com";
hs.birdYear = 2006;
console.log(hs);
delete hs.email;
console.log(hs);
console.log(Object.entries(hs));
console.log(Object.keys(hs));
console.log(Object.values(hs));
Object.seal(hs);
delete hs.yahoo;
hs.yahoo = "da thay doi";
console.log(hs);







