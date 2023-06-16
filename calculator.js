"use strict";
// npm init -y
// npm install --save-dev typsescipt
// npm i --save-dev @types/node
// npx tsc --init
// npx tsc
// node calculator.js
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
class Calculator {
    // basic operations
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
    // readline function
    calculateFromInput() {
        // const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.question('Enter the operation ("add", "subtract", "multiply", "divide"): ', (operation) => {
            rl.question('Enter the first value: ', (value1) => {
                rl.question('Enter the second value: ', (value2) => {
                    try {
                        const parsedValue1 = parseFloat(value1);
                        const parsedValue2 = parseFloat(value2);
                        let result;
                        switch (operation) {
                            case 'add':
                                result = this.add(parsedValue1, parsedValue2);
                                break;
                            case 'subtract':
                                result = this.subtract(parsedValue1, parsedValue2);
                                break;
                            case 'multiply':
                                result = this.multiply(parsedValue1, parsedValue2);
                                break;
                            case 'divide':
                                result = this.divide(parsedValue1, parsedValue2);
                                break;
                            default:
                                throw new Error('Invalid operation.');
                        }
                        console.log('Result:', result);
                    }
                    catch (error) {
                        console.error('Error:', error.message);
                    }
                    finally {
                        rl.close();
                    }
                });
            });
        });
    }
}
// instanciate the class
const calculator = new Calculator();
// examples // expected outputs
console.log(calculator.add(5, 2)); // Output: 7
console.log(calculator.subtract(5, 2)); // Output: 3
console.log(calculator.multiply(5, 2)); // Output: 10
console.log(calculator.divide(5, 2)); // Output: 2.5
calculator.calculateFromInput();
