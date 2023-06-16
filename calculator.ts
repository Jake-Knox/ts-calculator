// npm init -y
// npm install --save-dev typsescipt
// npm i --save-dev @types/node
// npx tsc --init
// npx tsc
// node calculator.js

import * as readline from 'readline';

class Calculator {

    // basic operations
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number {
        if( b === 0) {
            throw new Error("Division by zero is not allowed!");
        }
        return a / b;        
    }

    // readline function
    calculateFromInput(): void {
        // const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.question('Enter the operation ("add", "subtract", "multiply", "divide"): ', (operation: string) => {
            rl.question('Enter the first value: ', (value1: string) => {
              rl.question('Enter the second value: ', (value2: string) => {
                try {
                  const parsedValue1: number = parseFloat(value1);
                  const parsedValue2: number = parseFloat(value2);
                  let result: number;
      
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
                } catch (error) {
                  console.error('Error:', (error as Error).message);
                } finally {
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
console.log(calculator.add(5, 2));       // Output: 7
console.log(calculator.subtract(5, 2));  // Output: 3
console.log(calculator.multiply(5, 2));  // Output: 10
console.log(calculator.divide(5, 2));    // Output: 2.5

calculator.calculateFromInput();
