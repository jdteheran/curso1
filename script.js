
const num_factorial = 6

let factorial = 1

for (let i = 2; i <= num_factorial; i++) {
    factorial = factorial * i
}

let primo = true

for (let i = 1; i <=num_factorial; i++) {
    if (num_factorial % i == 0) {
        primo = false
    }
    
}

console.log(factorial);
console.log(primo);