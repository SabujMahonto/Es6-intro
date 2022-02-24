// function declaration 
// function add(num1, num2){
//     return num1 + num2
// }
// let total = add(22,11);
// console.log(total);

// // function expression 
// let add1 = function add1(num1, num2){
//     return num1 - num2
// }
// let total = add1( 44,22)
// console.log(total)

// function expression (anonymous) 
const add3 = function(num1, num2){
    return num1 * num2;
}
let total = add3(22,2)
console.log(total);

// arrow function 

const add4 = (num1 , num2)=> num1 +num2;

let totalSum = add4(33,55);
console.log(totalSum)