// 1. create a class  with brand and model 
class Car {
    brand: string; 
    model : string; 


   constructor(brand: string, model: string){
    this.brand = brand; 
    this.model = model;
   }

}

const car = new Car("Toyota", "corolla");


// make a calculator class : 
class Calculator{
    add(a:number, b:number):number{
        return a+b;
    }
    subtract(a:number, b:number): number{
        return a-b;
    }
}

const calculator = new Calculator();

console.log(calculator.add(34,66));
console.log(calculator.subtract(340,66));




// একটি Product Class তৈরি করো যেখানে Price এবং Name থাকবে। একটি Method দিয়ে Product Information দেখাও।

class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    showProduct(): void {
        console.log(`${this.name}: ${this.price}`);
    }
}

const product = new Product("Perfume", 1500);
product.showProduct();


// inheritance :
class Animal {
    eat(): void{
        console.log("animal is eating");
        
    }
}

class Dog extends Animal {
    bark(): void{
   console.log("dog is barking")
    }
}

const dog = new Dog()

dog.eat();
dog.bark()



// constructor and super 
class Calculator {
    add(a:number, b: number): number {
        return a+b;
    }
}


class AdvanceCalculator extends Calculator{
       MultiplyAndAdd(a: number, b: number): number{
              const result = super.add(a,b);

              return result *2;
       }
       
}

const calculator = new AdvanceCalculator();
console.log(calculator.MultiplyAndAdd(12,55))



// encapsulation 

class User {
    private password: string = "123456";

    showPassword(): void {
        console.log(this.password);
    }
}

const user = new User();

user.showPassword();



//bank account with balance private 
class BankAccount {
    private balance: number =100;

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }
    
    getBalance (): number {
        return this.balance
    }
}

const account = new BankAccount();
account.deposit(400);
console.log(account.getBalance());





// getter and setter 
class User {
    private _name: string = "saikat";
    get name(): string {
        return this._name; 
    }

set name(newName: string) {
        if (newName.length > 2) {
            this._name = newName;
        }
    }

}


const user = new User();

user.name = "Rahim";

console.log(user.name);
user.name = "modon";
console.log(user.name);


polymorphisom : 
class Animal {
    makeSound(): void {
        console.log("Some sound");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Ghew Ghew");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Meow Meow");
    }
}

const myDog = new Dog();
const myCat = new Cat();

myDog.makeSound();
myCat.makeSound();

// একই মেথড নাম (makeSound), কিন্তু আলাদা অবজেক্টে রূপ বা আউটপুট বদলে গেল—এটিই পলিমর্ফিজম।




// abstraction 
abstract class Machine {
    abstract start(): void;

    stop(): void {
        console.log("Machine stopped");
    }
}

class Laptop extends Machine {
    start(): void {
        console.log("Laptop booted with Power Button");
    }
}

class Car extends Machine {
    start(): void {
        console.log("Car started with Engine Key");
    }
}

const myLaptop = new Laptop();
const myCar = new Car();

myLaptop.start();
myCar.start();


// ১. Machine ক্লাসে start() নামে একটি নিয়ম বানিয়ে রাখা হয়েছে, কিন্তু কীভাবে স্টার্ট হবে তার জটিল কোড সেখানে লেখা হয়নি।
// ২. বাইরের ব্যবহারকারী শুধু জানে যে যেকোনো মেকানিজম বা মেশিন স্টার্ট করার জন্য start() ব্যবহার করতে হবে।
// ৩. Laptop বা Car ক্লাসে গিয়ে আসল ভেতরের ইমপ্লিমেন্টেশন বা লজিক বসানো হয়েছে।

// অর্থাৎ, জটিলতা লুকিয়ে রেখে কেবল প্রয়োজনীয় কন্ট্রোল প্যানেল বা মেথডটুকু বাইরে প্রকাশ করাই হলো অ্যাবস্ট্রাকশন।