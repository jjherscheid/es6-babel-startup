// Arrow function
var calculate = {  
    array: [1, 2, 3],
    sum: () => { 
        return this.array.reduce((result, item) => 
            result + item);
    }
};
console.log(calculate.sum());

// console.log(this === calculate);
        