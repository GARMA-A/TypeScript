
//You can Use Nodemon For Any Language
// Let myVar : type = value 

// Any type return the type script to js
// Do Not Do That
// let x: any = 12;
// x = "momo";
// let a, b;
// x(a=12 , b = 15);

function hello(st:string=""):string
{
       return `hello ${st}`
}


// must never return any thing  like it must return void always
function makeErro():never
{
       throw Error("Error");
}


const allwaysYouWillUseThis = {}; // <------
const obj:object = { name: "girgis", age: 20 };
const person: { name: string, age: number } = { name:"girgis" , age:20};




function getAndReturnObject(person: { name: string, age: number }): object
{
       const { name, age } = person;
       return { name, age };  
}

const obj2: object = (person:{name:string , age:number}) => { return person};




// You can Create Your Own Type

type myNum = number;
let x: myNum = 12;

type PERSION = {
       name: string,
       age:number
}

// You can Give it Default values

type Person ={
       name: "girgis",
       age: 20
};

function getAndReturnObject2(person: Person): object {
   const name =  person.name ;
   const age = person.age;
   return { name, age };
}


// Optional Types

type Person2 =
       {
              readonly name: string, // only can read canNot edit it like const
              readonly age: number,
              haveCar?: boolean  // optional
       };

let myPerson: Person2 = { name: "Girgis", age: 20 }; 

//Intersection Types

type circle = {
       radius: number
};
type color = {
       color: string
};

type circleWithColor = circle & color;

type circleWithColorAndDraw = circle & color & { haveMouse: boolean , haveEyes?:boolean };

const happyFace: circleWithColor = { radius: 12, color: "yellow" }; 
const happyFace2: circleWithColorAndDraw = { radius: 12, color: "yellow"  , haveMouse:true}; 



// Arrays

const activeUsers: string[] = [];  // define array of strings
const activeUsers2: Array<string> = []; // the same array of strings

const xBoard: string[][] = [['x', 'o', '.'], ['o', 'x', 'o'], ['.', '.', '.']];

let array: (number | string)[] = [10, "str", 5, 12, "str"];

const arr: (string | number | boolean)[] = [1, "d", true, "l", 12];




// Tubles
// you must put number of element with specefic types
// you can not put less or more 

type HttpResponse = [number, string];

const RGBcolor: [number, number, number] = [255, 0, 12];
const response1: HttpResponse = [404, "Not Found"];
const response2: HttpResponse = [200, "Ok"];

const responses: HttpResponse[] = [response1, response2];



// Enums ?
// you want to make obj or array with fixed values


const enum OrderStatus { PENDING, SHIPPED, DELIVERED, RETURNED=10 };
// i dont have any thing else in my app
// PENDING is = 0 , SHIPPED = 1 so on... you can edit that  

const myStatus = OrderStatus.DELIVERED; 

function isDelivered(status: OrderStatus):boolean
{
       return status === OrderStatus.DELIVERED || status == 10;
}

console.log(isDelivered(OrderStatus.RETURNED)); 
// return true because RETURNED == 10




// interfaces  (the bad types😅 without "=" sign)



interface Point {
       x: number;
       y: number;
}

interface Person3 {
       readonly id:number
       first: string;
       last: string;
       nickname?: string; 
}


const thomas: Person3 = { id: 1234, first: "thomas", last: "john" };
// thomas.id = 12; // Error
// thomas.last = "dani"; // OK Fine



// Interface Methods


interface Person4 {
       readonly id: number;
       name: string;
       nickName?: string;
       sayHi: () => string; 
       sayWelcome(name:string):string // just another way to do
}


const Girgis: Person4 = { id: 111, name: "Girgis Emad", sayHi: () => "Hi"  , sayWelcome:(name:string) => `Welcome ${name}`};
console.log( Girgis.sayWelcome("Ramy")) // Welcome Ramy



// Reopen The Interface

interface calculator {
       add: (a: number, b: number) => number;
};


interface calculator {
       multiply?: (a: number, b: number) => number;
};


const myCalculator: calculator =
{
       add: (x: number, y: number) => x + y,
       multiply: (a: number, b: number) => a * b
};

console.log(myCalculator.add(4, 4)); // 8



// Extending or inheret interfaces


interface CompleteCalculator extends calculator,Point
{
       subtract: (a: number, b: number) => number;
       divide: (a: number, b: number) => number;
       
};


const myCompleteCalculator: CompleteCalculator = {
  add: (x, y) => x + y, // this is not x , y from Point you cannot do that 
  subtract: (num1: number, num2: number) => num1 - num2,
  divide: (num1: number, num2: number) => num1 / num2,
  x: 10,
  y: 15,
};


console.log(myCompleteCalculator.add(12,13)); // 25

// Difference Between  interfaces and Types


/*
- You can not Re Open the Type And Add Some stuff Like interfaces
- In interfaces you can not descripe any shape that is not obj
  
  tsc  --init  -> create a config json file to config 
  How you want from your type script to work

*/



























const doSomthing: () => number = (a: number = 12): number => a * 2;

