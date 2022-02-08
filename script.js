
const num_factorial = 6

let factorial = 1

for (let i = 2; i <= num_factorial; i++) {
    factorial = factorial * i
}


let a = 1
let b = 1
let c = 0

for (let i = 0; i < num_factorial; i++) {
    c = a + b
    b = c
    a = b
}

console.log(factorial);
console.log(c);