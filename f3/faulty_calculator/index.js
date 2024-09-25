//Template literal
//Example 1
// const a = 2;
// const b = 3;
// const c = '+';
// console.log(`${a} ${c} ${b}`); // Outputs: "2 + 3"

//Example 2
// const x = 5;
// const y = 10;
// console.log(`The sum of x and y is ${x + y}.`); // Outputs: "The sum of x and y is 15."

/*
The eval() function takes a string as an argument and evaluates it as if it were a JavaScript expression or statement. 
This means that any valid JavaScript code in the string will be executed.
*/



let a=prompt("Enter the first number"); //prompt method is a built in method for the browsers only
let b=prompt("enter the seconnd number");
let c=prompt("Enter th op");

let random=Math.random()
console.log(random)

let o={
    "+":"-",
    "*":"/",
   
}
//10% probability
if(random<=0.1){
    c=o[c];
    console.log("res_false: "+eval(`${a}${c}${b}`));
    alert(`res_false: ${eval(`${a}${c}${b}`)}`);

}

else{
    console.log("Res_true: "+eval(`${a}${c}${b}`));
   
    alert(`Res_true: ${eval(`${a}${c}${b}`)}`);

}