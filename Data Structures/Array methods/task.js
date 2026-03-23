let numbers = ["One", "Two", "Three", "Four", "Five"];
let answer = [];

// Solve the task here
answer.push(numbers.shift());
answer.unshift(numbers.shift());

console.log(numbers);
console.log(answer);
