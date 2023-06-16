"use strict";
// npm init -y
// npm install --save-dev typsescipt
// npx tsc --init
// npx tsc
// node calculator.js
class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed!");
        }
        return a / b;
    }
}
// instanciate the class
const calculator = new Calculator();
// examples // expected outputs
console.log(calculator.add(5, 2)); // Output: 7
console.log(calculator.subtract(5, 2)); // Output: 3
console.log(calculator.multiply(5, 2)); // Output: 10
console.log(calculator.divide(5, 2)); // Output: 2.5
