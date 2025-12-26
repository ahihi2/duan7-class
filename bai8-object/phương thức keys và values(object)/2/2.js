let a = {
    name : "Tùng",
    age : 20,
};
Object.freeze(a);
a.name = "sửa";
a.age = 21;
console.log(a);

