
const num_factorial = 20

let factorial = 1

for (let i = 2; i <= num_factorial; i++) {
    factorial = factorial * i
}


let a = 1
let b = 1
let c = 0

for (let i = 0; i < num_factorial; i++) {
    b = a
    a = c
    c = a + b
}

console.log(factorial);
console.log(c);