// // const addTwo = (a,b)=>{
// //     return a+b;
// // }

// // let myStrig: string = "saikat" ;
// // let myNumber: number = 133;
// // let myBoolean : boolean = true;
// // let mySymbol:symbol = Symbol()
// // let myBigint: bigint = 100n;

// // mostly handle hobe ei tin ta mane use hobe :
// // let myStrig: string = "saikat" ;
// // let myNumber: number = 133;
// // let myBoolean : boolean = true;



// const addTwo = (a:number, b:number): number =>{
//     return a + b;
// }
// console.log(addTwo(122, 44));

// // array 
// const arr: string[]= ["rahim", "karim"]
// const number: number[] = [2,3,4,5,6]

// // tuple:this is one type of array with fixed length, kon positon a ki type data bosbe sei ta o fixed thakbe. 
// // latitude and longtude 
// // jokhon ami sure hoiye jabe j only ei type er data e asbe and fixed maan e bosbe change hobe na . sei khetre amra tuple use korbo 

// // const dhakaLatLong : [number, number] = [23.8103 , 90.4125];
// // but ei khetre akta problem ache sei ta holo push property kaj kore,  jodi amra thakate chai thaole readonly propety add korte hobe 

// const dhakaLatLong :readonly [number, number] = [23.8103 , 90.4125];


// // optional , default and rest parameters  
// const concatName = (firstName: string,  lastName?: string)=>{
//     if(!lastName){
//         return firstName
//     }
//     return firstName +" "+lastName
// }
// console.log(concatName("saikat"))

// // ei kahane lastname thakte o pare abar na o pare sei khetre amara ? question mark use kore amra optional kore dite pari.


// // void mane sunno mane kisu return korse na . 
// // kono kisu na pathano isequal to undefined. 
// // default value always 2nd parameter a pathano uchit. 

// const greetings = ( fullName : string , greeting ="hello")=>{
//     console.log(greeting + "" +"firstName")
// };
// console.log(greetings("saikat"))


// // rest parameters 
// const sum = (...numbers: number[]){
//     return numbers.reduce((total, sum)=> total + sum, 0)
// }
// sum(1,2,3,4,5)


// // 2nd example 

// const logUserAction = (...args : [name:string, age:number, isActive: boolean])=>{
//     const [name, age]= args;
//     console.log(name + "is"+ age)
// }
// logUserAction("Mir", 1923, false);


// // objet, type , alias interface 
// // akta object make korte hole tar type likhte hoi, and jodi r akta object banata chi tahole tar o type likha lage, tai ei problem theke 
// // par pete amra type alias use kori 
// // type alias dea nicher example:

// type User = {
//     name: string;
//     age: number;
//     isActive: boolean;
//     action: ()=> void;
//     badges:string[];
//     address: Address;
// }

// const user : User = {
//     name: "saikat",
//     age: 343,
//     isActive: true,
//     action: ()=>console.log("hello"),
//     badges: ["abc", "def"],
//     address:{
//         holdingNumber:123,
//         streetName:"abd"
// }
// }


// // akhon interface o create kora jai 
// // interface iUser{
// //        name: string;
// //     age: number;
// //     isActive: boolean;
// //     action: ()=> void;
// //     badges:string[];
// // }

// // dekhte ak e rokom  ,  equal nai only . kaj o same , j sokol jaigai interface use kora jai sei sob jaigai amra interface use korbo 
// // jodi possible na hoi then amra type alias use korbo


// // akhon dhori amar address add kora lagbe type alias er vhitor . sei khetre ami r akta type alias banabo . 
// // type Address = {
// //     streetName: string;
// //     holdingNumber: number;
// // }


// type script practice  problem solving    
import "./tuples.js";
import "./optional-default.js";
import "./rest.js";
import "./practicetwo.js"