// opitional and default 
// 1. User Greeting
// Question: একটি Function তৈরি করো, যেখানে name বাধ্যতামূলক এবং age Optional হবে। Age দেওয়া থাকলে সেটিও Print করবে।

export function greetUser(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello ${name}, your age is ${age}`;
  }

  return `Hello ${name}`;
}

console.log(greetUser("Saikat", 28));
console.log(greetUser("Rahul"));


// 2.Calculate Total Price
// Question: একটি Function তৈরি করো যেখানে Product Price বাধ্যতামূলক এবং Delivery Charge Optional হবে। Delivery Charge দেওয়া থাকলে সেটি Price-এর সঙ্গে যোগ করবে।

export function calculatePrice(price:number, delivery?:number):number{
    if(delivery !== undefined){
        return price + delivery;
    }
    return price;
}
console.log(calculatePrice(1000, 100)); 
console.log(calculatePrice(1000));     


// find employee salary 
// basic salary must but bonus is optional 
export function calculateSalary(
  basicSalary: number,
  bonus?: number
): number {
  if (bonus !== undefined) {
    return basicSalary + bonus;
  }

  return basicSalary;
}

console.log(calculateSalary(30000, 5000)); 
console.log(calculateSalary(30000));



// default paramerter 

export function greetUserDefault(name : string = "Guest"):string{
return `Hello ${name}`
}
console.log(greetUserDefault("Saikat")); 
console.log(greetUserDefault()); 



// calculate discount 

function calculateDiscount (price: number, discount:number = 10):number{
return price - (price * discount)/100;
}

console.log(calculateDiscount(1000)); 
console.log(calculateDiscount(1000, 20));