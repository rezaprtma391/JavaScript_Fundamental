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
const car = {
    // Properties
    brand: "ford",
    color: "red",
    maxSpeed: 200,
    chassisNumber: "f-1",

    //Method
    drive: () => {
        console.log("driving")
    },
    reverse: () => {
        console.log("reversing")
    },
    turn: () => {
        console.log("turning")
    },
    wheelsTotal: () => {
        console.log(4)
    }
};

console.log(car.brand);
console.log(car.color);
console.log(car.maxSpeed);
console.log(car.chassisNumber);
car.drive();
car.reverse();
car.turn();
car.wheelsTotal();