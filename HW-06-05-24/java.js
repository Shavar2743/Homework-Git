/* function add(a, b) {
    return a + b;
  } */

let a = 10
let b = 5

let add = (a,b) => a + b;

/////////////////////////////////////////////

let numbers = [5,11,8,20,7,15];

let fixNumbers = numbers.filter(number => number > 10);
console.log(fixNumbers)

/////////////////////////////////////////////

let animals = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra"];

let bigAnimals = animals.map(animal => animal.toUpperCase())
let lowAnimals = animals.map(animal => animal.toLowerCase())

console.log(bigAnimals, lowAnimals);

/////////////////////////////////////////////

let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];

let peopleName = people.map(people => people.name)

console.log(peopleName)
