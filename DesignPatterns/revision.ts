interface Person {
       name: string;
       age: number;
}
const person: Person = {
    name: "",
    age: 0
};

// (function sayHello(person: Person) {
//     console.log(`Hello ${person.name}`);
// }(person))


let tuble: [number, string, number][];

tuble = [[1, "a", 1], [2, "b", 2], [3, "c", 3]];

let fn: (a: number, b: number) => number;


fn = (a, b) => a + b;

// this is some text


const add = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;
const multiply = (a: number, b: number) => a * b;

function calculate(fn: (a: number, b: number) => number, a: number, b: number) { return fn(a, b) }
let calculateV2 = (fn: (a: number, b: number) => number, a: number, b: number) => fn(a, b);

// let { name, age } = person;
// console.log(calculate(add, 1, 2));



console.log(person);



class vehicle{
    color: string;
    constructor(color: string){
        this.color = color;
    }
    
}