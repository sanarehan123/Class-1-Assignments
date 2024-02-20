// Tests for equality and inequality with strings
let color = 'blue';
console.log("Is color equal to 'blue'? I predict True.");
console.log(color == 'blue');

console.log("Is color not equal to 'red'? I predict True.");
console.log(color != 'red');

// Tests using the lower case function
let text = 'Hello World';
console.log("Is 'Hello World' in lowercase equal to 'hello world'? I predict True.");
console.log(text.toLowerCase() == 'hello world');



// Numerical tests
let x = 10;
let y = 5;

console.log("Is x equal to y? I predict False.");
console.log(x == y);

console.log("Is x not equal to y? I predict True.");
console.log(x != y);

console.log("Is x greater than y? I predict True.");
console.log(x > y);

console.log("Is x less than or equal to y? I predict False.");
console.log(x <= y);

// Tests using "and" and "or" operators
let sunny = true;
let warm = true;

console.log("Is it sunny and warm? I predict True.");
console.log(sunny && warm);

console.log("Is it sunny or warm? I predict True.");
console.log(sunny || warm);

// Test whether an item is in an array
let fruits = ['apple', 'banana', 'orange'];

console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes('apple'));

// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));
let city1 = 'New York';
let city2 = 'Los Angeles';

console.log("Is 'New York' in lowercase equal to 'new york'? I predict True.");
console.log(city1.toLowerCase() == 'new york');