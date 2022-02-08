
const num_factorial = 71

let factorial = 1

for (let i = 2; i <= num_factorial; i++) {
    factorial = factorial * i
}

let primo = true

for (let i = 2; i < num_factorial; i++) {
    if (num_factorial % i == 0) {
        primo = false
    }
    
}

console.log(primo);

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
