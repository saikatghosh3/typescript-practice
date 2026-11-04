// make a variable which can store number and string

let userId : number | string;

userId = 192
console.log(userId);
userId = "USA-123";
console.log(userId);

// Problem 2: একটি Variable তৈরি করো, যেখানে তিন ধরনের Status রাখা যাবে:  this is maninly literal union type 
let userStatus : "active" | "inactive" | "pending";
userStatus = "active";
console.log(userStatus);
userStatus = "pending"
console.log(userStatus);

// 3. Function Parameter একটি Function তৈরি করো, যেটি Number অথবা String গ্রহণ করবে।

function displayValue (value: number | string): void{
    console.log(value);
    
}

displayValue(500);

// 4.Product Price: একটি Function তৈরি করো, যেখানে Product Price Number অথবা String হতে পারবে।
function productPrice(price : number | string): void{
    if(typeof price === "number"){
        console.log(price * 100);
        
    }else{
        console.log(price);
        
    }
}

productPrice(100);
productPrice("free");




// type alias 
// make a type and use it 
type age = number;

let userAge : age = 12;
console.log(userAge);


// make user type and use it 

type User={
    name: string;
    age: number;
    isActive : boolean;
}


const user1 :User = {
    name:"saikat",
    age: 20,
    isActive: true,
}

console.log(user1);



// make product information 

type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
}


const product1:Product = {
   id: 1,
    name: "Perfume",
    price: 1500,
    category: "Fragrance"
};

console.log(product1)



// function type Alias 

 type  calculate = (a:number, b: number) => number;

 const add: calculate = (a,b)=> {
    return a+b;
 }

 console.log(add(4,5));




//  Interface problem : 

 interface Student  {
   name: string;
   age: number;
 }

 const student : Student = {
    name: "saikat",
    age : 23,
 }