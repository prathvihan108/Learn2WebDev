let numbers = [1, 2, 3, 4, 5];

const mul=(a,b)=>{
    return a*b;
}
let res=mul(2,3);
console.log(res);

let product = numbers.reduce(mul);

// let product = numbers.reduce(function(a, b) {
//   return a * b;
// });

console.log(product); // Output: 120
