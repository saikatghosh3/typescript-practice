// type of mainly array k object show korbe. (array , object , null se dai na . )
let x = ["abe"];
console.log(typeof x === "object")
// ei ta use hoi manily type guard vhalovhabe use korte

const printValue = (value: string | number)=>{
if(typeof value === "string"){ // this is type guard.
return value.toUpperCase();

}else
{return value}


// Truthiness:

type User = {
name: string;
address: {
street: string;
};
}| null

const loggedINUswer : User = {
name: "saikat",
address: {
street: "SFD"
}};
const showAdress=(user: User) =>{
if(user && user.address){
console.log(user.address.street);
return
}
throw new Error ("user not found ")
};

//* some caveat of type Guard
const printAll = (x: string  | string[] | null) => {
if(x &&typeof x === "object") {                     // narrow kore dilam jate x null na hoi 
for (let str of x){
console.log(str)
}
} else if (typeof x === "string"){
console.log(x);
}else {console.log("")}
}

// printAll()

// amara ja chaitesi sei ta passi kina . 


// equality : 

const compare = (x: number | string,  y: number | boolean) =>{
if(x=== y){
console.log(x,y);             // both jodi number na hoi tahole to condition checking a dhukbe na . 
}
}

// oporer  code ta equality er maddhome o solve kora jai 

const printAll2 = (x: string | string[] | null) => {
if(x !== null){
if (typeof x === "object"){

for (let str of x){
console.log(str);
}
return;
}
console.log(x);return ; }
console.log("")
}; 
printAll2("asdjgas")


// in operator :

type Bird = {fly: ()=> void};

type Fish = {swim: ()=> void};

const move = (animal : Bird | Fish) => {
if("fly" in animal) {              // ei vhabe access korte pari . sadahronoto kono object er vhitor ei propery ache kina ta amara check kore pari. 
animal.fly();return
} 
animal.swim();
};



// instanceof check  ::
const date = new Date();
const err = new Error ("something went wrong");
console.log(date instanceof Error);
console.log(err instanceof Date);

const showDate = (x: Date | string) =>{
if(x instanceof Date){
console.log(x.toISOString()); 
return; 
} 
const date2 = new Date(x);
console.log(date2.toISOString())
};

showDate(new Date("12-23-1971"))




// discriminated union:

interface Circle{
kind: "circle";
radius: number;
}

interface square {
kind: "square";
sideLength: number;
}


const getArea = (shape: Circle | square) => {
if (shape.kind === "circle"){

console.log(shape.radius);
}else{

console.log(shape.sideLength )
}
}




// Generic :

const wrapInArray = <T>(value: T) => {                         // j e asbe amara take akta array the convert kore dibo. 

return [value ]
}


const strINgArr = wrapInArray <string>("ABC");

const numberArr = wrapInArray<number>(234);

strINgArr.map((item) => item.toUpperCase());

// <> ei angle bracket holo  generic. 




// applying generic type to handle promise. 
// 2-10 number module . ei ta api and error dea promise 
} 
