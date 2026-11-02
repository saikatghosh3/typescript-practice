// 1. Calculate Sum
// Question: এমন একটি Function তৈরি করো, যেটি যেকোনো সংখ্যক Number গ্রহণ করবে এবং সবগুলোর যোগফল return করবে।


function calculateSum (...numbers: number[]) : number{
    let total : number = 0;
    for (let i = 0; i<= numbers.length; i++){
        total += numbers[i]
    }
    return total;
}

    
    console.log(calculateSum(10, 20));     
console.log(calculateSum(10, 20, 30));  
console.log(calculateSum(5, 10, 15, 20));



// 3. Calculate Average
// Question: Rest Parameter ব্যবহার করে যেকোনো সংখ্যক Number গ্রহণ করো এবং তাদের Average বের করো।



function calculateAverage(...numbers: number[]): number | null {
    if (numbers.length === 0) {
        return null;
    }

    let total: number = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total / numbers.length;
}

console.log(calculateAverage(10, 20, 30));