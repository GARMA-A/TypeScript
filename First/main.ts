
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

const xBoard: string[][] = [['x','o','.'],['o','x','o'],['.','.','.']];



































const doSomthing: () => number = (a: number = 12): number => a * 2;

const arr: (string | number | boolean)[] = [1, "d", true, "l", 12];
