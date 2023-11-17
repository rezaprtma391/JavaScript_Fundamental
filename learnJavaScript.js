// Arrow function
// let panggilAku = () => {
//     console.log("Hello World")
// };

// let callme = (name) => console.log("Hello", name)

// callme("Reza");
// (panggilAku())


//Object
// let car = {
// name: "Ford",
//     model: "Mustang",
//     year: 2018,
//     "Jumlah Roda": 4
// } 

// console.log(`Mobil Ini Merknya Adalah ${car.name} Dan Modelnya Adalah ${car.model} Dan Tahun Produksi Adalah ${car.year} Dan Jumlah Rondanya Adalah`, (car["Jumlah Roda"]));

// Object Oriented programming
// const  Car = {
//     // Properties
//     brand: "ford",
//     color: "red",
//     maxSpeed: 200,
//     chassisNumber: "f-1",

//     //Method
//     drive: () => {
//         console.log("driving")
//     },
//     reverse: () => {
//         console.log("reversing")
//     },
//     turn: () => {
//         console.log("turning")
//     },
//     wheelsTotal: () => {
//         console.log(4)
//     }
// };

// console.log(Car.brand);
// console.log(Car.color);
// console.log(Car.maxSpeed);
// console.log(Car.chassisNumber);
// Car.drive();
// Car.reverse();
// Car.turn();
// Car.wheelsTotal();

// function Car (brand, color, maxSpeed, chassisNumber) {
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     this.chassisNumber = chassisNumber;
// }

// Car.prototype.drive = function () {
//     console.log(`${this.brand} ${this.color} is driving`);
// }

// Car.prototype.reverse = function () {
//     console.log(`${this.brand} ${this.color} is reverse`);
// }

// Car.prototype.turn = function () {
//     console.log(`${this.brand} ${this.color} is turning`);
// }

// const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
// const car2 = new Car('Honda', 'Black', 180, 'ho-1');
// const car3 = new Car('Suzuki', 'Red', 220, 'su-1');
 
// console.log(car1);
// console.log(car2);
// console.log(car3);
 
// car1.drive();
// car2.drive();
// car3.drive();

// function Mobil (brand, warna, kecepatanMaksimal, nomerCasis ) {
//     this.brand = brand;
//     this.warna = warna;
//     this.kecepatanMaksimal = kecepatanMaksimal;
//     this.nomerCasis = nomerCasis;
// }

// Mobil.prototype.menyetir = function () {
//     console.log(`${this.brand} ${this.warna} adalah menyetir`);
// }

// Mobil.prototype.mundur = function () {
//     console.log(`${this.brand} ${this.warna} adalah mundur`);
// }

// Mobil.prototype.turun = function () {
//     console.log(`${this.brand} ${this.warna} adalah turun `)
// }

// const car1 = new Mobil("Toyota", "Merah", 200, 4);
// const car2 = new Mobil("Suzuki", "Hijau", 300, 7);
// const car3 = new Mobil("Honda", "Biru", 500, 10); 
// console.log(car1);
// console.log(car2);
// console.log(car3);

// car1.menyetir()
// car2.menyetir()
// car3.menyetir()

// const oneTwoThree = [1, 2, 3];
// const sevenEightNine = [7, 8, 9];

// const result = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];

// console.log(result);

const buah = ["Apple", 10];

console.log(buah);