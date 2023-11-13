// let a = 5;

// switch (a) {
//     case 1:
//     console.log("Too Small");
//     break;
//     case 2:
//     console.log("Benar")
//     break;
//     case 3:
//     console.log("Too Big");
//     break;
//     default:
//     console.log("Not Found");
//     break;
// }


// let language = "French";
// let greeting = null;

// switch(language){
//     case "English":
//         greeting = "Good Morning"
//     break;
//     case "Spanish":
//         greeting = "Buenos Dias"
//     break;
//     case "French":
//         greeting = "Bonjour"
//     break;
//     default:
//         greeting = "Hello World!"
// };

// console.log(greeting); 

// let language = "Indonesia";

// switch(language){
//     case "English":
//         console.log("Good Morning")
//         break;
//     case "Spanish":
//         console.log("Buenos Dias")
//         break;
//     case "French":
//         console.log("Bonjour")
//         break;
//     case "Indonesia":
//         console.log("Selamat Pagi")
//         break;
//     default:
//         console.log("Hello World")
// };

// let i = 0

// for(i=0; i <= 100; i++){
//     console.log(i)
// };

// let umur = 18;

// if(umur > 17){
//     console.log("Boleh Membuat Ktp")
// }else{
//     console.log("Tidak Boleh Membuat KTP")
// };

// // Operator matematika
// let pertambahan = 1 + 1;
// let pengurangan = 5 - 1;
// let perkalian = 2 * 3;
// let bagi = 6 / 2;
// let modulus = 9 % 4;
// console.log(pertambahan, pengurangan, perkalian, bagi, modulus);

// let harga = 5000;
// let jml_barang = 5;

// if(harga > 10000 || jml_barang > 2){
//     console.log("Anda Mendapatkan Diskon")
// }else{
//     console.log("Harga dan Jumlah Barang tidak memenuhi kriteria diskon");
// };

// let coba = 4 === "4";

// console.log(coba);

// let i = 100

// for(i=100; i > 0; i--){
//     console.log(i)
// };
//Looping for of
// let myArray = ["Reza, Noval, Eko, Arif"];

// for(let arrayItem of myArray){
//     console.log(arrayItem.toUpperCase())
// };

// console.log(myArray);

//Looping For dan While
// let i = 1;

// while(i <= 100) {
//     console.log(i);
//     i++;
// }

// for(i=1; i < 100; i++){
//     console.log(i);
// }

// function perkalian(x, y){
//     let hasil = x * y;
//     console.log(hasil);
// }

// perkalian(10, 5);


// function perkalian(x, y){
//     return x * y;
// }

// let adalah = perkalian(10, 5);

//Do while
// let i = 1;

// do{
//     console.log(i);
//     i++
// }while(i <= 100);

// let firstName = "John";
// let lastName = "Doe";
// let age = 25;
// let isMarried = true;

// console.log(firstName, lastName, age, isMarried);

// let score = 55;

// if(score > 90){
//     console.log("Selamat anda mendapatkan nilai A");
//   } else if (score > 80) {
//     console.log("Anda mendapatkan nilai B")
//   } else if (score > 70){
//     console.log("Anda mendapatkan nilai C")
//   } else if (score > 60){
//     console.log("Anda mendapatkan nilai D")
//   } else {
//     console.log("Anda mendapatkan nilai E")
//   }

// const car = {
//     brand: 'Toyota',
//     model: null,
// }

// const car2 = {
//     brand: 'Honda',
//     model: undefined,
// }

// console.log(car);
// console.log(car2);

// const carJson = JSON.stringify(car);
// const carJson2 = JSON.stringify(car2);

// console.log(carJson);
// console.log(carJson2);

// let a = 5;

// a += 10;

// console.log(a);

// const  orang = {
//     nama: "Muhamad Reza Pratama",
//     umur: 34,
//     pekerjaan: "Web Developer",
//     "Hobi": "Futsal"
// }

// delete orang["Hobi"]

// console.log(orang)
// orang = {nama: "Reza"}
// console.log(orang.nama)

// orang.pekerjaan = "Back-End"
// orang["Hobi"] = "Ngoding"
// console.log(orang.pekerjaan);
// console.log(orang["Hobi"])



// console.log(`Nama Saya Adalah ${orang.nama} Dan Hobi Saya Adalah ${orang["Hobi"]}`)


// let character = {firstname, lastname, ...restData} = {
//     firstname: "Reza",
//     age: 19,
//     lastname: "Pratama",
//     Hoby: "Ngoding"
// }

// console.log(firstname)
// console.log(lastname)
// console.log(restData)

// let buah = ["Apple" , "Mango", "Strawberry"];
// let buahKedua = ["Semangka", "Jeruk"];

// let Hasil = [...buah, ...buahKedua]
// // buah.push("Semangka");
// // buah.pop()

// // buah.shift()
// // buah.unshift("Apple")

// // delete buah[1]
// // buah.splice(1)
// console.log(Hasil)
// console.log(...buahbuah);

// let buah = ["Apel"]

// let [Fruit1, Herfruit = "Semangka"] = buah

// console.log(Fruit1, Herfruit)

// let myMap = new Map([
//     ['a', 'b'],
//     ['c', 'd'],
//     [true, true]
// ]);

// console.log(myMap)


// const myMap = new Map([
//     ['1', 'a String key'],
//     [1, 'a number key'],
//     [true, true]
//   ]);

// const capital = new Map([
//     ["Jakarta", "Indonesia"],
//     ["London", "England"],
//     ["Tokyo", "Japan"]
//   ]);
  
// console.log(capital.size) //3
// console.log(capital.get("London")) //England
// capital.set("New Delhi", "India")
// console.log(capital.size) //4
// console.log(capital.get("New Delhi")) //India
// capital.set("Kuala Lumpur", "Malaysia")
// console.log(capital.size)
// console.log(capital.get("Kuala Lumpur")

// for (let i = 0; i < 10; i++) {

//     // jika true, lewati sisa kode dan lanjut ke loop berikutnya
    
//     if (i %  2== 0) continue;
    
//     console.log(i);
    
//     }

// let car = {
//     brand: "Toyota",
//     model: "Corolla",
//     "Jumlah Roda": 4
// };

// console.log(car["Jumlah Roda"])

// function sum(a, b){
//    return a + b;
// }

// console.log(sum(5,6))

// let buah = "Buah Naga";

// console.log(buah.slice(5, 9))


// let sayHello = (Hello) => {
//     console.log("Hello Reza")
// };
// sayHello()

// let panggil = () => console.log("Selmat pagi")

// panggil()

// const multiply = (a, b) => a + b;
// console.log(multiply(3, 4));
