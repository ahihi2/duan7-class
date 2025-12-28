class Bank {
    constructor(bankName,pin) {
        this.bankName = bankName;
        this.pin = pin;
        this._bankAccount = 0;
    }
    napTien(value) {
        this._bankAccount  += value;
        return this._bankAccount;
    }
    rutTien(val) {
        if(val > this._bankAccount) {
            console.log("So du khong du");
        }
        else {
            this._bankAccount -= val;
            console.log("Rut tien thanh cong , so du:" + this._bankAccount);
        }
    }
}
let s1 = new Bank("MBBank",1234);
console.log(s1.bankName);
console.log(s1.pin);
s1.napTien(2000);
s1.rutTien(200);
console.log(s1._bankAccount);



