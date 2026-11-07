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


// make a employee interface  
interface Employee {
    id: number; 
    name : string;
    department: string;
    salary: number; 
}

const employee: Employee = {
    id:1, 
    name:"saikat", 
    department: "Development", 
    salary: 3000
}

console.log(employee);


// optional Property: 

interface User1 {
  name: string;
  age: number;
  email?: string;
}
const userfour: User1 = {
    name: "Rahim",
    age: 25
};

const userTwo: User1 = {
    name: "Karim",
    age: 30,
    email: "karim@gmail.com"
};



// interface inheritance 

interface Person {
    name: string;
    age: number;
}

interface  Employee extends Person{
    employeeId: number;
    salary: number;
}


const employeenew: Employee = {
    name: "Saikat",
    age: 25,
    employeeId: 101,
    salary: 35000
};
console.log(employeenew)




// Type assertion 
let value : unknown = "Hello Typescript";
let result = value as string;

console.log(result.toUpperCase());



// narrowing Down 
function showValue(value: string |number) : void{
    if(typeof value === "string"){
        console.log(value.toUpperCase());
        
    }else {
        console.log(value.toFixed(2))
    }
}

showValue("hello");
showValue(100);

// 2.
 function showName(name: string | null): void{
    if(name === null){
        console.log("no data ")
    }else{
       console.log(name.toUpperCase())
    }
}

showName("saikat")
showName(null);


// in operator |

type Admin = {
    name: string;
    role: string;
};

type Customer = {
    name: string;
    purchase: number;
};

function showUser(user: Admin | Customer): void {

    if ("role" in user) {
        console.log("Admin:", user.role);
    } else {
        console.log("Customer:", user.purchase);
    }

}

showUser({
    name: "Saikat",
    role: "Admin"
});

showUser({
    name: "Rahim",
    purchase: 5
});




// Generics 
function getvalue<T>(value: T): T{
    return value
}

console.log(getvalue(<number>(100)));
console.log(getvalue(<string>("hello")));
console.log(getvalue(<boolean>(true)));





