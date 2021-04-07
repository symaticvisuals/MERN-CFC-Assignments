function factorial(number) {
    
    let fact = 1;
    while (number > 1) {
        fact = fact * number;
        number--;
    }
    return fact;
}
console.log(factorial(5));
let n = 5;
let row = 0;
while (row < n) {
    let col = 0;
    while (col <= row) {
        process.stdout.write(factorial(row) / (factorial(col) * factorial(row-col))+" ");
        col++;
    }
    row++;
    console.log();
}
