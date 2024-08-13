function hello<T>(element: T): T[]
{
       return [element , element , element];
}

function identity<T>(item:T):T
{
       return item;

}

// console.log(identity("hello"));
// console.log(identity("welcome"));
// console.log(hello("world"));

function getRandomElement<T>(elements:T[]):T
{
       const randIndex = Math.floor(Math.random() * elements.length);
       return elements[randIndex];


}
// console.log(getRandomElement([1, 2, 3, 4]));
// console.log( getRandomElement(["str1","str2","str3","Str4"]));
// console.log(getRandomElement([true, false, false, false]));



function makenumber<T = number>():T[]
{
       return [];

}

const str = makenumber<string>()

interface Cat {
       name: string;
       age: number;
       numOflived: number;
}
interface Dog{
       name: string;
       age: number;
       breed: string;

}



function isCat(animal: Cat | Dog) : animal is Cat
{
       return (animal as Cat).numOflived !== undefined; 
}


function printNumOflivesORbreed(animal: Cat | Dog)
{
       if (isCat(animal))
       {
             return  animal.numOflived
       }
       else
       {
            
       }

}




const mydog = { name: "safsd", age: 12, breed: "sd" };

printNumOflivesORbreed(mydog);


