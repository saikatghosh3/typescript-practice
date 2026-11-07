import { calculatePrice } from './optional-default';
//Problem 4: একটি Array তৈরি করো যেখানে শুধু Number থাকবে। তারপর সব Number-এর যোগফল বের করো।


function addition (arr: number[]): number {
let total : number = 0 ;
for(let i = 0; i<arr.length; i++){
    total += arr[i]
    
}
return total
}

console.log(addition([33,55,66,74,45,3]))

// Problem 2: একটি Number Array থেকে সবচেয়ে বড় Number বের করো।
let numbers : number [] = [10, 23,45,67,85,44];
let largest : number = numbers[0]

for (let num of numbers){
    if(num> largest){
        largest = num
    }
}


console.log(largest);
// Problem 4: একটি Tuple-এর Value Access করে User Information Print করো।
let student: [string, number] = ["Rahim", 22];

console.log(`Name: ${student[0]}`);
console.log(`Age: ${student[1]}`);


// Problem 4: একটি Function Number পেলে সেটিকে ২ দিয়ে গুণ করবে, String পেলে Uppercase করবে।
function processValue (value: string | number): void {
    if(typeof value === "number"){
        console.log( value *2);
        
    } else {
        console.log(value.toUpperCase());
        
    }
}

processValue(44);
processValue("saikat")


// user object er jonno type alis ber koro. 
type User = {
    id: number;
    name: string;
    email: string;
};

const user: User = {
    id: 1,
    name: "Saikat",
    email: "saikat@gmail.com"
};

console.log(user.name);


// Problem 3: Product-এর জন্য Type Alias তৈরি করো, যেখানে Discount Optional হবে।
type Product = {
    name : string;
    price : number;
    discount ?: number; 

}

const product : Product = {
    name :"ice-cream", 
    price : 130
};

console.log(product.price)


// Function-এর জন্য Type Alias তৈরি করো, যেটি দুটি Number গ্রহণ করে Number Return করবে।

type Calculator = (a: number, b: number) => number;

const  multiply: Calculator = (a,b)=>{
    return a +b; 
}
console.log(multiply(2,6));


// interface inheritance 

interface Person {
    name: string;
    age: number;

}

interface Developer extends Person {
    skills: string[];
}

const developer : Developer = {
    name: "saikat", 
    age: 25, 
    skills: ["react", "html", "css", "typescript"]
}

console.log(developer);


// use enum and make a function to check role.
enum UserRole {
      Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

function checkRole(role:UserRole): void{
    if(role === UserRole.Admin){
        console.log("full Access");
        
    } else {
        console.log("limited Access");
        
    }
}

checkRole(UserRole.Admin);
checkRole(UserRole.Guest);

// optional parameter  use kore greeting function 

function greet (name: string, age?: number): void{
    console.log(`hello ${name}`);
    if (age !==undefined){
        console.log(`age: ${age}`);
        
    }
    
}
greet("Saikat");
greet("Rahim", 25);


// default parameter 
function calculatePrice (price: number, tax: number = 10): number {
    return price + (price * tax/100);
}

console.log(calculatePrice(1000));
console.log(calculatePrice(1000, 15));



// type assertion 
let value : unknown = "Hello";
let result  = value as string; 
console.log(result.toUpperCase());


// Unknown Value-কে Number হিসেবে ব্যবহার করো।
let value : unknown =100; 
let resultone = value as number; 
console.log(resultone.toFixed(2));
