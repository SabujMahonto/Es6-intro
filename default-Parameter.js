function add(num1, num2 = 10){
    // num2 == num2 || 0;
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    let total = num1 + num2;
    return total;

}


function name(firstName, lastName ='mahonto'){
    let fullName = firstName +' '+ lastName;
    return fullName;
}


let personFullName= name('sabuj', )


// console.log(add(10,20));
// let totalSum = add(11, 33);
// let totalSum = add(11);
// console.log(totalSum);

console.log(personFullName)