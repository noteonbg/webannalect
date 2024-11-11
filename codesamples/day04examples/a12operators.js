// Example to demonstrate various JavaScript operators

// 1. Arithmetic Operators
let a = 5;
let b = 2;
let sum = a + b;         // Addition: 5 + 2 = 7
let difference = a - b;  // Subtraction: 5 - 2 = 3
let product = a * b;     // Multiplication: 5 * 2 = 10
let quotient = a / b;    // Division: 5 / 2 = 2.5
let remainder = a % b;   // Modulus: 5 % 2 = 1
let power = a ** b;      // Exponentiation: 5 ** 2 = 25

console.log(sum, difference, product, quotient, remainder, power);

// 2. Assignment Operators
let x = 10;
x += 5;  // x = x + 5 → x = 15
x -= 3;  // x = x - 3 → x = 12
x *= 2;  // x = x * 2 → x = 24
x /= 4;  // x = x / 4 → x = 6
x %= 2;  // x = x % 2 → x = 0
x **= 3; // x = x ** 3 → x = 0 (since 0^3 = 0)

console.log(x);

// 3. Comparison Operators
let isEqual = (a == b);     // true (5 == 2 is false)
let isStrictEqual = (a === b); // false (5 is not strictly equal to 2)
let isGreater = (a > b);    // true (5 > 2)
let isLessOrEqual = (a <= b); // false (5 <= 2)

console.log(isEqual, isStrictEqual, isGreater, isLessOrEqual);

// 4. Logical Operators
let logicalAnd = (true && false);  // false
let logicalOr = (true || false);   // true
let logicalNot = !true;            // false

console.log(logicalAnd, logicalOr, logicalNot);

// 5. Unary Operators
let number = 5;
console.log(++number);  // Increment: 6
console.log(--number);  // Decrement: 5
console.log(-number);   // Unary minus: -5
console.log(typeof number); // typeof: "number"

// 6. Ternary (Conditional) Operator
let max = (a > b) ? 'a is greater' : 'b is greater';
console.log(max);

// 7. Bitwise Operators
let bitwiseAnd = a & b;  // 0101 & 0010 = 0000 (0)
let bitwiseOr = a | b;   // 0101 | 0010 = 0111 (7)
let bitwiseXor = a ^ b;  // 0101 ^ 0010 = 0111 (7)
let bitwiseNot = ~a;     // ~0101 = 1010 (-6)
let leftShift = a << 1;  // 0101 << 1 = 1010 (10)
let rightShift = a >> 1; // 0101 >> 1 = 0010 (2)

console.log(bitwiseAnd, bitwiseOr, bitwiseXor, bitwiseNot, leftShift, rightShift);

// 8. Spread Operator (ES6)
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // Spread arr1 and add 4 and 5
console.log(arr2);

// 9. Rest Operator (ES6)
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4));  // 10

// 10. Typeof Operator
let str = "Hello";
let numberType = typeof str;  // "string"
let arrayType = typeof [1, 2, 3]; // "object" (Arrays are objects)
console.log(numberType, arrayType);

// 11. Delete Operator
let obj = {name: "John", age: 30};
delete obj.age;  // Delete the 'age' property
console.log(obj); // { name: "John" }

//Spread Operator: Expands elements of an array or object.
//Rest Operator: Gathers remaining values into an array.

