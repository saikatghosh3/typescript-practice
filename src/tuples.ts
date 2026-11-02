// 1. create a tuple with sting, number , boolean 
let user : [string, number, boolean];
user = ["saikat", 23, true];
console.log(user);

// .2. accessing tupe element .
console.log(user[0]);
console.log(user[1]);
console.log(user[2]);

// 3.update tuple value 
let product : [string, number];
product = ["laptop", 50000];
console.log("oldprice", product[1]);
product[1]= 60000
console.log("newprice", product[1]);


// more complex problem 
// find total marks 
let marks :[number, number, number] =[30, 66, 90];
let total :number = 0;
for (let i = 0; i< marks.length; i++){
total += marks[i]
}
console.log(`total marks : ${total}`);
